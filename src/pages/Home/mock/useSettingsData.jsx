import { useEffect, useState } from "react";
import { Badge } from "@consta/uikit/Badge";
import { TextField } from "@consta/uikit/TextField";
import { Select } from "@consta/uikit/Select";
import { Layout } from "@consta/uikit/Layout";
import { ProgressSpin } from "@consta/uikit/ProgressSpin";

import { IconSpeed } from "@consta/icons/IconSpeed";
import { IconWatchStroked } from "@consta/icons/IconWatchStroked";
import { IconHelmet } from "@consta/icons/IconHelmet";
import { Text } from "@consta/uikit/Text";
import { IconArrowRight } from "@consta/icons/IconArrowRight";
import { IconWorldFilled } from "@consta/icons/IconWorldFilled";

const selectItems = [
  {
    label: "1",
    id: 1,
  },
  {
    label: "2",
    id: 2,
  },
  {
    label: "3",
    id: 3,
  },
];

export default function useSettingsData() {
  const [inputValue, setInputValue] = useState({
    input1: 1,
    input2: 1,
    input3: 1,
    input4: 1,
    input5: 1,
    input6: 1,
  });
  const [selectValue, setSelectValue] = useState({
    select1: {
      label: "1",
      id: 1,
    },
    select2: {
      label: "1",
      id: 1,
    },
    select3: {
      label: "1",
      id: 1,
    },
  });
  const [statusLoading, setStatusLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStatusLoading(false);
    }, 5000);
  }, []);

  return [
    {
      id: 1,
      label: "Основное",
      leftSide: <IconSpeed size="xs" />,
      rightSide: <IconArrowRight size="xs" />,
      data: [
        {
          label: "Группа настроек 1",
          content: (
            <Layout
              direction="column"
              style={{
                width: "107%",
                marginLeft: "-15.5px",
                gap: "8px",
                paddingTop: "8px",
              }}
            >
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input1}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input1: value }))
                  }
                  rightSide="км2"
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input2}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input2: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input3}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input3: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
            </Layout>
          ),
        },
        {
          label: "Группа настроек 2",
          content: (
            <Layout
              direction="column"
              style={{
                width: "107%",
                marginLeft: "-15.5px",
                gap: "8px",
                paddingTop: "8px",
              }}
            >
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "start",
                  gap: "8px",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название на две строки
                </Text>
                <Select
                  items={selectItems}
                  value={selectValue.select1}
                  onChange={({ value }) =>
                    setSelectValue((prev) => ({ ...prev, select1: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название длинное на три строки
                </Text>
                <Select
                  items={selectItems}
                  value={selectValue.select2}
                  onChange={({ value }) =>
                    setSelectValue((prev) => ({ ...prev, select2: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs" truncate>
                  Длинное названание
                </Text>
                <Select
                  items={selectItems}
                  value={selectValue.select3}
                  onChange={({ value }) =>
                    setSelectValue((prev) => ({ ...prev, select3: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
            </Layout>
          ),
        },
        {
          label: "Группа настроек 3",
          content: (
            <Layout
              direction="column"
              style={{
                width: "107%",
                marginLeft: "-15.5px",
                gap: "8px",
                paddingTop: "8px",
              }}
            >
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Text style={{ width: "30.5%" }} size="xs">
                  Название
                </Text>
                <Layout style={{ width: "66.5%", gap: "4px" }}>
                  <TextField
                    type="text"
                    value={inputValue.input4}
                    onChange={({ value }) =>
                      setInputValue((prev) => ({ ...prev, input4: value }))
                    }
                    size="xs"
                  />
                  <TextField
                    type="text"
                    value={inputValue.input5}
                    onChange={({ value }) =>
                      setInputValue((prev) => ({ ...prev, input5: value }))
                    }
                    size="xs"
                  />
                </Layout>
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input6}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input6: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
            </Layout>
          ),
        },
      ],
    },
    {
      id: 2,
      label: "Отображение",
      badge: "normal",
      leftSide: <IconWorldFilled size="xs" />,
      rightSide: (
        <Layout style={{ alignItems: "center", gap: "8px" }}>
          {statusLoading ? (
            <ProgressSpin size="s" />
          ) : (
            <Badge size="xs" minified status="normal" />
          )}
          <IconArrowRight size="xs" />
        </Layout>
      ),
      data: [
        {
          label: "Группа настроек 1",
          content: (
            <Layout
              direction="column"
              style={{
                width: "107%",
                marginLeft: "-15.5px",
                gap: "8px",
                paddingTop: "8px",
              }}
            >
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input1}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input1: value }))
                  }
                  rightSide="км2"
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input2}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input2: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input3}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input3: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
            </Layout>
          ),
        },
        {
          label: "Группа настроек 2",
          content: (
            <Layout
              direction="column"
              style={{
                width: "107%",
                marginLeft: "-15.5px",
                gap: "8px",
                paddingTop: "8px",
              }}
            >
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "start",
                  gap: "8px",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название на две строки
                </Text>
                <Select
                  items={selectItems}
                  value={selectValue.select1}
                  onChange={({ value }) =>
                    setSelectValue((prev) => ({ ...prev, select1: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название длинное на три строки
                </Text>
                <Select
                  items={selectItems}
                  value={selectValue.select2}
                  onChange={({ value }) =>
                    setSelectValue((prev) => ({ ...prev, select2: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs" truncate>
                  Длинное названание
                </Text>
                <Select
                  items={selectItems}
                  value={selectValue.select3}
                  onChange={({ value }) =>
                    setSelectValue((prev) => ({ ...prev, select3: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
            </Layout>
          ),
        },
      ],
    },
    {
      id: 3,
      label: "Система",
      badge: "success",
      leftSide: <IconWatchStroked size="xs" />,
      rightSide: (
        <Layout style={{ alignItems: "center", gap: "8px" }}>
          <Badge size="xs" minified status="success" />
          <IconArrowRight size="xs" />
        </Layout>
      ),
      data: [
        {
          label: "Группа настроек 1",
          content: (
            <Layout
              direction="column"
              style={{
                width: "107%",
                marginLeft: "-15.5px",
                gap: "8px",
                paddingTop: "8px",
              }}
            >
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input1}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input1: value }))
                  }
                  rightSide="км2"
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input2}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input2: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input3}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input3: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
            </Layout>
          ),
        },
        {
          label: "Группа настроек 2",
          content: (
            <Layout
              direction="column"
              style={{
                width: "107%",
                marginLeft: "-15.5px",
                gap: "8px",
                paddingTop: "8px",
              }}
            >
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "start",
                  gap: "8px",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название на две строки
                </Text>
                <Select
                  items={selectItems}
                  value={selectValue.select1}
                  onChange={({ value }) =>
                    setSelectValue((prev) => ({ ...prev, select1: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название длинное на три строки
                </Text>
                <Select
                  items={selectItems}
                  value={selectValue.select2}
                  onChange={({ value }) =>
                    setSelectValue((prev) => ({ ...prev, select2: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs" truncate>
                  Длинное названание
                </Text>
                <Select
                  items={selectItems}
                  value={selectValue.select3}
                  onChange={({ value }) =>
                    setSelectValue((prev) => ({ ...prev, select3: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
            </Layout>
          ),
        },
        {
          label: "Группа настроек 3",
          content: (
            <Layout
              direction="column"
              style={{
                width: "107%",
                marginLeft: "-15.5px",
                gap: "8px",
                paddingTop: "8px",
              }}
            >
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Text style={{ width: "30.5%" }} size="xs">
                  Название
                </Text>
                <Layout style={{ width: "66.5%", gap: "4px" }}>
                  <TextField
                    type="text"
                    value={inputValue.input4}
                    onChange={({ value }) =>
                      setInputValue((prev) => ({ ...prev, input4: value }))
                    }
                    size="xs"
                  />
                  <TextField
                    type="text"
                    value={inputValue.input5}
                    onChange={({ value }) =>
                      setInputValue((prev) => ({ ...prev, input5: value }))
                    }
                    size="xs"
                  />
                </Layout>
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input6}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input6: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
            </Layout>
          ),
        },
      ],
    },
    {
      id: 4,
      label: "БД",
      leftSide: <IconHelmet size="xs" />,
      rightSide: <IconArrowRight size="xs" />,
      data: [
        {
          label: "Группа настроек 1",
          content: (
            <Layout
              direction="column"
              style={{
                width: "107%",
                marginLeft: "-15.5px",
                gap: "8px",
                paddingTop: "8px",
              }}
            >
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input1}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input1: value }))
                  }
                  rightSide="км2"
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input2}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input2: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input3}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input3: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
            </Layout>
          ),
        },
        {
          label: "Группа настроек 2",
          content: (
            <Layout
              direction="column"
              style={{
                width: "107%",
                marginLeft: "-15.5px",
                gap: "8px",
                paddingTop: "8px",
              }}
            >
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "start",
                  gap: "8px",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название на две строки
                </Text>
                <Select
                  items={selectItems}
                  value={selectValue.select1}
                  onChange={({ value }) =>
                    setSelectValue((prev) => ({ ...prev, select1: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название длинное на три строки
                </Text>
                <Select
                  items={selectItems}
                  value={selectValue.select2}
                  onChange={({ value }) =>
                    setSelectValue((prev) => ({ ...prev, select2: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs" truncate>
                  Длинное названание
                </Text>
                <Select
                  items={selectItems}
                  value={selectValue.select3}
                  onChange={({ value }) =>
                    setSelectValue((prev) => ({ ...prev, select3: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
            </Layout>
          ),
        },
        {
          label: "Группа настроек 3",
          content: (
            <Layout
              direction="column"
              style={{
                width: "107%",
                marginLeft: "-15.5px",
                gap: "8px",
                paddingTop: "8px",
              }}
            >
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Text style={{ width: "30.5%" }} size="xs">
                  Название
                </Text>
                <Layout style={{ width: "66.5%", gap: "4px" }}>
                  <TextField
                    type="text"
                    value={inputValue.input4}
                    onChange={({ value }) =>
                      setInputValue((prev) => ({ ...prev, input4: value }))
                    }
                    size="xs"
                  />
                  <TextField
                    type="text"
                    value={inputValue.input5}
                    onChange={({ value }) =>
                      setInputValue((prev) => ({ ...prev, input5: value }))
                    }
                    size="xs"
                  />
                </Layout>
              </Layout>
              <Layout
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ width: "30%" }} size="xs">
                  Название
                </Text>
                <TextField
                  type="text"
                  value={inputValue.input6}
                  onChange={({ value }) =>
                    setInputValue((prev) => ({ ...prev, input6: value }))
                  }
                  size="xs"
                  style={{ width: "66.5%" }}
                />
              </Layout>
            </Layout>
          ),
        },
      ],
    },
  ];
}
