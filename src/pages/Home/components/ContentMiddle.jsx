import PropTypes from "prop-types";

import { forwardRef, useEffect, useState } from "react";
import { Layout } from "@consta/uikit/Layout";
import { List } from "@consta/uikit/ListCanary";
import { Text } from "@consta/uikit/Text";
import { Collapse } from "@consta/uikit/Collapse";
import Modal from "@components/common/Modal/";
import { ReflexElement } from "react-reflex";
import { CollapseGroup } from "@consta/uikit/CollapseGroup";

import {
  dataItems,
  sameMenuItems,
  objectMenuItems,
  choiceGroupData,
} from "../mock";
import useSettingsData from "../mock/useSettingsData";

import "react-reflex/styles.css";
import { Button } from "@consta/uikit/Button";

const ContentMiddle = forwardRef((props, ref) => {
  const {
    setIsObjectModalFullHeight,
    leftSideActiveModal,
    setLeftSideActiveModal,
    calculationItems,
    calculationItemChecked,
    setCalculationItemChecked,
    RightSideActiveModal,
    setRightSideActiveModal,
    windowWidth,
    windowHeight,
    table50,
    setIsSettingsModalOpen,
    isSettingsModalOpen,
    setIsSettingsModalFullHeight,
  } = props;

  const settings = useSettingsData();

  // Default opened collapse counter: 10
  const defaultOpened = Array(10)
    .fill(null)
    .map((_, index) => index);

  const [collapseIsOpen, setcollapseIsOpen] = useState(true);
  const [openedCollapses] = useState(defaultOpened);

  // Left side popup data
  const [dataItemChecked, setDataItemChecked] = useState(dataItems[0]);
  const [switchedData, setSwitchedData] = useState(dataItems[0]);

  // Right side popup data
  const [objectItemChecked, setObjectItemChecked] = useState(
    objectMenuItems[0].data[0]
  );
  const [sameItemChecked, setSameItemChecked] = useState(sameMenuItems[0]);
  const [switchedObject, setSwitchedObject] = useState(null);
  const [settingsItemChecked, setSettingsItemChecked] = useState(null);
  const [currentSettingsData, setCurrentSettingsData] = useState(null);

  const [choiceDataId, setChoiceDataId] = useState(objectMenuItems[0].id);

  const objectDataChoicedById = objectMenuItems.filter(
    (item) => item.id === choiceDataId
  )[0]?.data;

  const [transform, setTransform] = useState(false);

  useEffect(() => {
    if (settingsItemChecked) {
      setTransform(true);
      setCurrentSettingsData(settingsItemChecked.data);
    }
  }, [settingsItemChecked]);

  return (
    <Layout className="home__middle">
      {/* Calculation and Data Popup menu */}
      <Layout direction="row">
        <Modal
          isOpen={leftSideActiveModal == 0}
          title="Расчеты"
          onClose={() => setLeftSideActiveModal(null)}
          defaultType={
            <ReflexElement className="left-pane">
              <Layout direction="column" className="home__calculations-modal">
                <List
                  items={calculationItems}
                  getItemRightSide={(item) => (
                    <Text className="home__calculations-modal--date">
                      {item.date}
                    </Text>
                  )}
                  getItemChecked={(item) => calculationItemChecked === item}
                  onItemClick={setCalculationItemChecked}
                  className="home__calculations-modal--listitems"
                />
              </Layout>
            </ReflexElement>
          }
        />
        <Modal
          isOpen={leftSideActiveModal == 1}
          style={{
            minHeight: table50 ? "100%" : "245px",
            position: "absolute",
            left: "12px",
          }}
          title="Данные"
          onClose={() => setLeftSideActiveModal(null)}
          defaultType={
            <ReflexElement
              className="left-pane"
              minSize={44}
              style={{ height: "150px !important" }}
            >
              <Layout direction="column" className="home__data-modal">
                <List
                  items={dataItems}
                  getItemChecked={(item) => {
                    if (dataItemChecked === item) {
                      setSwitchedData(dataItemChecked);
                    }

                    return dataItemChecked === item;
                  }}
                  onItemClick={setDataItemChecked}
                />
              </Layout>
            </ReflexElement>
          }
          sameType={
            <ReflexElement className="right-pane" minSize={33} size={80}>
              <Text size="xs" view="secondary">
                {switchedData.text}
              </Text>
            </ReflexElement>
          }
        />
      </Layout>

      <Layout ref={ref} className="home__context-menu"></Layout>

      {/* Objects Popup menu */}
      <Layout className="home__object-modal-wrapper">
        <Modal
          isOpen={RightSideActiveModal || leftSideActiveModal == 2}
          setIsObjectModalFullHeight={setIsObjectModalFullHeight}
          title="Обьекты"
          isCollapse={true}
          isChoiceGroup={true}
          getChoice={(data) => setChoiceDataId(data.dataID)}
          choiceGroupData={choiceGroupData}
          onClose={() => {
            setRightSideActiveModal(false);
            if (windowWidth <= 640) {
              setLeftSideActiveModal(null);
            }
          }}
          defaultType={
            <ReflexElement className="left-pane" minSize={56}>
              <Layout direction="column" className="home__object-modal">
                {objectDataChoicedById ? (
                  <List
                    items={objectDataChoicedById}
                    getItemChecked={(item) => {
                      if (objectItemChecked === item) {
                        setSwitchedObject(objectItemChecked);
                      }

                      return objectItemChecked === item;
                    }}
                    onItemClick={setObjectItemChecked}
                  />
                ) : (
                  <p>No Data</p>
                )}
              </Layout>
            </ReflexElement>
          }
          sameType={
            <ReflexElement className="right-pane relative" minSize={33}>
              <Collapse
                size="xs"
                label="Однотипные"
                isOpen={collapseIsOpen}
                onClick={() => setcollapseIsOpen(!collapseIsOpen)}
                iconPosition="right"
              >
                {(RightSideActiveModal || leftSideActiveModal == 2) && (
                  <Layout
                    direction="column collapse-content"
                    style={{
                      width: "98%",
                      gap: 6,
                      paddingRight: 3,
                    }}
                  >
                    <List
                      items={switchedObject?.data}
                      getItemChecked={(item) => sameItemChecked === item}
                      onItemClick={setSameItemChecked}
                    />
                  </Layout>
                )}
              </Collapse>
            </ReflexElement>
          }
          style={{
            minHeight: table50 ? "100%" : "400px",
            boxShadow:
              "0px 8px 24px -4px rgba(24, 39, 75, 0.08), 0px 6px 12px -6px rgba(24, 39, 75, 0.05)",
          }}
        />
      </Layout>
      <Layout className="home__settings-modal">
        <Modal
          isOpen={isSettingsModalOpen}
          setIsSettingsModalFullHeight={setIsSettingsModalFullHeight}
          title="Настройки"
          settingsData={settingsItemChecked ? settingsItemChecked : null}
          setTransform={setTransform}
          currentSettingsData={currentSettingsData}
          setCurrentSettingsData={setCurrentSettingsData}
          isCollapse={true}
          isSettingsModal={true}
          onClose={() => {
            setIsSettingsModalOpen(false);
          }}
          style={{
            minHeight: table50 || windowHeight < 711 ? "100%" : "557px",
            boxShadow:
              "0px 8px 24px -4px rgba(24, 39, 75, 0.08), 0px 6px 12px -6px rgba(24, 39, 75, 0.05)",
          }}
          defaultType={
            <Layout style={{ overflow: "hidden", gap: "20px" }}>
              <Layout
                direction="column"
                style={{
                  minWidth: "305px",
                  width: "100%",
                  position: "absolute",
                }}
                className={`${transform ? "slide-left" : "slide-right"}`}
              >
                <List
                  items={settings}
                  size="xs"
                  getItemChecked={(item) => settingsItemChecked === item}
                  onItemClick={setSettingsItemChecked}
                  className="home__settings-list"
                />
              </Layout>

              <Layout
                direction="column"
                style={{
                  minWidth: "305px",
                  width: "100%",
                  position: "absolute",
                  height: "100%",
                }}
                className={`home__settings-modal--content ${
                  transform ? "slide-left2" : "slide-right2"
                }`}
              >
                <CollapseGroup
                  items={currentSettingsData || []}
                  size="s"
                  horizontalSpace="m"
                  iconPosition="right"
                  opened={openedCollapses}
                />
                <Layout
                  style={{ flexGrow: "1" }}
                  className="home__settings-modal--bottom"
                >
                  <Layout
                    style={{
                      borderTop: "1px solid lightgray",
                      gap: "4px",
                      paddingTop: "8px",
                      paddingRight: "12px",
                      paddingLeft: "12px",
                    }}
                  >
                    <Button
                      label="Сбросить"
                      view="ghost"
                      size="xs"
                      style={{ width: "50%" }}
                    />
                    <Button
                      label="Сохранить"
                      view="primary"
                      size="xs"
                      style={{ width: "50%" }}
                    />
                  </Layout>
                </Layout>
              </Layout>
            </Layout>
          }
        />
      </Layout>
    </Layout>
  );
});

ContentMiddle.propTypes = {
  leftSideActiveModal: PropTypes.number,
  setLeftSideActiveModal: PropTypes.func,
  calculationItems: PropTypes.array,
  calculationItemChecked: PropTypes.object,
  setCalculationItemChecked: PropTypes.func,
  setDataItemChecked: PropTypes.func,
  RightSideActiveModal: PropTypes.bool,
  setRightSideActiveModal: PropTypes.func,
  objectMenuItems: PropTypes.array,
  setSameItemChecked: PropTypes.func,
  setIsObjectModalFullHeight: PropTypes.func,
  windowWidth: PropTypes.number,
  table50: PropTypes.bool,
  setIsSettingsModalOpen: PropTypes.func,
  isSettingsModalOpen: PropTypes.bool,
  setIsSettingsModalFullHeight: PropTypes.func,
  windowHeight: PropTypes.number,
};

ContentMiddle.displayName = "ContentMiddle";
export default ContentMiddle;
