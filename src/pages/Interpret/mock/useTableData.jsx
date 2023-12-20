// Warning: Custom table design with inline styles and mock data
import { useEffect, useRef, useState } from "react";

import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { ContextMenu } from "@consta/uikit/ContextMenu";
import { Badge } from "@consta/uikit/Badge";
import { Tag } from "@consta/uikit/Tag";
import SwitchComponent from "../components/ui/SwitchComponent";

import { IconFlagFilled } from "@consta/icons/IconFlagFilled";
import { IconFolderClosed } from "@consta/icons/IconFolderClosed";
import { IconStorage } from "@consta/icons/IconStorage";
import { IconHome } from "@consta/icons/IconHome";
import { IconEye } from "@consta/icons/IconEye";
import { IconEyeClose } from "@consta/icons/IconEyeClose";
import { IconKebab } from "@consta/icons/IconKebab";
import { IconAlert } from "@consta/icons/IconAlert";
import { IconPlay } from "@consta/icons/IconPlay";
import { IconAllDone } from "@consta/icons/IconAllDone";
import { IconArrowRight } from "@consta/icons/IconArrowRight";
import { IconArrowLeft } from "@consta/icons/IconArrowLeft";

import Input from "../components/ui/Input";

const contextItems = [
  {
    label: "Запустить расчет",
  },
  {
    label: "Параметры",
  },
  {
    label: "Удалить",
  },
];

const switchContextItems = [
  {
    label: "Тип 1",
    switch: true,
  },
  {
    label: "Тип 2",
    switch: false,
  },
];

