import React, { ReactElement, useState } from "react";
import st from "../styles/pages/Login.module.scss";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import MainLogo from "../assets/images/main-logo.svg";
import TalkBox from "../assets/images/talk-box.svg";

export default function Login(): ReactElement {
  const [leng, setLang] = useState<string>("kr");
  const [agree, setAgree] = useState<boolean>(false);

  function changeLen(leng: string): void {
    setLang(leng);
  }

  function toggleAgree(): void {
    setAgree((p) => !p);
  }

  return (
    <div className={st.container}>
      <Header />

      <div className={st.line} />
      <div className={st.birdBox}>
        <img src={MainLogo} alt="main-logo" />
        <img className={st.talkBox} src={TalkBox} alt="talk-box" />
      </div>

      <p className={`${st.text1} ${st.mt32}`}>세상에서 가장 간단한 채팅 서비스</p>
      <p className={st.text1}>잠시에 오신걸 환영합니다!</p>

      <div className={st.buttonBox}>
        <button>로그인</button>
        <button>회원가입</button>
      </div>

      <div className={st.orLine}>
        <div />
        <p>또는</p>
        <div />
      </div>

      <Link to={"/"}>비회원으로 시작하기</Link>
    </div>
  );
}
