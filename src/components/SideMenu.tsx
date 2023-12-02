import { ReactElement, useState } from "react";
import style from "../styles/components/SideMenu.module.scss";
import { ReactComponent as CloseIcon } from "../assets/svg/close-icon.svg";
import { ReactComponent as ChatListIcon } from "../assets/svg/chatting-list-icon.svg";
import { ReactComponent as SaveIcon } from "../assets/svg/save-icon.svg";
import { ReactComponent as MegaphoneIcon } from "../assets/svg/megaphone-icon.svg";
import { ReactComponent as QuitIcon } from "../assets/svg/quit-icon.svg";
import { ReactComponent as MailIcon } from "../assets/svg/mail-icon.svg";
import { ReactComponent as TitleLogo } from "../assets/svg/jamsi-title-logo.svg";

export default function SideMenu(props: any): ReactElement {
  const toggleMenu = () => {
    props.sideMenuToggle();
  };
  // 모달 박스 클릭 시 모달 닫힘 방지
  const boxClickHandler = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className={style.container}>
      <div className={`${style.backdrop} ${props.isOpen ? style.active : ""}`} onClick={toggleMenu}></div>
      <div className={`${style.box} ${props.isOpen ? style.active : ""}`} onClick={boxClickHandler}>
        <TitleLogo width={89} height={19} className={style.logo} />
        <button className={style["close-button"]} onClick={toggleMenu}>
          <CloseIcon width={16} height={16} stroke="#509bf8" />
        </button>
        <div className={style.content}>
          <h3>MAIN</h3>
          <ul>
            <li>
              <div className={style["icon-wrapper"]}>
                <ChatListIcon width={20} height={20} />
              </div>
              &nbsp;&nbsp;채팅목록
            </li>
            <li>
              <div className={style["icon-wrapper"]}>
                <SaveIcon width={20} height={20} />
              </div>
              &nbsp;&nbsp;대화 내보내기
            </li>
            <li>
              <div className={style["icon-wrapper"]}>
                <MegaphoneIcon width={20} height={20} />
              </div>
              &nbsp;&nbsp;신고하기
            </li>
            <li>
              <div className={style["icon-wrapper"]}>
                <QuitIcon width={20} height={20} />
              </div>
              &nbsp;&nbsp;채팅방 나가기
            </li>
          </ul>
          <h3>OTHERS</h3>
          <ul>
            <li>
              <div className={style["icon-wrapper"]}>
                <MailIcon width={20} height={20} />
              </div>
              &nbsp;&nbsp;서비스 문의하기
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
