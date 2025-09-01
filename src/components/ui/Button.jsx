import "./Button.css";
import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className="zoom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
