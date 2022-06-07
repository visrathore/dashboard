import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius, ...props }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={props.onClick}
    >
      {text}
      {props.icon}
    </button>
  );
};

export default Button;
