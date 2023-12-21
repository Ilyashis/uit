import { useRef } from "react";
import { Switch } from "@consta/uikit/Switch";
import { ContextMenu } from "@consta/uikit/ContextMenu";
import { Layout } from "@consta/uikit/Layout";
import { Tag } from "@consta/uikit/Tag";

import { IconSelect } from "@consta/icons/IconSelect";

export default function SwitchComponent({
  items,
  setItems,
  isOpen,
  setIsOpen,
  onClick,
  isActive,
}) {
  // switch context
  const switchContextRef1 = useRef(null);

  // Render Switch in Context Menu (right side)
  function renderSwitch(item, onChange) {
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
  const onChangeSwitch = (switchItem) => {
    const newItems = items.map((item, index) => {
      if (switchItem.label === item.label) {
        return { ...items[index], switch: !items[index].switch };
      }
      return item;
    });

    setItems(newItems);
  };

  return (
    <>
      <Layout
        className={`active-cell ${isOpen ? "focus-cell" : ""} ${
          isActive ? "cell-is-active" : ""
        }`}
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2px",
          height: "100%",
          padding: "4px 4px",
          border: "1px solid transparent",
        }}
        ref={switchContextRef1}
        onClick={() => {
          setIsOpen();
          onClick();
        }}
      >
        {items.map(
          (item) =>
            item.switch && (
              <Layout key={item.label}>
                <Tag size="xs" mode="check" label={item.label} />
              </Layout>
            )
        )}
        {!items.some((item) => item.switch) && <span>-</span>}
        <IconSelect size="xs" />
      </Layout>
      <ContextMenu
        size="xs"
        isOpen={isOpen}
        items={items}
        anchorRef={switchContextRef1}
        getItemRightSide={(item) => renderSwitch(item, onChangeSwitch)}
        direction="downStartLeft"
        style={{ width: "100px" }}
      />
    </>
  );
}
