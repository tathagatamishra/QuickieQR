/* eslint-disable no-unused-vars */
import React from "react";
import "./Input.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Input() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-input" : "Input"}>
      <input type="text" />
      <div className="btn">
        <button className="btn-generate">Generate</button>
        <button>Generate with image</button>
      </div>
    </div>
  );
}
