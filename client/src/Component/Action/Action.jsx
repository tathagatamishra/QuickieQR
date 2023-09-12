/* eslint-disable no-unused-vars */
import React from "react";
import "./Action.scss";
import { IonIcon } from "@ionic/react";
import { logoWhatsapp, arrowDown, logoFacebook, logoInstagram } from "ionicons/icons";
import { useDarkMode } from "../../assets/DarkModeContext";

export default function Action() {
  const { isDarkMode } = useDarkMode();

  const downloadCode = () => {
    const canvas = document.getElementById("QR");
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `QQR.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className={isDarkMode ? "dark-action" : "Action"}>
      <button onClick={() => downloadCode()}>
        <IonIcon icon={arrowDown} className="label" />
      </button>
      <button>
        <IonIcon icon={logoInstagram} className="label" />
      </button>
      <button>
        <IonIcon icon={logoFacebook} className="label" />
      </button>
      <button>
        <IonIcon icon={logoWhatsapp} className="label" />
      </button>
    </div>
  );
}
