import PropTypes from "prop-types";

// Consta/uikit components
import { Table as ConstaTable } from "@consta/uikit/Table";
import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";

// Icons
import { IconExpand } from "@consta/icons/IconExpand";
import { IconPanelBottom } from "@consta/icons/IconPanelBottom";
import { IconArrowDown } from "@consta/icons/IconArrowDown";

import useTableData from "../mock/useTableData";
import { useState } from "react";

export default function Table(props) {
  const {
    tableOpen,
    setTableHeight,
    setTableFullHeight,
    setTable50,
    setIsOpen,
    windowHeight,
    windowWidth,
    tableHeight,
    table50,
    tableFullHeight,
  } = props;

  const tableData = useTableData(table50, tableFullHeight);

  return (
    <Layout
      direction="column"
      className="home__table"
      style={{ display: `${!tableOpen ? "none" : ""}` }}
    >
      {/* Table Header */}
      <Layout className="home__table--table-header">
        <Text
          size="s"
          weight="semibold"
          className="home__table--table-header--title"
        >
          Таблица
        </Text>
        <Layout>
          <Button
            size="xs"
            label="fullscreen"
            view="clear"
            iconLeft={IconExpand}
            onlyIcon
            onClick={() => {
              setTableHeight(windowHeight - 100 - 48);
              setTableFullHeight(true);
              setIsOpen(false);
              setTable50(false);
            }}
          />
          <Button
            size="xs"
            label="resize"
            view="clear"
            iconLeft={IconPanelBottom}
            onlyIcon
            onClick={() => {
              setTableHeight(windowHeight / 2 - 40);
              setTable50(true);
              setTableFullHeight(false);
            }}
          />
          <Button
            size="xs"
            label="toggle"
            view="clear"
            iconLeft={IconArrowDown}
            onlyIcon
            onClick={() => {
              setTableHeight(0);
              setTable50(false);
              setTableFullHeight(false);
            }}
          />
        </Layout>
      </Layout>

      {/* Table Content */}
      <Layout
        className="home__table--table-content"
        style={{ height: `${tableHeight}px`, maxWidth: "inherit" }}
      >
        <ConstaTable
          rows={tableData.rows}
          columns={tableData.cols}
          borderBetweenColumns
          borderBetweenRows
          stickyColumns={windowWidth > 800 ? 1 : 0}
          headerVerticalAlign="center"
          verticalAlign="top"
          className="home__table--table-content--table"
        />
      </Layout>
    </Layout>
  );
}

Table.propTypes = {
  tableOpen: PropTypes.bool,
  setTableHeight: PropTypes.func,
  setTableFullHeight: PropTypes.func,
  setIsOpen: PropTypes.func,
  windowHeight: PropTypes.number,
  tableHeight: PropTypes.number,
  setTable50: PropTypes.func,
  windowWidth: PropTypes.number,
};
