/* eslint-disable no-unused-vars */
import React from "react";
import "./Output.scss";

import { QRCode } from "react-qrcode-logo";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Output({ dataFromParent }) {
  const { isDarkMode } = useDarkMode();

  const defaultValue =
    "Welcome to Quickie QR. Use contrasting colors. Do not over-customize your QR code. Thank you!";

  return (
    <div className={isDarkMode ? "dark-output" : "Output"}>
      <div className="qr-card">
        <QRCode
          value={dataFromParent[0] ? `${dataFromParent[0]}` : defaultValue}
          size={300} // the dimension of the QR code (number)
          logoImage={
            dataFromParent[5]
              ? `${URL.createObjectURL(dataFromParent[5])}`
              : ""
          } // URL of the logo
          logoHeight={100}
          logoWidth={100}
          logoOpacity={1}
          ecLevel={"H"}
          bgColor={dataFromParent[2] ? `${dataFromParent[2]}` : "#ffffff"}
          fgColor={dataFromParent[3] ? `${dataFromParent[3]}` : "#000000"}
          enableCORS={true}
          qrStyle={dataFromParent[1] ? `${dataFromParent[1]}` : "dots"}
          eyeColor={dataFromParent[4] ? `${dataFromParent[4]}` : "#000000"}
          eyeRadius={[
            [10, 10, 0, 10],
            [10, 10, 10, 0], // top/right eye
            [10, 0, 10, 10], // bottom/left
          ]}
          // eyeRadius={10} // radius of the promocode eye
          id={"QR"}
        />
      </div>
    </div>
  );
}
