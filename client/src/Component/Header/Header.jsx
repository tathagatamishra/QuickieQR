import React from "react";
import { IonIcon } from "@ionic/react";
import { sunnyOutline } from "ionicons/icons";
import "./Header.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <div className={isDarkMode ? "dark-header" : "Header"}>
      <div className="logo">
        <img className="logo-q" src="Q.png" alt="logo" />
        <h1 className="logo-quick">uickie</h1>
        <h1 className="logo-qr">QR</h1>
      </div>
      <div className="header-right">
        <div className="toggle-bg">
          <div className="toggle" onClick={toggleDarkMode}>
            <input type="checkbox" />
            <span className="button"></span>
            <IonIcon icon={sunnyOutline} className="label" />
          </div>
        </div>
      </div>
    </div>
  );
}
