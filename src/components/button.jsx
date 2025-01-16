import React from "react";

const MyButton = ({ children, color, onClick }) => {
  return (
    <button
      className={"btn btn-" + color}
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default MyButton;
