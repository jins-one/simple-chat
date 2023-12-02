import { ReactElement, useState, useEffect } from "react";
import Header from "../components/Header";
import st from "../styles/pages//NoAccountLogin.module.scss";
import TextInput from "../components/TextInput";
import LangSelect from "../components/LangSelect";
import AgreeClause from "../components/AgreeClause";
export default function NoAccountLogin(): ReactElement {
  const [agree, setAgree] = useState<boolean>(false);

  return (
    <div className={st.container}>
      <Header />
      <div className={st.line} />

      <p className={st.text1}>여행지에서 쓸 수 있는</p>
      <p className={st.text2}>세상에서 가장 간단한 채팅 서비스</p>

      {/* 닉네임 입력 */}
      <TextInput isError={true} errorText="닉네임" titleText="사용할 닉네임을 입력해주세요" placeholder="예) randk" style={{ marginTop: "36px" }} />

      {/* 언어 선택 버튼 */}
      <LangSelect style={{ marginTop: "32px" }} />

      <AgreeClause
        onChange={(v: boolean) => {
          setAgree(v);
        }}
      />

      <button className={`${st.nextBtn} ${agree ? st.agreeBtn : ""}`}>시작하기</button>
    </div>
  );
}
