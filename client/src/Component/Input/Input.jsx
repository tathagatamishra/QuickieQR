/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Input.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Input({ dataForParent }) {
  const { isDarkMode } = useDarkMode();

  const [QRValue, setQRValue] = useState("");
  const [QRStyle, setQRStyle] = useState(false);
  const [QRBG, setQRBG] = useState("#ffffff");
  const [QRFG, setQRFG] = useState("#000000");
  const [QRImg, setQRImg] = useState(null);
  
  const [inputArray, setInputArray] = useState([]);
  
  const sendDataToParent = () => {
    setInputArray([QRValue, QRStyle, QRBG, QRFG, QRImg]);
    
    dataForParent(inputArray);
  };
  
  // const [image, setImage] = useState(null);
  // const addQRImage = (e) => {
  //   setQRImg(e.target.files[0]);

  //   if (QRImg) {
  //     setImage(URL.createObjectURL(QRImg));
  //   }
  // };

  return (
    <div className={isDarkMode ? "dark-input" : "Input"}>
      <input
        className="text-input"
        type="text"
        placeholder="Enter any text or link here"
        value={QRValue}
        onChange={(e) => setQRValue(e.target.value)}
      />

      <div className="extra">
        <div className="group1">
          <p>{QRStyle ? "Squares" : "Dots"}</p>
          <input
            id="checkbox"
            className="checkbox"
            type="checkbox"
            checked={QRStyle}
            onChange={(e) => setQRStyle(e.target.checked)}
          />
          <label htmlFor="checkbox"></label>
        </div>

        <div className="group2">
          <p>BG Color</p>
          <input
            className="bg-color"
            type="color"
            value={QRBG}
            onChange={(e) => setQRBG(e.target.value)}
          />
        </div>

        <div className="group2">
          <p>FG Color</p>
          <input
            className="fg-color"
            type="color"
            value={QRFG}
            onChange={(e) => setQRFG(e.target.value)}
          />
        </div>
      </div>

      <div className="btn">
        <input
          className="file"
          type="file"
          accept="image/*"
          onChange={(e) => setQRImg(e.target.files[0])}
        />
        <button type="submit" onClick={sendDataToParent}>
        Double Click To Generate
        </button>
      </div>
    </div>
  );
}
