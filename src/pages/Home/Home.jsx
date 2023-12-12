// React
import { useEffect, useRef, useState } from "react";

// Consta/uikit components
import { Layout } from "@consta/uikit/Layout";
import { Switch } from "@consta/uikit/Switch";

// Components
import Table from "./components/Table";
import ContentHeader from "./components/ContentHeader";
import ContentHeaderMobile from "./components/ContentHeaderMobile";
import ContentMiddle from "./components/ContentMiddle";
import Footer from "./components/Footer";

// Mock data
import { calculationItems, contextMenuItems } from "./mock";

import "./Home.style.scss";

export default function Home() {
  // Active Pop up window states
  const [leftSideActiveModal, setLeftSideActiveModal] = useState(null);
  const [RightSideActiveModal, setRightSideActiveModal] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isObjectModalFullHeight, setIsObjectModalFullHeight] = useState(false);
  const [isSettingsModalFullHeight, setIsSettingsModalFullHeight] =
    useState(false);
  const [
    isObjectModalClosedWithFullHeight,
    setIsObjectModalClosedWithFullHeight,
  ] = useState(false);
  const [
    isSettingsModalClosedWithFullHeight,
    setIsSettingsModalClosedWithFullHeight,
  ] = useState(false);

  // Pop up window data states
  const [calculationItemChecked, setCalculationItemChecked] = useState(
    calculationItems[0]
  );

  // Window states
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Context menu states
  const [items, setItems] = useState(contextMenuItems);
  const [isOpen, setIsOpen] = useState(false);

  // Table states
  const [tableHeight, setTableHeight] = useState(0);
  const [tableFullHeight, setTableFullHeight] = useState(false);
  const [tableOpen, setTableOpen] = useState(false);
  const [table50, setTable50] = useState(false);

  // Trim value state
  const [trimValue, setTrimValue] = useState({
    label: "Слой 1",
    id: 1,
  });

  // Context menu
  const ref = useRef(null);

  // Toggle pop-up window 1 (left side)
  const toggleLeftSideModalCalc = () => {
    if (windowWidth <= 639) {
      setIsOpen(false); // close context menu
      setIsSettingsModalOpen(false);
    }

    const active = leftSideActiveModal === 0 ? null : 0;
    setLeftSideActiveModal(active);
  };

  // Toggle pop-up window 2 (left side)
  const toggleLeftSideModalData = () => {
    if (windowWidth <= 639) {
      setIsOpen(false);
      setIsSettingsModalOpen(false); // close context menu
    }

    const active = leftSideActiveModal === 1 ? null : 1;
    setLeftSideActiveModal(active);
  };

  // Toggle pop-up window 3 (right side)
  const toggleRightSideModalObject = () => {
    setRightSideActiveModal((prev) => !prev);
    setIsOpen(false); // close context menu
    setIsSettingsModalOpen(false);
  };

  // Toggle context menu (right side)
  const toggleContextMenu = () => {
    if (windowWidth <= 639) {
      setLeftSideActiveModal(null);
      setIsOpen(!isOpen);
      setIsSettingsModalOpen(false);
    } else {
      setRightSideActiveModal(false);
      setIsSettingsModalOpen(false);
      setIsOpen(!isOpen);
    }
  };

  // Render Switch in Context Menu (right side)
  function renderRightSide(item, onChange) {
    const nodeArray = [];

    if (item.switch !== undefined) {
      nodeArray.push(
        <Switch
          size="s"
          checked={item.switch}
          onChange={() => onChange(item)}
          key="Switch"
        />
      );
    }

    return nodeArray;
  }

  // Get state switched Item
  const onChange = (switchItem) => {
    const newItems = items.map((item, index) => {
      if (switchItem.label === item.label) {
        return { ...items[index], switch: !items[index].switch };
      }
      return item;
    });

    setItems(newItems);
  };

  // Get window width and height for resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // If the right sidebar is not active, it will return the map layer to its place.
  useEffect(() => {
    if (!RightSideActiveModal) {
      if (isObjectModalFullHeight) {
        setIsObjectModalClosedWithFullHeight(true);
      }
      setIsObjectModalFullHeight(false);
    }

    if (RightSideActiveModal) {
      if (isObjectModalClosedWithFullHeight) {
        setIsObjectModalFullHeight(true);
        setIsObjectModalClosedWithFullHeight(false);
      }
    }

    if (!isSettingsModalOpen) {
      if (isSettingsModalFullHeight) {
        setIsSettingsModalClosedWithFullHeight(true);
      }
      setIsSettingsModalFullHeight(false);
    }

    if (isSettingsModalOpen) {
      if (isSettingsModalClosedWithFullHeight) {
        setIsSettingsModalFullHeight(true);
        setIsSettingsModalClosedWithFullHeight(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [RightSideActiveModal, isSettingsModalOpen]);

  return (
    <>
      <Layout direction="column" className="home">
        <Layout
          className="home__background"
          style={{
            height: `calc(100dvh - (100px - ${
              !tableOpen ? "40px" : "0px"
            } + ${tableHeight}px))`,
          }}
        >
          <img src="/assets/svg/bg-map.svg" />

          <Layout direction="column" className="home__content">
            {windowWidth >= 640 ? (
              <ContentHeader
                tableFullHeight={tableFullHeight}
                toggleLeftSideModalCalc={toggleLeftSideModalCalc}
                leftSideActiveModal={leftSideActiveModal}
                windowWidth={windowWidth}
                toggleLeftSideModalData={toggleLeftSideModalData}
                RightSideActiveModal={RightSideActiveModal}
                toggleRightSideModalObject={toggleRightSideModalObject}
                isOpen={isOpen}
                ref={ref}
                toggleContextMenu={toggleContextMenu}
                items={items}
                renderRightSide={renderRightSide}
                onChange={onChange}
                trimValue={trimValue}
                setTrimValue={setTrimValue}
                setIsSettingsModalOpen={setIsSettingsModalOpen}
                isSettingsModalOpen={isSettingsModalOpen}
                setRightSideActiveModal={setRightSideActiveModal}
                setIsOpen={setIsOpen}
              />
            ) : (
              <ContentHeaderMobile
                setIsOpen={setIsOpen}
                tableFullHeight={tableFullHeight}
                toggleLeftSideModalCalc={toggleLeftSideModalCalc}
                leftSideActiveModal={leftSideActiveModal}
                windowWidth={windowWidth}
                toggleLeftSideModalData={toggleLeftSideModalData}
                RightSideActiveModal={RightSideActiveModal}
                toggleRightSideModalObject={toggleRightSideModalObject}
                isOpen={isOpen}
                toggleContextMenu={toggleContextMenu}
                items={items}
                ref={ref}
                renderRightSide={renderRightSide}
                onChange={onChange}
                setLeftSideActiveModal={setLeftSideActiveModal}
                setTableOpen={setTableOpen}
                setTableHeight={setTableHeight}
                setTableFullHeight={setTableFullHeight}
                tableOpen={tableOpen}
                trimValue={trimValue}
                setTrimValue={setTrimValue}
                setIsSettingsModalOpen={setIsSettingsModalOpen}
                isSettingsModalOpen={isSettingsModalOpen}
              />
            )}
            <ContentMiddle
              setIsObjectModalFullHeight={setIsObjectModalFullHeight}
              leftSideActiveModal={leftSideActiveModal}
              setLeftSideActiveModal={setLeftSideActiveModal}
              calculationItems={calculationItems}
              calculationItemChecked={calculationItemChecked}
              setCalculationItemChecked={setCalculationItemChecked}
              RightSideActiveModal={RightSideActiveModal}
              setRightSideActiveModal={setRightSideActiveModal}
              ref={ref}
              table50={table50}
              windowWidth={windowWidth}
              windowHeight={windowHeight}
              setIsSettingsModalOpen={setIsSettingsModalOpen}
              isSettingsModalOpen={isSettingsModalOpen}
              setIsSettingsModalFullHeight={setIsSettingsModalFullHeight}
            />
            <Footer
              isObjectModalFullHeight={isObjectModalFullHeight}
              isSettingsModalFullHeight={isSettingsModalFullHeight}
              setTableOpen={setTableOpen}
              tableOpen={tableOpen}
              windowWidth={windowWidth}
              windowHeight={windowHeight}
              setTableHeight={setTableHeight}
            />
          </Layout>
        </Layout>
        <Table
          tableOpen={tableOpen}
          setTableHeight={setTableHeight}
          setTableFullHeight={setTableFullHeight}
          setIsOpen={setIsOpen}
          windowHeight={windowHeight}
          tableHeight={tableHeight}
          setTable50={setTable50}
          windowWidth={windowWidth}
          tableFullHeight={tableFullHeight}
          table50={table50}
        />
      </Layout>
    </>
  );
}
