import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { zoom } from "d3-zoom";
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
  //Отрисовка линий сьемок

  const svgRef = useRef();
  const [transform, setTransform] = useState({ k: 1, x: 0, y: 0 });

  useEffect(() => {
    const width = 500;
    const height = 500;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const content = svg.append("g");

    const scaleX = d3.scaleLinear().domain([0, 10]).range([0, width]);
    const scaleY = d3.scaleLinear().domain([0, 10]).range([height, 0]);

    function createLine(x1, y1, x2, y2, text, clickText) {
      const path = content
        .append("path")
        .attr(
          "d",
          `M ${scaleX(x1)} ${scaleY(y1)} L ${scaleX(x2)} ${scaleY(y2)}`
        )
        .attr("stroke", "black")
        .attr("fill", "none")
        .attr("class", "linePath")
        .on("click", function () {
          handleLineClick(d3.select(this), clickText);
        });

      content
        .append("text")
        .attr("x", scaleX(x1))
        .attr("y", scaleY(y1 + 0.1))
        .text(text);
    }

    function handleLineClick(line, lineText) {
      content.selectAll("line").classed("active", false);
      line.classed("active", true);
      d3.select(".ScreenItemInterpretation").html(`<div>${lineText}</div>`);

      const strBlock = d3.select(".InterpretationNone");
      if (content.selectAll("line.active").size() > 0) {
        strBlock.style("display", "none");
      } else {
        strBlock.style("display", "flex");
      }
    }

    createLine(2, 3, 8, 3, "2D sygLine 1", "2D sygLine 1");
    createLine(4, 5, 6, 5, "2D sygLine 2", "2D sygLine 2");

    const xAxis = d3.axisBottom(scaleX);
    const yAxis = d3.axisLeft(scaleY);

    svg.append("g").attr("transform", `translate(0,${height})`).call(xAxis);

    svg.append("g").call(yAxis);

    const zoom = d3
      .zoom()
      .scaleExtent([0.5, 2])
      .on("zoom", (event) => {
        content.attr("transform", event.transform);
        const k = event.transform.k;
        const currentScale = event.transform.k; // получаем текущий коэффициент масштабирования
        content.selectAll("text").attr("font-size", 12 / currentScale); // Обновляем размер текста пропорционально масштабированию
      });
    svg.call(zoom); ///

    //Функции для состояний клика на линии
    function handleLineClick(line, lineText) {
      if (line.classed("active")) {
        line.classed("active", false);
        d3.select(".ScreenItemInterpretation").text("");
      } else {
        content.selectAll("path").classed("active", false);
        line.classed("active", true);
        d3.select(".ScreenItemInterpretation").html(`<div>${lineText}</div>`);
      }

      const strBlock = d3.select(".InterpretationNone");
      if (content.selectAll("path.active").size() > 0) {
        strBlock.style("display", "none");
      } else {
        strBlock.style("display", "flex");
      }
    }
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
          <div className="interpretation-syg">
            <svg ref={svgRef} />
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