export default function useTableData(table50, tableFullHeight) {
  const [activeSettingsContext, setActiveSettingsContext] = useState(null);

  const handleSettingsContextClick = (contextNumber) => {
    setActiveSettingsContext((prev) =>
      prev === contextNumber ? null : contextNumber
    );
  };

  // table left side
  const contextRef1 = useRef(null);
  const contextRef2 = useRef(null);
  const contextRef3 = useRef(null);
  const contextRef4 = useRef(null);
  const contextRef5 = useRef(null);
  const contextRef6 = useRef(null);
  const contextRef7 = useRef(null);
  const contextRef8 = useRef(null);

  // switch context
  const [activeSwitchContext, setActiveSwitchContext] = useState(null);

  const handleSwitchComponentClick = (contextNumber) => {
    setActiveSwitchContext((prev) =>
      prev === contextNumber ? null : contextNumber
    );
  };

  const [switchItems, setSwitchItems] = useState({
    switch1: switchContextItems,
    switch2: switchContextItems,
    switch3: switchContextItems,
    switch4: switchContextItems,
  });

  // input values
  const [inputValue, setInputValue] = useState({
    input1: "-",
    input2: "1",
    input3: "2",
    input4: "-",
    input5: "1",
    input6: "-",
    input7: "1",
    input8: "-",
    input9: "1",
    input10: "-",
    input11: "1",
    input12: "2",
    input13: "-",
    input14: "1",
    input15: "2",
    input16: "-",
    input17: "1",
    input18: "2",
    input19: "-",
    input20: "1",
    input21: "-",
    input22: "1",
  });

  const [activeCell, setActiveCell] = useState(null);

  const handleCellClick = (cellId) => {
    setActiveCell(cellId);
  };

  const nestedColumns = {
    group1: [
      {
        title: "Статус",
        accessor: "status",
        width: 200,
        renderCell: (row) => <> {row.status}</>,
      },
      {
        title: "Название, м",
        accessor: "status2",
        hide_group: true,
        width: 100,
      },
      {
        title: "Название, м",
        accessor: "status3",
        hide_group: true,
        width: 100,
      },
    ],
    group2: [
      {
        title: "Название, м",
        accessor: "type",
        width: 160,
      },
      {
        title: "Название, м",
        accessor: "type2",
        hide_group: true,
        width: 100,
      },
      {
        title: "Название, м",
        accessor: "type3",
        hide_group: true,
        width: 100,
      },
    ],
    group3: [
      {
        title: "Название, м",
        accessor: "type4",
        width: 100,
      },
      {
        title: "Название, м",
        accessor: "type5",
        hide_group: true,
        width: 100,
      },
      {
        title: "Название, м",
        accessor: "type6",
        hide_group: true,
        width: 100,
      },
      {
        title: "Название, м",
        accessor: "type7",
        hide_group: true,
        width: 100,
      },
    ],
    group4: [
      {
        title: "Название, м",
        accessor: "group4.1",
        width: 160,
      },
      {
        title: "Название, м",
        accessor: "group4.2",
        hide_group: true,
        width: 100,
      },
      {
        title: "Название, м",
        accessor: "group4.3",
        hide_group: true,
        width: 100,
      },
    ],
  };

  const [group1Columns, setGroup1Column] = useState(nestedColumns.group1);
  const [isGroup1Open, setIsGroup1Open] = useState(true);

  const [group2Columns, setGroup2Column] = useState(nestedColumns.group2);
  const [isGroup2Open, setIsGroup2Open] = useState(true);

  const [group3Columns, setGroup3Column] = useState(nestedColumns.group3);
  const [isGroup3Open, setIsGroup3Open] = useState(true);

  const [group4Columns, setGroup4Column] = useState(nestedColumns.group4);
  const [isGroup4Open, setIsGroup4Open] = useState(true);

  useEffect(() => {
    setActiveSwitchContext(null);
    setActiveSettingsContext(null);
  }, [table50, tableFullHeight]);

  // All table data
  return {
    cols: [
      {
        title: "Обьекты",
        accessor: "field",
        width: 441,
        columns: [
          {
            title: "Название",
            accessor: "field",
            width: 441,
            renderCell: (row) => (
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "6px",
                }}
              >
                <Layout style={{ alignItems: "center", gap: "8px" }}>
                  {row.leftIcon}
                  <span>
                    {row.field} <i style={{ color: "gray" }}>{row.km}</i>
                  </span>
                </Layout>
                <Layout style={{ gap: "4px", marginLeft: "20px" }}>
                  {row.rightIcon1}
                  {row.rightIcon2}
                </Layout>
              </Layout>
            ),
          },
        ],
      },
      {
        title: "Группа 1",
        accessor: "group1",
        width: 200,
        control: function () {
          return (
            <Button
              size="xs"
              iconSize="s"
              view="clear"
              onlyIcon
              iconLeft={isGroup1Open ? IconArrowLeft : IconArrowRight}
              onClick={() => this.toggleGroup1()}
            />
          );
        },
        columns: group1Columns,
        toggleGroup1() {
          if (isGroup1Open) {
            setGroup1Column(
              nestedColumns.group1.filter((item) => !item.hide_group)
            );
          } else {
            setGroup1Column(nestedColumns.group1);
          }
          setIsGroup1Open((prev) => !prev);
        },
      },
      {
        title: "Группа 2",
        accessor: "group2",
        width: 360,
        control: function () {
          return (
            <Button
              size="xs"
              iconSize="s"
              view="clear"
              onlyIcon
              iconLeft={isGroup2Open ? IconArrowLeft : IconArrowRight}
              onClick={() => this.toggleGroup2()}
            />
          );
        },
        columns: group2Columns,
        toggleGroup2() {
          if (isGroup2Open) {
            setGroup2Column(
              nestedColumns.group2.filter((item) => !item.hide_group)
            );
          } else {
            setGroup2Column(nestedColumns.group2);
          }
          setIsGroup2Open((prev) => !prev);
        },
      },
      {
        title: "Группа 3",
        accessor: "group3",
        width: 400,
        control: function () {
          return (
            <Button
              size="xs"
              iconSize="s"
              view="clear"
              onlyIcon
              iconLeft={isGroup3Open ? IconArrowLeft : IconArrowRight}
              onClick={() => this.toggleGroup3()}
            />
          );
        },
        columns: group3Columns,
        toggleGroup3() {
          if (isGroup3Open) {
            setGroup3Column(
              nestedColumns.group3.filter((item) => !item.hide_group)
            );
          } else {
            setGroup3Column(nestedColumns.group3);
          }
          setIsGroup3Open((prev) => !prev);
        },
      },
      {
        title: "Группа 4",
        accessor: "group4",
        width: 360,
        control: function () {
          return (
            <Button
              size="xs"
              iconSize="s"
              view="clear"
              onlyIcon
              iconLeft={isGroup4Open ? IconArrowLeft : IconArrowRight}
              onClick={() => this.toggleGroup4()}
            />
          );
        },
        columns: group4Columns,
        toggleGroup4() {
          if (isGroup4Open) {
            setGroup4Column(
              nestedColumns.group4.filter((item) => !item.hide_group)
            );
          } else {
            setGroup4Column(nestedColumns.group4);
          }
          setIsGroup4Open((prev) => !prev);
        },
      },
    ],
    rows: [
      {
        id: "row1",
        field: "Страна",
        leftIcon: <IconFolderClosed size="xs" view="secondary" />,
        status: (
          <Layout
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              padding: "4px 8px",
            }}
          >
            <Badge
              size="xs"
              view="stroked"
              iconLeft={IconAlert}
              status="system"
              label="Черновик"
            />
            <Button iconLeft={IconPlay} onlyIcon size="xs" view="ghost" />
          </Layout>
        ),
        status2: (
          <Layout
            style={{
              justifyContent: "end",
              height: "100%",
            }}
            className="active-cell"
          >
            <Input
              type="text"
              value={inputValue.input21}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, input21: e.target.value }))
              }
              isActive={activeCell === "cell21"}
              onClick={() => handleCellClick("cell21")}
            />
          </Layout>
        ),
        status3: (
          <Layout
            style={{
              justifyContent: "end",
              height: "100%",
            }}
            className="active-cell"
          >
            <Input
              type="text"
              value={inputValue.input22}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, input22: e.target.value }))
              }
              isActive={activeCell === "cell22"}
              onClick={() => handleCellClick("cell22")}
            />
          </Layout>
        ),
        type: (
          <Layout
            className={`active-cell ${
              activeCell === "cell0" ? "cell-is-active" : ""
            }`}
            style={{
              gap: "4px",
              height: "100%",
              padding: "4px 8px",
              alignItems: "center",
            }}
            onClick={() => handleCellClick("cell0")}
          >
            <Tag size="xs" mode="check" label="Тип 1" group={8} />
            <Tag size="xs" mode="check" label="Тип 2" group={5} />
          </Layout>
        ),
        type2: (
          <Layout
            style={{
              justifyContent: "end",
              height: "100%",
            }}
            className="active-cell"
          >
            <Input
              type="text"
              value={inputValue.input1}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, input1: e.target.value }))
              }
              isActive={activeCell === "cell1"}
              onClick={() => handleCellClick("cell1")}
            />
          </Layout>
        ),
        type3: (
          <Layout
            style={{
              justifyContent: "end",
              height: "100%",
            }}
            className="active-cell"
          >
            <Input
              type="text"
              value={inputValue.input2}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, input2: e.target.value }))
              }
              isActive={activeCell === "cell2"}
              onClick={() => handleCellClick("cell2")}
            />
          </Layout>
        ),
        type4: (
          <Layout
            style={{
              justifyContent: "end",
              height: "100%",
            }}
            className="active-cell"
          >
            <Input
              type="text"
              value={inputValue.input3}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, input3: e.target.value }))
              }
              isActive={activeCell === "cell3"}
              onClick={() => handleCellClick("cell3")}
            />
          </Layout>
        ),
        type5: (
          <SwitchComponent
            items={switchItems.switch1}
            setItems={(items) =>
              setSwitchItems((prev) => ({ ...prev, switch1: items }))
            }
            isOpen={activeSwitchContext === 1 && activeCell === "cell4"}
            setIsOpen={() => {
              handleSwitchComponentClick(1);
            }}
            isActive={activeCell === "cell4"}
            onClick={() => handleCellClick("cell4")}
          />
        ),
        type6: (
          <Layout
            style={{
              justifyContent: "end",
              height: "100%",
            }}
            className="active-cell"
          >
            <Input
              type="text"
              value={inputValue.input4}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, input4: e.target.value }))
              }
              isActive={activeCell === "cell5"}
              onClick={() => handleCellClick("cell5")}
            />
          </Layout>
        ),
        type7: (
          <Layout
            style={{
              justifyContent: "end",
              height: "100%",
            }}
            className="active-cell"
          >
            <Input
              type="text"
              value={inputValue.input5}
              onChange={(e) =>
                setInputValue((prev) => ({ ...prev, input5: e.target.value }))
              }
              isActive={activeCell === "cell6"}
              onClick={() => handleCellClick("cell6")}
            />
          </Layout>
        ),
        rows: [
          {
            id: "row1.1",
            field: "Граница 1",
            km: "200 км",
            status: (
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                  padding: "4px 8px",
                }}
              >
                <Badge
                  size="xs"
                  view="stroked"
                  iconLeft={IconAllDone}
                  status="success"
                  label="Готово"
                />
                <Button iconLeft={IconPlay} onlyIcon size="xs" view="ghost" />
              </Layout>
            ),
            leftIcon: <IconFlagFilled size="xs" view="secondary" />,
            rightIcon1: (
              <Button size="xs" view="clear" onlyIcon iconLeft={IconEye} />
            ),
            rightIcon2: (
              <>
                <Button
                  ref={contextRef1}
                  size="xs"
                  view="clear"
                  onlyIcon
                  iconLeft={IconKebab}
                  onClick={() => handleSettingsContextClick(1)}
                />
                <ContextMenu
                  size="xs"
                  isOpen={activeSettingsContext === 1}
                  items={contextItems}
                  anchorRef={contextRef1}
                  direction="downStartRight"
                  className="table-context"
                />
              </>
            ),
            rows: [
              {
                id: "row1.1.1",
                field: "Район 1",
                leftIcon: <IconStorage size="xs" view="secondary" />,
                rightIcon1: (
                  <Button size="xs" view="clear" onlyIcon iconLeft={IconEye} />
                ),
                rightIcon2: (
                  <>
                    <Button
                      ref={contextRef2}
                      size="xs"
                      view="clear"
                      onlyIcon
                      iconLeft={IconKebab}
                      onClick={() => handleSettingsContextClick(2)}
                    />
                    <ContextMenu
                      size="xs"
                      isOpen={activeSettingsContext === 2}
                      items={contextItems}
                      anchorRef={contextRef2}
                      direction="downStartRight"
                      className="table-context"
                    />
                  </>
                ),
                status: (
                  <Layout
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "20px",
                      padding: "4px 8px",
                    }}
                  >
                    <Badge
                      size="xs"
                      view="stroked"
                      iconLeft={IconAllDone}
                      status="success"
                      label="Готово"
                    />
                    <Button
                      iconLeft={IconPlay}
                      onlyIcon
                      size="xs"
                      view="ghost"
                    />
                  </Layout>
                ),
                type: (
                  <Layout
                    className={`active-cell ${
                      activeCell === "cell7" ? "cell-is-active" : ""
                    }`}
                    style={{
                      gap: "4px",
                      height: "100%",
                      padding: "4px 8px",
                      alignItems: "center",
                    }}
                    onClick={() => handleCellClick("cell7")}
                  >
                    <Tag size="xs" mode="check" label="Тип 1" group={8} />
                    <Tag size="xs" mode="check" label="Тип 1" group={5} />
                  </Layout>
                ),
                type2: (
                  <Layout
                    style={{
                      justifyContent: "end",
                      height: "100%",
                    }}
                    className="active-cell"
                  >
                    <Input
                      type="text"
                      value={inputValue.input6}
                      onChange={(e) =>
                        setInputValue((prev) => ({
                          ...prev,
                          input6: e.target.value,
                        }))
                      }
                      isActive={activeCell === "cell8"}
                      onClick={() => handleCellClick("cell8")}
                    />
                  </Layout>
                ),
                type3: (
                  <Layout
                    style={{
                      justifyContent: "end",
                      height: "100%",
                    }}
                    className="active-cell"
                  >
                    <Input
                      type="text"
                      value={inputValue.input7}
                      onChange={(e) =>
                        setInputValue((prev) => ({
                          ...prev,
                          input7: e.target.value,
                        }))
                      }
                      isActive={activeCell === "cell10"}
                      onClick={() => handleCellClick("cell10")}
                    />
                  </Layout>
                ),
                type4: (
                  <Layout
                    style={{
                      justifyContent: "end",
                      height: "100%",
                    }}
                    className="active-cell"
                  >
                    <Input
                      type="text"
                      value={inputValue.input12}
                      onChange={(e) =>
                        setInputValue((prev) => ({
                          ...prev,
                          input12: e.target.value,
                        }))
                      }
                      isActive={activeCell === "cell11"}
                      onClick={() => handleCellClick("cell11")}
                    />
                  </Layout>
                ),
                type5: (
                  <SwitchComponent
                    items={switchItems.switch2}
                    setItems={(items) =>
                      setSwitchItems((prev) => ({ ...prev, switch2: items }))
                    }
                    isOpen={
                      activeSwitchContext === 2 && activeCell === "cell12"
                    }
                    setIsOpen={() => handleSwitchComponentClick(2)}
                    isActive={activeCell === "cell12"}
                    onClick={() => handleCellClick("cell12")}
                  />
                ),
                type6: (
                  <Layout
                    style={{
                      justifyContent: "end",
                      height: "100%",
                    }}
                    className="active-cell"
                  >
                    <Input
                      type="text"
                      value={inputValue.input13}
                      onChange={(e) =>
                        setInputValue((prev) => ({
                          ...prev,
                          input13: e.target.value,
                        }))
                      }
                      isActive={activeCell === "cell13"}
                      onClick={() => handleCellClick("cell13")}
                    />
                  </Layout>
                ),
                type7: (
                  <Layout
                    style={{
                      justifyContent: "end",
                      height: "100%",
                    }}
                    className="active-cell"
                  >
                    <Input
                      type="text"
                      value={inputValue.input14}
                      onChange={(e) =>
                        setInputValue((prev) => ({
                          ...prev,
                          input14: e.target.value,
                        }))
                      }
                      isActive={activeCell === "cell14"}
                      onClick={() => handleCellClick("cell14")}
                    />
                  </Layout>
                ),
                rows: [
                  {
                    id: "row1.1.1.1",
                    field: "Город 1",
                    leftIcon: <IconHome size="xs" view="secondary" />,
                    rightIcon1: (
                      <Button
                        size="xs"
                        view="clear"
                        onlyIcon
                        iconLeft={IconEye}
                      />
                    ),
                    rightIcon2: (
                      <>
                        <Button
                          ref={contextRef3}
                          size="xs"
                          view="clear"
                          onlyIcon
                          iconLeft={IconKebab}
                          onClick={() => handleSettingsContextClick(3)}
                        />
                        <ContextMenu
                          size="xs"
                          isOpen={activeSettingsContext === 3}
                          items={contextItems}
                          anchorRef={contextRef3}
                          direction="downStartRight"
                          className="table-context"
                        />
                      </>
                    ),
                    status: (
                      <Layout
                        style={{
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "20px",
                          padding: "4px 8px",
                        }}
                      >
                        <Badge
                          size="xs"
                          view="stroked"
                          iconLeft={IconAlert}
                          status="warning"
                          label="Изменено"
                        />
                        <Button
                          iconLeft={IconPlay}
                          onlyIcon
                          size="xs"
                          view="ghost"
                        />
                      </Layout>
                    ),
                    type: (
                      <Layout
                        className={`active-cell ${
                          activeCell === "cell15" ? "cell-is-active" : ""
                        }`}
                        style={{
                          gap: "4px",
                          height: "100%",
                          padding: "4px 8px",
                          alignItems: "center",
                        }}
                        onClick={() => handleCellClick("cell15")}
                      >
                        <Tag size="xs" mode="check" label="Тип 1" group={8} />
                        <Tag size="xs" mode="check" label="Тип 1" group={5} />
                      </Layout>
                    ),
                    type2: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input8}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input8: e.target.value,
                            }))
                          }
                          isActive={activeCell === "cell16"}
                          onClick={() => handleCellClick("cell16")}
                        />
                      </Layout>
                    ),
                    type3: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input9}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input9: e.target.value,
                            }))
                          }
                          isActive={activeCell === "cell17"}
                          onClick={() => handleCellClick("cell17")}
                        />
                      </Layout>
                    ),
                    type4: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input15}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input15: e.target.value,
                            }))
                          }
                          isActive={activeCell === "cell18"}
                          onClick={() => handleCellClick("cell18")}
                        />
                      </Layout>
                    ),
                    type5: (
                      <SwitchComponent
                        items={switchItems.switch3}
                        setItems={(items) =>
                          setSwitchItems((prev) => ({
                            ...prev,
                            switch3: items,
                          }))
                        }
                        isOpen={
                          activeSwitchContext === 3 && activeCell === "cell19"
                        }
                        setIsOpen={() => handleSwitchComponentClick(3)}
                        isActive={activeCell === "cell19"}
                        onClick={() => handleCellClick("cell19")}
                      />
                    ),
                    type6: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input16}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input16: e.target.value,
                            }))
                          }
                          isActive={activeCell === "cell20"}
                          onClick={() => handleCellClick("cell20")}
                        />
                      </Layout>
                    ),
                    type7: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input17}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input17: e.target.value,
                            }))
                          }
                          isActive={activeCell === "cell21"}
                          onClick={() => handleCellClick("cell21")}
                        />
                      </Layout>
                    ),
                  },
                  {
                    id: "row1.1.1.2",
                    field: "Город 2",
                    leftIcon: <IconHome size="xs" view="secondary" />,
                    rightIcon1: (
                      <Button
                        size="xs"
                        view="clear"
                        onlyIcon
                        iconLeft={IconEyeClose}
                      />
                    ),
                    rightIcon2: (
                      <>
                        <Button
                          ref={contextRef4}
                          size="xs"
                          view="clear"
                          onlyIcon
                          iconLeft={IconKebab}
                          onClick={() => handleSettingsContextClick(4)}
                        />
                        <ContextMenu
                          size="xs"
                          isOpen={activeSettingsContext === 4}
                          items={contextItems}
                          anchorRef={contextRef4}
                          direction="downStartRight"
                          className="table-context"
                        />
                      </>
                    ),
                    status: (
                      <Layout
                        style={{
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "20px",
                          padding: "4px 8px",
                        }}
                      >
                        <Badge
                          size="xs"
                          view="stroked"
                          iconLeft={IconAlert}
                          status="system"
                          label="Черновик"
                        />
                        <Button
                          iconLeft={IconPlay}
                          onlyIcon
                          size="xs"
                          view="ghost"
                        />
                      </Layout>
                    ),
                    type: (
                      <Layout
                        className={`active-cell ${
                          activeCell === "cell22" ? "cell-is-active" : ""
                        }`}
                        style={{
                          gap: "4px",
                          height: "100%",
                          padding: "4px 8px",
                          alignItems: "center",
                        }}
                        onClick={() => handleCellClick("cell22")}
                      >
                        <Tag size="xs" mode="check" label="Тип 1" group={8} />
                        <Tag size="xs" mode="check" label="Тип 1" group={5} />
                      </Layout>
                    ),
                    type2: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input10}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input10: e.target.value,
                            }))
                          }
                          isActive={activeCell === "cell23"}
                          onClick={() => handleCellClick("cell23")}
                        />
                      </Layout>
                    ),
                    type3: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input11}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input11: e.target.value,
                            }))
                          }
                          isActive={activeCell === "cell24"}
                          onClick={() => handleCellClick("cell24")}
                        />
                      </Layout>
                    ),
                    type4: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input18}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input18: e.target.value,
                            }))
                          }
                          isActive={activeCell === "cell25"}
                          onClick={() => handleCellClick("cell25")}
                        />
                      </Layout>
                    ),
                    type5: (
                      <SwitchComponent
                        items={switchItems.switch4}
                        setItems={(items) =>
                          setSwitchItems((prev) => ({
                            ...prev,
                            switch4: items,
                          }))
                        }
                        isOpen={
                          activeSwitchContext === 4 && activeCell === "cell26"
                        }
                        setIsOpen={() => handleSwitchComponentClick(4)}
                        isActive={activeCell === "cell26"}
                        onClick={() => handleCellClick("cell26")}
                      />
                    ),
                    type6: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input19}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input19: e.target.value,
                            }))
                          }
                          isActive={activeCell === "cell27"}
                          onClick={() => handleCellClick("cell27")}
                        />
                      </Layout>
                    ),
                    type7: (
                      <Layout
                        style={{
                          justifyContent: "end",
                          height: "100%",
                        }}
                        className="active-cell"
                      >
                        <Input
                          type="text"
                          value={inputValue.input20}
                          onChange={(e) =>
                            setInputValue((prev) => ({
                              ...prev,
                              input20: e.target.value,
                            }))
                          }
                          isActive={activeCell === "cell28"}
                          onClick={() => handleCellClick("cell28")}
                        />
                      </Layout>
                    ),
                  },
                ],
              },
              {
                id: "row1.2.1",
                field: "Граница 2",
                km: "300 км",
                leftIcon: <IconFlagFilled size="xs" view="secondary" />,
                rightIcon1: (
                  <Button size="xs" view="clear" onlyIcon iconLeft={IconEye} />
                ),
                rightIcon2: (
                  <>
                    <Button
                      ref={contextRef5}
                      size="xs"
                      view="clear"
                      onlyIcon
                      iconLeft={IconKebab}
                      onClick={() => handleSettingsContextClick(5)}
                    />
                    <ContextMenu
                      size="xs"
                      isOpen={activeSettingsContext === 5}
                      items={contextItems}
                      anchorRef={contextRef5}
                      direction="downStartRight"
                      className="table-context"
                    />
                  </>
                ),
                status: (
                  <Layout
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "20px",
                      padding: "4px 8px",
                    }}
                  >
                    <Badge
                      size="xs"
                      view="stroked"
                      iconLeft={IconAlert}
                      status="system"
                      label="Черновик"
                    />
                    <Button
                      iconLeft={IconPlay}
                      onlyIcon
                      size="xs"
                      view="ghost"
                    />
                  </Layout>
                ),
                rows: [
                  {
                    id: "row1.2.1.1",
                    field: "Район 2",
                    leftIcon: <IconStorage size="xs" view="secondary" />,
                    rightIcon1: (
                      <Button
                        size="xs"
                        view="clear"
                        onlyIcon
                        iconLeft={IconEye}
                      />
                    ),
                    rightIcon2: (
                      <>
                        <Button
                          ref={contextRef6}
                          size="xs"
                          view="clear"
                          onlyIcon
                          iconLeft={IconKebab}
                          onClick={() => handleSettingsContextClick(7)}
                        />
                        <ContextMenu
                          size="xs"
                          isOpen={activeSettingsContext === 7}
                          items={contextItems}
                          anchorRef={contextRef6}
                          direction="downStartRight"
                          className="table-context"
                        />
                      </>
                    ),
                    status: (
                      <Layout
                        style={{
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "20px",
                          padding: "4px 8px",
                        }}
                      >
                        <Badge
                          size="xs"
                          view="stroked"
                          iconLeft={IconAlert}
                          status="system"
                          label="Черновик"
                        />
                        <Button
                          iconLeft={IconPlay}
                          onlyIcon
                          size="xs"
                          view="ghost"
                        />
                      </Layout>
                    ),
                    type: (
                      <Layout
                        className="active-cell"
                        style={{
                          gap: "4px",
                          height: "100%",
                          padding: "4px 8px",
                          alignItems: "center",
                        }}
                      >
                        <Tag size="xs" mode="check" label="Тип 1" group={8} />
                        <Tag size="xs" mode="check" label="Тип 1" group={5} />
                      </Layout>
                    ),
                    rows: [
                      {
                        id: "row1.2.1.2",
                        field: "Город 3",
                        leftIcon: <IconHome size="xs" view="secondary" />,
                        rightIcon1: (
                          <Button
                            size="xs"
                            view="clear"
                            onlyIcon
                            iconLeft={IconEye}
                          />
                        ),
                        rightIcon2: (
                          <>
                            <Button
                              ref={contextRef7}
                              size="xs"
                              view="clear"
                              onlyIcon
                              iconLeft={IconKebab}
                              onClick={() => handleSettingsContextClick(8)}
                            />
                            <ContextMenu
                              size="xs"
                              isOpen={activeSettingsContext === 8}
                              items={contextItems}
                              anchorRef={contextRef7}
                              direction="downStartRight"
                              className="table-context"
                            />
                          </>
                        ),
                        status: (
                          <Layout
                            style={{
                              justifyContent: "space-between",
                              alignItems: "center",
                              gap: "20px",
                              padding: "4px 8px",
                            }}
                          >
                            <Badge
                              size="xs"
                              view="stroked"
                              iconLeft={IconAllDone}
                              status="success"
                              label="Готово"
                            />
                            <Button
                              iconLeft={IconPlay}
                              onlyIcon
                              size="xs"
                              view="ghost"
                            />
                          </Layout>
                        ),
                        type: (
                          <Layout
                            className="active-cell"
                            style={{
                              gap: "4px",
                              height: "100%",
                              padding: "4px 8px",
                              alignItems: "center",
                            }}
                          >
                            <Tag
                              size="xs"
                              mode="check"
                              label="Тип 1"
                              group={8}
                            />
                            <Tag
                              size="xs"
                              mode="check"
                              label="Тип 1"
                              group={5}
                            />
                          </Layout>
                        ),
                      },
                      {
                        id: "row1.2.1.3",
                        field: "Город 4",
                        leftIcon: <IconHome size="xs" view="secondary" />,
                        rightIcon1: (
                          <Button
                            size="xs"
                            view="clear"
                            onlyIcon
                            iconLeft={IconEyeClose}
                          />
                        ),
                        rightIcon2: (
                          <>
                            <Button
                              ref={contextRef8}
                              size="xs"
                              view="clear"
                              onlyIcon
                              iconLeft={IconKebab}
                              onClick={() => handleSettingsContextClick(9)}
                            />
                            <ContextMenu
                              size="xs"
                              isOpen={activeSettingsContext === 9}
                              items={contextItems}
                              anchorRef={contextRef8}
                              direction="downStartRight"
                              className="table-context"
                            />
                          </>
                        ),
                        status: (
                          <Layout
                            style={{
                              justifyContent: "space-between",
                              alignItems: "center",
                              gap: "20px",
                              padding: "4px 8px",
                            }}
                          >
                            <Badge
                              size="xs"
                              view="stroked"
                              iconLeft={IconAlert}
                              status="system"
                              label="Черновик"
                            />
                            <Button
                              iconLeft={IconPlay}
                              onlyIcon
                              size="xs"
                              view="ghost"
                            />
                          </Layout>
                        ),
                        type: (
                          <Layout
                            className="active-cell"
                            style={{
                              gap: "4px",
                              height: "100%",
                              padding: "4px 8px",
                              alignItems: "center",
                            }}
                          >
                            <Tag
                              size="xs"
                              mode="check"
                              label="Тип 1"
                              group={8}
                            />
                            <Tag
                              size="xs"
                              mode="check"
                              label="Тип 1"
                              group={5}
                            />
                          </Layout>
                        ),
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
}
