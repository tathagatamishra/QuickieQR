/* eslint-disable no-unused-vars */
import React from "react";
import "./Output.scss";

import { QRCode } from "react-qrcode-logo";

import { useDarkMode } from "../../assets/DarkModeContext";



export default function Output({dataFromParent}) {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-output" : "Output"}>

      <div className="qr-card">

        <QRCode
          value={`${dataFromParent[0]}`} 
          size={300} // the dimension of the QR code (number)
          logoImage={dataFromParent[4] ? `${URL.createObjectURL(dataFromParent[4])}` : 'QQR.png'} // URL of the logo
          logoHeight={100}
          logoWidth={100}
          logoOpacity={1}
          bgColor={dataFromParent[2] ? `${dataFromParent[2]}` : '#ffffff'}
          fgColor={dataFromParent[3] ? `${dataFromParent[3]}` : "#000000"}
          enableCORS={true}
          qrStyle={dataFromParent[1] ? `${dataFromParent[1]}` : 'dots'}
          eyeRadius={10} // radius of the promocode eye
          id={"QR"}
        />

      </div>
    </div>
  );
}
