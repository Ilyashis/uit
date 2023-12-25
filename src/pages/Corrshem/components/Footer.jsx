import React, { useEffect, useRef, useState } from 'react';

import PropTypes from "prop-types";

import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { Tag } from "@consta/uikit/Tag";
import { Text } from "@consta/uikit/Text";

import { IconMapStroked } from "@consta/icons/IconMapStroked";
import { IconArrowDown } from "@consta/icons/IconArrowDown";
import { IconResize } from "@consta/icons/IconResize";

import { Rnd } from "react-rnd";

// Функция генерации названий точек
function generateRandomCoordsAndNames(num) {
  const points = [];

  for (let i = 0; i < num; i++) {
    const x = Math.floor(Math.random() * 400); // Генерируем случайную координату x в пределах 0-400
    const y = Math.floor(Math.random() * 400); // Генерируем случайную координату y в пределах 0-400
    const name = Math.floor(100000 + Math.random() * 900000).toString(); // Генерируем уникальное 6-значное число и преобразуем его в строку
    points.push({ x, y, name, active: false });
  }
  return points;
}

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
  
// canvas==============================

  const canvasRef = useRef(null);
  const [points, setPoints] = useState(generateRandomCoordsAndNames(5));
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 }); // Change from offset to translate
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedPoints, setSelectedPoints] = useState([]); 

  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  
    const clickedPoints = points.filter((point) => {
      return x >= point.x - 5 && x <= point.x + 5 && y >= point.y - 5 && y <= point.y + 5;
    });
  
    if (clickedPoints.length > 0) {
      const homeScreenDiv = document.getElementById('hScr');
      homeScreenDiv.innerText = 'Выбранные точки: ' + clickedPoints.map(point => point.name).join(', ');
    }
  };
  const handleMouseWheel = (event) => {
    event.preventDefault();
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const newScale = event.deltaY > 0 ? scale * 1.1 : scale / 1.1;
    const deltaX = offsetX * (scale - newScale);
    const deltaY = offsetY * (scale - newScale);
    setScale(newScale);
    setTranslate((prevTranslate) => ({
      x: prevTranslate.x + deltaX,
      y: prevTranslate.y + deltaY,
    }));
  };
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleMouseMove = (e) => {
    if (isDragging) {
      setTranslate({
        x: translate.x + e.clientX - dragStart.x, // Update translate instead of offset
        y: translate.y + e.clientY - dragStart.y  // Update translate instead of offset
      });
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };
  const handleHover = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left - translate.x) / scale;
    const y = (event.clientY - rect.top - translate.y) / scale;
  
    const hoveredPoint = points.find((point) => {
      return x >= point.x - 5 && x <= point.x + 5 && y >= point.y - 5 && y <= point.y + 5;
    });
  
    if (hoveredPoint) {
      canvas.style.cursor = "pointer";
    } else {
      canvas.style.cursor = "default";
    }
  };
  const handlePointClick = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left - translate.x) / scale;
    const y = (event.clientY - rect.top - translate.y) / scale;
  
    const clickedPoint = points.find((point) => {
      return x >= point.x - 5 && x <= point.x + 5 && y >= point.y - 5 && y <= point.y + 5;
    });
  
    if (clickedPoint) {
      const homeScreenDiv = document.getElementById('hScr');
      homeScreenDiv.innerText = 'Выбрана точка: ' + clickedPoint.name;
    }
  };
  const drawLine = (point1, point2) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(point1.x * scale + translate.x, point1.y * scale + translate.y);
    ctx.lineTo(point2.x * scale + translate.x, point2.y * scale + translate.y);
    ctx.stroke();
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    points.forEach((point, index) => {
      ctx.fillStyle = point.active ? 'blue' : 'red'; // Устанавливаем цвет в зависимости от статуса выбора точки
      ctx.beginPath();
      ctx.arc(
        point.x * scale + translate.x,
        point.y * scale + translate.y,
        5,
        0,
        2 * Math.PI
      );
      ctx.fill();
      ctx.font = '12px Arial';
      ctx.fillText(
        point.name,
        point.x * scale + translate.x + 8,
        point.y * scale + translate.y - 8
      );
    });
  }, [points, scale, translate]);

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
          label="Название обьекта на сцене"
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
            Мини-карта
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
              Мини-карта
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
          <canvas
            ref={canvasRef}
            id="myCanvas"  
            width="500"
            height="500"
            onClick={(e) => {
              handlePointClick(e);
              handleCanvasClick(e);
            }}
            onMouseOut={() => setPoints(points.map(point => ({ ...point, active: false })))}
            onWheel={handleMouseWheel}
            onMouseMove={(e) => {
              handleMouseMove(e);
              handleHover(e);
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          ></canvas>


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
//////////////Applications
//