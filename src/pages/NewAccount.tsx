import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import st from "../styles/pages/NewAccount.module.scss";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import TextWithBtnInput from "../components/TextWithBtnInput";
import LangSelect from "../components/LangSelect";
import AgreeClause from "../components/AgreeClause";
export default function NewAccount(): ReactElement {
  const [agree, setAgree] = useState<boolean>(false);
  return (
    <div className={st.container}>
      <Header />
      <div className={st.line} />

      <p className={st.text1}>회원가입</p>

      <TextInput isError={true} errorText="사용중인 닉네임입니다" titleText="사용할 닉네임을 입력해주세요" placeholder="gold" style={{ marginTop: "36px" }} />

      <TextWithBtnInput
        btnFunc={async () => {
          return;
        }}
        btnText="메일발송"
        errorText="이미 사용중인 이메일 주소입니다"
        isError={true}
        placeholder="asdf@gmail.com"
        titleText="이메일 주소"
        style={{ marginTop: "32px" }}
      />

      <TextWithBtnInput
        btnFunc={async () => {
          return;
        }}
        btnText="인증번호 확인"
        errorText="잘못 된 인증번호 입니다."
        isError={true}
        placeholder="123456"
        titleText="인증번호 확인"
        style={{ marginTop: "22px" }}
      />

      <PasswordInput titleText="비밀번호 입력" isError={true} errorText="비밀번호" style={{ marginTop: "32px" }} />
      <PasswordInput titleText="비밀번호 확인" isError={true} errorText="비밀번호" style={{ marginTop: "22px" }} />

      <LangSelect style={{ marginTop: "32px" }} />

      <AgreeClause
        onChange={(v: boolean) => {
          setAgree(v);
        }}
      />

      <button className={st.completeBtn}>로그인</button>
    </div>
  );
}
