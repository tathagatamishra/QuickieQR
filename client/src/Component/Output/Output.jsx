/* eslint-disable no-unused-vars */
import React from "react";
import "./Output.scss";

import { QRCode } from "react-qrcode-logo";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Output() {
  const { isDarkMode } = useDarkMode();

  

  return (
    <div className={isDarkMode ? "dark-output" : "Output"}>
      <div className="qr-card">
        <QRCode
          value={
            "https://github.com/tathagatamishra/QuickieQR"
          } // here you should keep the link/value(string) for which you are generation promocode
          size={300} // the dimension of the QR code (number)
          logoImage="https://lh3.googleusercontent.com/a/ACg8ocKYJBPC1BQwGumIBMqxCXBhCSbriYcssP-9SzDx9wcW_jk=s360-c-no" // URL of the logo you want to use, make sure it is a dynamic url
          logoHeight={100}
          logoWidth={100}
          logoOpacity={1}
          enableCORS={true} // enabling CORS, this is the thing that will bypass that DOM check
          qrStyle="dots" // type of qr code, wether you want dotted ones or the square ones
          eyeRadius={10} // radius of the promocode eye
          id={"QR"}
        />
        {/* <img src="https://cdn-icons-png.flaticon.com/512/241/241528.png" alt="" /> */}
      </div>
    </div>
  );
}
