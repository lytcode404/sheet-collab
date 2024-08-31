import React, { useState, useRef, useEffect } from "react";

const SheetCell = ({ cellData, onChange, onKeyDown, rowIndex, colIndex }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    onChange(rowIndex, colIndex, e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      setIsEditing(false);
    }
    onKeyDown(e, rowIndex, colIndex);
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <td
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{
        color: cellData.color,
        border: "1px solid #ddd",
        padding: "8px",
        minWidth: "50px",
        cursor: "text",
      }}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={cellData.value}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: "100%", border: "none", outline: "none" }}
        />
      ) : (
        <span>{cellData.value}</span>
      )}
    </td>
  );
};

export default SheetCell;
