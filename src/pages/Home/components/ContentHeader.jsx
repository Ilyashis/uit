import { forwardRef, useState } from "react";
import PropTypes from "prop-types";

import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";
import { ContextMenu } from "@consta/uikit/ContextMenu";
import { Select } from "@consta/uikit/Select";

// Icons
import { IconCursorMouse } from "@consta/icons/IconCursorMouse";
import { IconFolderOpen } from "@consta/icons/IconFolderOpen";
import { IconHand } from "@consta/icons/IconHand";
import { IconShape } from "@consta/icons/IconShape";
import { IconNodeStep } from "@consta/icons/IconNodeStep";
import { IconTree } from "@consta/icons/IconTree";
import { IconWindow } from "@consta/icons/IconWindow";
import { IconHamburger } from "@consta/uikit/IconHamburger";
import { IconAdd } from "@consta/uikit/IconAdd";
import { IconSettings } from "@consta/uikit/IconSettings";

import { trimItemsMock } from "../mock";

const ContentHeader = forwardRef((props, ref) => {
  const {
    tableFullHeight,
    toggleLeftSideModalCalc,
    leftSideActiveModal,
    windowWidth,
    toggleLeftSideModalData,
    RightSideActiveModal,
    toggleRightSideModalObject,
    isOpen,
    toggleContextMenu,
    items,
    trimValue,
    setTrimValue,
    renderRightSide,
    onChange,
    setIsSettingsModalOpen,
    isSettingsModalOpen,
    setIsOpen,
    setRightSideActiveModal,
  } = props;
  const [isTrimSettingsOpen, setIsTrimSettigsOpen] = useState(false);

  const toggleSettingsModal = () => {
    setIsSettingsModalOpen((prev) => !prev);
    setIsOpen(false);
    setRightSideActiveModal(false);
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
      </Layout>
      <Layout className="home__header-center">
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
                style={{ width: "100px" }}
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
              onClick={() => setIsTrimSettigsOpen(false)}
            />
          </>
        )}
      </Layout>
      <Layout className="home__header-right">
        <Button
          className={`home__header--button ${
            RightSideActiveModal ? "active-button" : ""
          }`}
          label="Обьекты"
          iconLeft={IconFolderOpen}
          view="ghost"
          size="xs"
          onlyIcon={windowWidth <= 800}
          onClick={() => toggleRightSideModalObject()}
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
        <Layout className="home__header-right--border"></Layout>
        <Button
          className={`home__header--button ${isOpen ? "active-button" : ""}`}
          label="Вид"
          iconLeft={IconWindow}
          view="ghost"
          size="xs"
          onClick={toggleContextMenu}
        />
        <ContextMenu
          size="xs"
          isOpen={isOpen}
          items={items}
          anchorRef={ref}
          getItemRightSide={(item) => renderRightSide(item, onChange)}
          className="view-context-menu"
          style={{ marginLeft: "-12px" }}
        />
      </Layout>
    </Layout>
  );
});

ContentHeader.propTypes = {
  tableFullHeight: PropTypes.bool,
  toggleLeftSideModalCalc: PropTypes.func,
  leftSideActiveModal: PropTypes.number,
  windowWidth: PropTypes.number,
  toggleLeftSideModalData: PropTypes.func,
  RightSideActiveModal: PropTypes.bool,
  toggleRightSideModalObject: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleContextMenu: PropTypes.func,
  items: PropTypes.array,
  renderRightSide: PropTypes.func,
  onChange: PropTypes.func,
  trimValue: PropTypes.any,
  setTrimValue: PropTypes.func,
  setIsSettingsModalOpen: PropTypes.func,
  isSettingsModalOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  setRightSideActiveModal: PropTypes.func,
};

ContentHeader.displayName = "ContentHeader";
export default ContentHeader;
