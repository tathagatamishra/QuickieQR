/* eslint-disable no-unused-vars */
import React from "react";
import "./Action.scss";
import { IonIcon } from "@ionic/react";
import { logoWhatsapp, arrowDown, logoFacebook, logoInstagram } from "ionicons/icons";
import { useDarkMode } from "../../assets/DarkModeContext";

export default function Action() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={isDarkMode ? "dark-action" : "Action"}>
      <button>
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
