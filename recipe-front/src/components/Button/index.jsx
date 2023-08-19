import React from "react";
import "./style.css";

const Button = ({ text, color, textColor, onClick, enabled = true }) => {
  const clickHandler = (e) => {
    if (enabled) {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <button
      className={`roundedMedium baseButton pointer ${color} ${textColor}`}
      onClick={(e) => clickHandler(e)}
    >
      {text}
    </button>
  );
};

export default Button;
