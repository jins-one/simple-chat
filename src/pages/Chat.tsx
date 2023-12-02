import React, { ReactElement, useEffect, useRef, useState } from "react";
import style from "../styles/pages/Chat.module.scss";
import { ReactComponent as Clip } from "../assets/svg/clip-icon.svg";
import { ReactComponent as Send } from "../assets/svg/send-icon.svg";
import { ReactComponent as GuideLogo } from "../assets/svg/jamsi-guide-icon.svg";
import Header from "../components/Header";
import Modal from "../components/Modal";
import QrTag from "./QRTag";
import SideMenu from "../components/SideMenu";

// Message Model
type MessageInfo = {
  type: String;
  content: String;
};

export default function Chat(): ReactElement {
  const inchatRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLInputElement>(null);

  // 메시지 인풋
  const [message, setMessage] = useState("");
  // 배열 형태로 메시지 받아오기
  const [messages, setMessages] = useState([
    {
      type: "notice",
      content: "도도한 너구리님이 채팅방에 입장하셨습니다.",
    },
    {
      type: "receive",
      content: "ㅎㅇㅎㅇ",
    },
    {
      type: "receive",
      content: "ㅋㅋ",
    },
  ]);
  // 사이드메뉴 활성화 / 비활성화
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    // 말풍선 업데이트 될 때마다 스크롤을 화면 최하단으로 변경
    if (inchatRef.current) {
      inchatRef.current.scrollTop = inchatRef.current.scrollHeight;
    }
    // inchatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const sendMessage = () => {
    // 메시지 배열에 보낼 메시지 추가
    if (message !== "") {
      setMessages((msgs) => [...msgs, { type: "send", content: message }]);
    }
    // 메시지 인풋 초기화
    setMessage("");
  };
  const onEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      sendMessage();
    }
  };
  // 사이드메뉴 토글
  const sideMenuToggle = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className={style.container}>
      <Header toggleMenu={sideMenuToggle} />
      <div className={style.inchat} ref={inchatRef}>
        <div className={style["guide-wrapper"]}>
          <GuideLogo />
          <div className={style.guide}>
            비회원으로 이용 중인 사용자는 채팅목록을 저장할 수 없습니다. 함께 나눈 대화를 저장하고 싶다면 로그인 혹은 내보내기 기능을 이용해주세요.
          </div>
        </div>
        {messages.map((msg, index) => {
          return <Message type={msg.type} content={msg.content} key={index} />;
        })}
      </div>
      <div className={style["input-bar"]}>
        <div className={style["clip"]}>
          <Clip width="24" height="24" />
        </div>
        <div className={style["input-box"]}>
          <input
            type="text"
            className={style["msg-input"]}
            placeholder="메시지를 입력하세요"
            onChange={onInputChange}
            value={message}
            ref={inputBoxRef}
            onKeyDown={onEnterKeyDown}
          />
        </div>
        <button type="button" className={style["msg-send-btn"]} onClick={sendMessage}>
          <Send width="20" height="20" stroke="#FFF" />
        </button>
      </div>
      <Modal display={true} closable={true}>
        <QrTag />
      </Modal>
      <SideMenu sideMenuToggle={sideMenuToggle} isOpen={isSideMenuOpen} />
    </div>
  );
}

// 말풍선 컴포넌트
const Message = (props: MessageInfo) => {
  if (props.type === "notice") return <div className={style.notice}>{props.content}</div>;
  else if (props.type === "receive") return <div className={style.receive}>{props.content}</div>;
  else if (props.type === "send") return <div className={style.send}>{props.content}</div>;
  else return null;
};
