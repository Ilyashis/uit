import { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { Tag } from "@consta/uikit/Tag";
import { Text } from "@consta/uikit/Text";

import { IconMapStroked } from "@consta/icons/IconMapStroked";
import { IconArrowDown } from "@consta/icons/IconArrowDown";
import { IconResize } from "@consta/icons/IconResize";

import { Rnd } from "react-rnd";

export default function Footer(props) {
  const {
    isObjectModalFullHeight,
    isSettingsModalFullHeight,
    setTableOpen,
    tableOpen,
    windowWidth,
    setTableHeight,
  } = props;

  const [isMapLayerOpen, setIsMapLayerOpen] = useState(false);
  const [layer, setLayer] = useState({
    width: 320,
    height: 280,
    x: windowWidth - 332,
    y: -280,
  });

  let calculateMapLayerPopupWidth;

  if (!isObjectModalFullHeight || !isSettingsModalFullHeight) {
    if (windowWidth >= 800) {
      calculateMapLayerPopupWidth = `${windowWidth - (24 + 332)}`;
    } else {
      calculateMapLayerPopupWidth = `${windowWidth - 24}`;
    }
  } else {
    calculateMapLayerPopupWidth = `${windowWidth - 24}`;
  }

  return (
    <Layout className="home__footer">
      <Layout className="home__footer--tag">
        <Tag size="xs" mode="link" label="1:200" />
      </Layout>
      <Layout className="home__footer--table-tag">
        <Tag
          onClick={() => {
            setTableOpen((prev) => !prev);

            if (tableOpen !== 0) {
              setTableHeight(0);
            }
          }}
          size="xs"
          mode="link"
          label="Название региона, meta info"
          style={{ backgroundColor: `${tableOpen ? "white" : ""}` }}
        />
      </Layout>
      {!isMapLayerOpen && (
        <Layout
          className="home__footer--map-layer"
          onClick={() => {
            setIsMapLayerOpen(true);
          }}
          style={{
            right: `${
              (isObjectModalFullHeight || isSettingsModalFullHeight) &&
              windowWidth >= 640
                ? "342px"
                : ""
            }`,
          }}
        >
          <IconMapStroked size="m" view="ghost" />
          <Text size="xs" className="home__footer--map-layer--text">
            Слой карты
          </Text>
        </Layout>
      )}
      <Rnd
        minWidth="200px"
        minHeight="200px"
        maxWidth={`${calculateMapLayerPopupWidth}px`}
        size={{ width: layer.width, height: layer.height }}
        position={{ x: layer.x, y: layer.y }}
        disableDragging={true}
        bounds=".home__middle"
        enableResizing={{
          top: false,
          right: false,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: true,
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setLayer((prev) => ({
            ...prev,
            width: ref.style.width,
            height: ref.style.height,
            ...position,
          }));
        }}
        className={`home__footer--map-layer--popup ${
          isMapLayerOpen ? "active-map" : "inactive-map"
        }`}
        style={{
          right: `${
            (isObjectModalFullHeight || isSettingsModalFullHeight) &&
            windowWidth >= 640
              ? "342px"
              : ""
          }`,
        }}
      >
        <Layout className="home__footer--map-layer--header">
          <IconResize
            size="s"
            view="ghost"
            className="home__footer--map-layer--header--resize"
          />
          <Layout style={{ alignItems: "center", gap: "8px" }}>
            <IconMapStroked size="s" view="ghost" />
            <Text size="xs" className="home__footer--map-layer--header--text">
              Слой карты
            </Text>
          </Layout>
          <Layout>
            <Button
              size="xs"
              label="Закрыть"
              view="clear"
              iconLeft={IconArrowDown}
              onlyIcon
              onClick={() => setIsMapLayerOpen(false)}
            />
          </Layout>
        </Layout>
        <Layout className="home__footer--map-layer--content">
          <Text size="s" className="home__footer--map-layer--content--text">
            Объектов пока нет
          </Text>
        </Layout>
      </Rnd>
    </Layout>
  );
}

Footer.propTypes = {
  setTableOpen: PropTypes.func,
  tableOpen: PropTypes.bool,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
  isObjectModalFullHeight: PropTypes.bool,
  isSettingsModalFullHeight: PropTypes.bool,
  setTableHeight: PropTypes.func,
  RightSideActiveModal: PropTypes.bool,
};
