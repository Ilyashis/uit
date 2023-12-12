import { useState } from "react";

export default function Input(props) {
  const [isEditable, setIsEditable] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  return (
    <input
      type="text"
      defaultValue={"-"}
      readOnly={!isEditable}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setIsEditable(false);
        }
      }}
      onBlur={() => {
        setIsEditable(false);
      }}
      onDoubleClick={() => setIsEditable(true)}
      style={{
        width: "100%",
        border: isEditable ? "2px solid #0078d2" : "1px solid transparent",
        borderRadius: "5px",
        outline: "none",
        textAlign: "right",
        background: isEditable ? "white" : "transparent",
        padding: "4px 8px",
        cursor: "pointer",
      }}
      className={`active-cell ${props.isActive ? "cell-is-active" : ""}`}
      {...props}
    />
  );
}
