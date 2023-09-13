/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Input.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Input(props) {
  const { isDarkMode } = useDarkMode();

  const [dataToSend, setDataToSend] = useState("");

  const sendDataToParent = () => {
    props.sendDataToParent(dataToSend);
  };

  return (
    <div className={isDarkMode ? "dark-input" : "Input"}>
      <input
        type="text"
        placeholder="Enter data"
        value={dataToSend}
        onChange={(e) => setDataToSend(e.target.value)}
      />
      <div className="btn">
        <button type="submit" onClick={sendDataToParent}>
          Generate
        </button>
        <button type="submit">Generate with image</button>
      </div>
    </div>
  );
}
