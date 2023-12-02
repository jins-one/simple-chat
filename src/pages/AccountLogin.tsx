import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import st from "../styles/pages/AccountLogin.module.scss";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
export default function AccountLogin(): ReactElement {
  return (
    <div className={st.container}>
      <Header />
      <div className={st.line} />

      <p className={st.text1}>여행지에서 쓸 수 있는</p>
      <p className={st.text2}>세상에서 가장 간단한 채팅 서비스</p>

      <TextInput isError={true} errorText="이메일" titleText="이메일 주소" placeholder="asdf@gmail.com" style={{ marginTop: "36px" }} />

      <PasswordInput titleText="비밀번호 입력" isError={true} errorText="비밀번호" style={{ marginTop: "32px" }} />

      <button className={st.completeBtn}>로그인</button>

      <div className={st.otherBtns}>
        <Link to={"/"}>회원가입</Link>
        <div />
        <Link to={"/"}>문의하기</Link>
      </div>
    </div>
  );
}
