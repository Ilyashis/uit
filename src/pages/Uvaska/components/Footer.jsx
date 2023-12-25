import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
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

  const svgRef = useRef();
  const pointGroupRef = useRef();
  const textGroupRef = useRef();
  const activePointsOrder = [];
  const defaultTranslateX = 0; // Значение по умолчанию для translate X
  const defaultTranslateY = 0; // Значение по умолчанию для translate Y
  const defaultScale = 1.0; // Значение по умолчанию для scale

  function removeLinesForInactivePoints() {
    svg
      .select("#lines")
      .selectAll("line")
      .each(function (lineData) {
        if (
          !activePointsData.some((point) => point.name === lineData.point1) ||
          !activePointsData.some((point) => point.name === lineData.point2)
        ) {
          d3.select(this).remove();
        }
      });
  }

  useEffect(() => {
    const width = 500;
    const height = 500;

    //Создаем svg
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const zoomGroup = svg.append("g");

    const zoom = d3
      .zoom()
      .scaleExtent([0.5, 2])
      .on("zoom", (event) => {
        zoomGroup.attr("transform", event.transform);
        const k = event.transform.k;
        pointGroupRef.current
          .selectAll(".point-label")
          .attr("transform", (d) => `scale(${1 / k})`)
          .attr("font-size", 12);
      });
    svg.call(zoom);

    const loadAndRender = async () => {
      try {
        const importedNode = await d3.xml("/src/pages/Uvaska/mock/isoline.svg");
        const imageNode = importedNode.documentElement;
        zoomGroup.node().appendChild(imageNode);
        zoomGroup.attr("width", width).attr("height", height);

        // Точки и линии

        const points = [
          { x: 74, y: 46, name: " " },
          { x: 74, y: 96, name: " " },
          { x: 244, y: 92, name: " " },
          { x: 4, y: 96, name: " " },
          { x: 78, y: 200, name: " " },
          { x: 77, y: 275, name: " " },
          { x: 140, y: 230, name: " " },
          { x: 138, y: 92, name: " " },
          { x: 144, y: 200, name: " " },
          { x: 136, y: 26, name: " " },
          { x: 275, y: 20, name: " " },
          { x: 35, y: 26, name: " " },
          { x: 230, y: 195, name: " " },
          { x: 5, y: 200, name: " " },
        ];

        console.log(points);

        zoomGroup.attr("id", "lines");

        pointGroupRef.current = zoomGroup.append("g");
        textGroupRef.current = zoomGroup.append("g");

        // Добавление точек и их названий
        const pointGroup = pointGroupRef.current
          .selectAll(".point-group")
          .data(points)
          .enter()
          .append("g")
          .attr("class", "point-group")
          .attr("transform", (d) => `translate(${d.x}, ${d.y})`);

        pointGroup
          .append("circle")
          .attr("cx", 0)
          .attr("cy", 0)
          .attr("r", 8)
          .attr("fill", "green")
          .attr("class", "point")
          .attr("id", (d) => d.name)
          .attr(
            "transform",
            `translate(${defaultTranslateX},${defaultTranslateY}) scale(${defaultScale})`
          )
          .each(function (d) {
            d3.select(this).data([d]);
          });

        pointGroup
          .append("text")
          .attr("x", 8)
          .attr("y", -8)
          .text((d) => d.name)
          .attr("class", "point-label")
          .attr("font-size", 6)
          .attr(
            "transform",
            `translate(${defaultTranslateX},${defaultTranslateY}) scale(${defaultScale})`
          );
      } catch (error) {
        console.log("Ошибка загрузки карты", error);
      }

      let activePointsData = [];

      //Управление видимостью сообщения при отсутствии выбранных точек

      const toggleWellNoneVisibility = () => {
        const wellNone = document.querySelector(".WellNone");
        const activePoints = pointGroupRef.current
          .selectAll(".point.active")
          .nodes();
        if (activePoints.length > 0) {
          wellNone.style.display = "none";
        } else {
          wellNone.style.display = "flex";
        }
      };

      const handlePointClick = (event, d) => {
        const isActive = d3.select(event.currentTarget).classed("active");
        if (isActive) {
          d3.select(event.currentTarget).classed("active", false);
          d3.select(event.currentTarget).attr("fill", "green");
        } else {
          d3.select(event.currentTarget).classed("active", true);
          d3.select(event.currentTarget).attr("fill", "blue");
        }
        toggleWellNoneVisibility();
      };

      // Создайте переменную для хранения данных выбранных точек
      // Клик на точку с названием. Рисование линии между точками

      pointGroupRef.current
        .selectAll(".point")
        .on("click", function (event, d) {
          const isActive = d3.select(this).classed("active");
          if (isActive) {
            d3.select(this).classed("active", false);
            d3.select(this).attr("fill", "green");
            d3.select("#Screll").html(function () {
              const regex = new RegExp(
                `<div class="${d.name} well">${d.name}<\/div>`,
                "g"
              );
              return d3.select("#Screll").html().replace(regex, "");
            });

            // Удаляем точку из порядка активации
            const index = activePointsOrder.indexOf(d);
            if (index > -1) {
              activePointsOrder.splice(index, 1);
            }
          } else {
            d3.select(this).classed("active", true);
            d3.select(this).attr("fill", "blue");
            d3.select("#Screll").html(function () {
              return (
                d3.select("#Screll").html() +
                `<div class="${d.name} well">${d.name}</div>`
              );
            });
            toggleWellNoneVisibility(); //Видимость сообщения включена
            // Добавляем точку в порядок активации
            activePointsOrder.push(d);
          }
          // Перестраиваем линии в соответствии с порядком активации
          svg.select("#lines").selectAll("line").remove(); // Удаление ранее нарисованных линий
          if (activePointsOrder.length > 1) {
            for (let i = 0; i < activePointsOrder.length - 1; i++) {
              const lineData = svg
                .select("#lines")
                .append("line")
                .attr("x1", activePointsOrder[i].x)
                .attr("y1", activePointsOrder[i].y)
                .attr("x2", activePointsOrder[i + 1].x)
                .attr("y2", activePointsOrder[i + 1].y)
                .attr("stroke", "black");
            }
          }
          toggleWellNoneVisibility();
        });
    };

    loadAndRender();
  }, []);

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
          <div>
            <svg ref={svgRef} className="Scene" />
          </div>
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
