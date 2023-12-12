import { forwardRef, useState } from "react";
import PropTypes from "prop-types";

import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";
import { Select } from "@consta/uikit/Select";
import { ContextMenu } from "@consta/uikit/ContextMenu";

// Icons
import { IconCursorMouse } from "@consta/icons/IconCursorMouse";
import { IconFolderOpen } from "@consta/icons/IconFolderOpen";
import { IconHand } from "@consta/icons/IconHand";
import { IconShape } from "@consta/icons/IconShape";
import { IconTree } from "@consta/icons/IconTree";
import { IconWindow } from "@consta/icons/IconWindow";
import { IconHamburger } from "@consta/uikit/IconHamburger";
import { IconTable2 } from "@consta/icons/IconTable2";
import { IconAdd } from "@consta/uikit/IconAdd";
import { IconNodeStep } from "@consta/icons/IconNodeStep";
import { IconCheck } from "@consta/icons/IconCheck";
import { IconSettings } from "@consta/icons/IconSettings";

import { trimItemsMock } from "../mock";

const ContentHeaderMobile = forwardRef((props, ref) => {
  const {
    tableFullHeight,
    toggleLeftSideModalCalc,
    leftSideActiveModal,
    windowWidth,
    toggleLeftSideModalData,
    isOpen,
    toggleContextMenu,
    items,
    renderRightSide,
    onChange,
    setLeftSideActiveModal,
    setTableOpen,
    setTableHeight,
    setTableFullHeight,
    tableOpen,
    setIsOpen,
    trimValue,
    setTrimValue,
    isSettingsModalOpen,
    setIsSettingsModalOpen,
  } = props;

  const [isTrimSettingsOpen, setIsTrimSettigsOpen] = useState(false);

  const toggleSettingsModal = () => {
    setIsSettingsModalOpen((prev) => !prev);
    setIsOpen(false);
    setLeftSideActiveModal(null);
  };

  return (
    <Layout
      className="home__header"
      style={{ backgroundColor: `${tableFullHeight ? "white" : ""}` }}
    >
      <Layout className="home__header-left">
        <Button
          truncate="true"
          onClick={toggleLeftSideModalCalc}
          className={`home__header--button truncate-btn ${
            leftSideActiveModal == 0 ? "active-button" : ""
          }`}
          label="Расчет региона №1 Зеленая роща"
          iconLeft={IconHamburger}
          view="ghost"
          size="xs"
          onlyIcon={windowWidth <= 800}
        />
        <Button
          onClick={toggleLeftSideModalData}
          className={`home__header--button ${
            leftSideActiveModal == 1 ? "active-button" : ""
          }`}
          label="Данные"
          iconLeft={IconTree}
          view="ghost"
          size="xs"
          onlyIcon
        />
        <Button
          className={`home__header--button  ${
            leftSideActiveModal == 2 ? "active-button" : ""
          }`}
          label="Обьекты"
          iconLeft={IconFolderOpen}
          view="ghost"
          size="xs"
          onlyIcon
          onClick={() => {
            const active = leftSideActiveModal === 2 ? null : 2;
            setIsOpen(false);
            setLeftSideActiveModal(active);
            setIsSettingsModalOpen(false);
          }}
        />
        <Button
          className={`home__header--button ${
            isSettingsModalOpen ? "active-button" : ""
          }`}
          label="Настройки"
          iconLeft={IconSettings}
          view="ghost"
          size="xs"
          onlyIcon
          onClick={() => toggleSettingsModal()}
        />
        <Button
          onClick={() => {
            setTableOpen((prev) => !prev);

            if (tableFullHeight) {
              setTableHeight(0);
              setTableFullHeight(false);
            }

            if (tableOpen !== 0) {
              setTableHeight(0);
            }
          }}
          className={`home__header--button ${tableOpen ? "active-button" : ""}`}
          label="Таблица"
          iconLeft={IconTable2}
          view="ghost"
          size="xs"
          onlyIcon
        />
        <Button
          className={`home__header--button  ${isOpen ? "active-button" : ""}`}
          label="Вид"
          iconLeft={IconWindow}
          view="ghost"
          size="xs"
          onlyIcon
          onClick={toggleContextMenu}
        />
        <ContextMenu
          size="xs"
          isOpen={isOpen}
          items={items}
          anchorRef={ref}
          getItemRightSide={(item) => renderRightSide(item, onChange)}
          className="view-context-menu"
        />
      </Layout>
      <Layout className="home__header-right">
        {!isTrimSettingsOpen ? (
          <>
            <Button
              className="home__header--button"
              label="Move"
              iconLeft={IconCursorMouse}
              view="ghost"
              size="xs"
              onlyIcon
            />
            <Button
              className="home__header--button"
              label="Handle"
              iconLeft={IconHand}
              view="ghost"
              size="xs"
              onlyIcon
            />
            <Button
              className="home__header--button"
              label="Trim"
              iconLeft={IconShape}
              view="ghost"
              size="xs"
              onlyIcon
              onClick={() => setIsTrimSettigsOpen(true)}
            />
          </>
        ) : (
          <>
            <Button
              className="home__header--button"
              label="Trim"
              iconLeft={IconShape}
              size="xs"
              onlyIcon
            />
            <Button
              className="home__header--button"
              label="Trim"
              view="ghost"
              iconLeft={IconNodeStep}
              size="xs"
              onlyIcon
            />
            <Layout>
              <Select
                items={trimItemsMock}
                size="xs"
                value={trimValue}
                onChange={({ value }) => setTrimValue(value)}
                style={{ width: !(windowWidth <= 412) ? "100px" : "40px" }}
              />
              <Button
                className="home__header--button"
                label="Add"
                size="xs"
                view="secondary"
                iconLeft={IconAdd}
                onlyIcon
                style={{
                  borderRadius: "0px 4px 4px 0px",
                  border: "1px solid #0078D2",
                  background: "white",
                }}
              />
            </Layout>
            <Button
              className="home__header--button"
              label="Готово"
              size="xs"
              iconLeft={windowWidth <= 412 && IconCheck}
              onlyIcon={windowWidth <= 412}
              onClick={() => setIsTrimSettigsOpen(false)}
            />
          </>
        )}
      </Layout>
    </Layout>
  );
});

ContentHeaderMobile.propTypes = {
  tableFullHeight: PropTypes.bool,
  toggleLeftSideModalCalc: PropTypes.func,
  leftSideActiveModal: PropTypes.number,
  windowWidth: PropTypes.number,
  toggleLeftSideModalData: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleContextMenu: PropTypes.func,
  items: PropTypes.array,
  renderRightSide: PropTypes.func,
  onChange: PropTypes.func,
  setLeftSideActiveModal: PropTypes.func,
  setTableOpen: PropTypes.func,
  setTableHeight: PropTypes.func,
  setTableFullHeight: PropTypes.func,
  tableOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  trimValue: PropTypes.any,
  setTrimValue: PropTypes.func,
  isSettingsModalOpen: PropTypes.bool,
  setIsSettingsModalOpen: PropTypes.func,
};

ContentHeaderMobile.displayName = "ContentHeaderMobile";
export default ContentHeaderMobile;
