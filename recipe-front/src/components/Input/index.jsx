import React from "react";
import "./style.css";

const Input = ({ onChange, label, placeholder, type = "text", disabled, inputRef }) => {
  const placeholderText = disabled ? "Can't edit anymore" : placeholder;

  return (
    <div className="flex column baseInput">
      <label>{label}</label>
      <input
        className="roundedMedium"
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholderText}
        disabled={disabled}
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
