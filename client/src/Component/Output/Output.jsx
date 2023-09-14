/* eslint-disable no-unused-vars */
import React from "react";
import "./Output.scss";

import { QRCode } from "react-qrcode-logo";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Output({ dataFromParent }) {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-output" : "Output"}>
      <div className="qr-card">
        <QRCode
          value={`${dataFromParent[0]}`}
          size={300} // the dimension of the QR code (number)
          logoImage={
            dataFromParent[4]
              ? `${URL.createObjectURL(dataFromParent[4])}`
              : "QQR.png"
          } // URL of the logo
          logoHeight={100}
          logoWidth={100}
          logoOpacity={1}
          ecLevel={"Q"}
          // removeQrCodeBehindLogo={true}
          // logoPadding={1}
          // logoPaddingStyle={'circle'}
          bgColor={dataFromParent[2] ? `${dataFromParent[2]}` : "#ffffff"}
          fgColor={dataFromParent[3] ? `${dataFromParent[3]}` : "#000000"}
          enableCORS={true}
          qrStyle={dataFromParent[1] ? `${dataFromParent[1]}` : "dots"}
          // eyeRadius={10} // radius of the promocode eye
          eyeColor={[
            {
              // top/left eye
              outer: "red",
              inner: "black",
            },
            "blue", // top/right eye
            "purple", // bottom/left eye
          ]}
          eyeRadius={[
            {
              // top/left eye
              outer: [10, 10, 0, 10],
              inner: [50, 10, 10, 10],
            },
            [10, 10, 10, 0], // top/right eye
            [10, 0, 10, 10], // bottom/left
          ]}
          id={"QR"}
        />
      </div>
    </div>
  );
}
