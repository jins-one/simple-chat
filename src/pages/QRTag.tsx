import { ReactElement } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ReactComponent as Chain } from "../assets/svg/chain-icon.svg";
import style from "../styles/pages/QRTag.module.scss";

export default function qrTag(): ReactElement {
  return (
    <div className={style.container}>
      <p className={style.subtitle}>
        표시된 QR코드를
        <br />
        카메라를 통해 스캔해주세요
      </p>
      <div className={style["qr-wrapper"]}>
        <QRCodeSVG
          value="https://app.gather.town/app/4sJuNAr2duwHuDnN/simsimpuri"
          size={180}
          bgColor={"#f5f5f5"}
          fgColor={"rgb(29, 125, 222)"}
          includeMargin={true}
        />
      </div>
      <button type="button" className={style["qr-share-button"]}>
        <Chain width="24" height="24" />
        <span>&nbsp;QR코드 공유하기</span>
      </button>
    </div>
  );
}
