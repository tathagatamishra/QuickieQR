import React, { useState, useEffect } from "react";
import "./Input.scss";
import "./Action.scss";
import { IonIcon } from "@ionic/react";
import {
  logoWhatsapp,
  arrowDown,
  logoFacebook,
  logoInstagram,
  chevronUpOutline,
  chevronDownOutline,
} from "ionicons/icons";
import { useDarkMode } from "../../assets/DarkModeContext";
import "./Output.scss";

import { QRCode } from "react-qrcode-logo";

{
  /* --------------------------------------------------------------- */
}

export default function Action() {
  const { isDarkMode } = useDarkMode();

  {
    /* --------------------------------------------------------------- */
  }

  const [isHidden, setIsHidden] = useState(false);

  const [QRValue, setQRValue] = useState("");
  const [QRStyle, setQRStyle] = useState(false);
  const [QRBG, setQRBG] = useState("#ffffff");
  const [QRFG, setQRFG] = useState("#000000");
  const [QREye, setQREye] = useState("#000000");
  const [QRImg, setQRImg] = useState(null);

  const [logoSize, setLogoSize] = useState(148);
  const [testStyle, setTestStyle] = useState({});

  function hide() {
    if (isHidden) setIsHidden(false);
    else setIsHidden(true);
  }

  {
    /* --------------------------------------------------------------- */
  }

  const defaultValue =
    "Welcome to Quickie QR. Use contrasting colors. Do not over-customize your QR code. Thank you!";

  useEffect(() => {
    if (QRValue.length / 7 == 0) {
    }

    if (QRValue.length > 0 && QRValue.length < 8) {
      setLogoSize(95);
    } else if (QRValue.length > 7 && QRValue.length < 15) {
      setLogoSize(138);
    } else if (QRValue.length > 14 && QRValue.length < 22) {
      setLogoSize(170);
    } else if (QRValue.length > 21 && QRValue.length < 29) {
      setLogoSize(148);
    } else if (QRValue.length > 28 && QRValue.length < 36) {
      setLogoSize(172);
    } else if (QRValue.length > 35 && QRValue.length < 43) {
      setLogoSize(172);
    } else if (QRValue.length > 42 && QRValue.length < 50) {
      setLogoSize(155);
    }

    setTestStyle({
      width: `${100}%`,
      background: "wheat",
    });
  }, [QRValue]);

  {
    /* --------------------------------------------------------------- */
  }

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

  {
    /* --------------------------------------------------------------- */
  }

  return (
    <>
      <div className={isDarkMode ? "dark-input" : "Input"}>
        <input
          className="text-input"
          type="text"
          placeholder="Enter any text or link here"
          value={QRValue}
          onChange={(e) => setQRValue(e.target.value)}
        />

        <div className="extra">
          <div className="checkbox-group">
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

          <input
            className="number"
            type="number"
            value={logoSize}
            onChange={(e) => setLogoSize(e.target.value)}
          />

          <input
            className="file"
            type="file"
            accept="image/*"
            onChange={(e) => setQRImg(e.target.files[0])}
          />
        </div>

        <div className="qr-color">
          <p className="color-heading">
            Before modifying the color of QR Code, read the instruction
          </p>

          <div className="color-section">
            <div className="color-group">
              <p>{QRStyle ? "Squares" : "Dots"}</p>
              <input
                className="fg-color"
                type="color"
                value={QRFG}
                onChange={(e) => setQRFG(e.target.value)}
              />
            </div>

            <div className="color-group">
              <p>Eyes</p>
              <input
                className="eye-color"
                type="color"
                value={QREye}
                onChange={(e) => setQREye(e.target.value)}
              />
            </div>

            <div className="color-group">
              <p>Background</p>
              <input
                className="bg-color"
                type="color"
                value={QRBG}
                onChange={(e) => setQRBG(e.target.value)}
              />
            </div>
          </div>

          {isHidden && (
            <>
              <div className="hidden-section">
                <div className="instruction">
                  <h3>Use contrasting colors</h3>
                  <p>
                    This makes your QR code easy to scan, as most scanning apps
                    have difficulty scanning QR codes that are faded or too
                    monochromatic. Moreover, pastel hues that are too soft may
                    come out lighter after printing. So take into consideration
                    having high contrast colors to your QR code so it&apos;s
                    scannable.
                  </p>
                  <h3>Avoid inverted QR code</h3>
                  <p>
                    That being said, think about your color scheme when you
                    color the QR code. Stick with a light-colored background and
                    dark foreground for a scannable QR code.
                  </p>
                  <h4>
                    Don&apos;t overdo your QR code customization to avoid
                    compromising the overall structure of the QR code,
                    especially the Finder patterns.
                  </h4>
                  <img src="use-contrasting-colors_800.jpg" alt="" />
                  <img src="avoid-inverted-qr-code_800.jpg" alt="" />
                </div>
              </div>
            </>
          )}

          <div className="up_down" onClick={hide}>
            {!isHidden ? (
              <IonIcon icon={chevronDownOutline} />
            ) : (
              <IonIcon icon={chevronUpOutline} />
            )}
          </div>
        </div>

        {/* <div className="btn">
          <button type="submit" onClick={() => downloadCode()}>
            Download Your QR Code
          </button>
        </div> */}
      </div>

      {/* --------------------------------------------------------------- */}

      <div className={isDarkMode ? "dark-output" : "Output"}>
        <p>
          {QRValue.length} || {logoSize}
        </p>
        <div className="qr-card">
          <QRCode
            value={QRValue ? QRValue : defaultValue}
            size={720} // QR code dimension
            // quietZone={50}
            quietZone={0}
            ecLevel={"H"}
            qrStyle={QRStyle ? QRStyle : "dots"}
            logoOpacity={1}
            logoWidth={logoSize}
            logoHeight={logoSize}
            // logoPadding={2}
            // logoPaddingStyle={'circle'}
            // removeQrCodeBehindLogo={true}
            logoImage={QRImg ? URL.createObjectURL(QRImg) : "test2.png"} // URL of the logo
            bgColor={QRBG ? QRBG : "#ffffff"}
            fgColor={QRFG ? QRFG : "#000000"}
            eyeColor={QREye ? QREye : "#000000"}
            eyeRadius={[
              [10, 10, 0, 10],
              [10, 10, 10, 0], // top/right eye
              [10, 0, 10, 10], // bottom/left
            ]}
            // eyeRadius={10} // radius of the promocode eye
            enableCORS={true}
            id={"QR"}
          />
          <div className="test" style={testStyle}>
            z
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------- */}

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
    </>
  );
}
