import React from "react";
import "./Footer.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Footer() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-footer" : "Footer"}>
      <div className="lol">
        <p>privacy policy</p>
        <p>term and conditions</p>
      </div>
      <p>© 2023 Quickie QR</p>
    </div>
  );
}
