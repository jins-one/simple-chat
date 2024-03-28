import { ReactElement, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import st from "../styles/pages/NewAccount.module.scss";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import TextWithBtnInput from "../components/TextWithBtnInput";
import LangSelect from "../components/LangSelect";
import AgreeClause from "../components/AgreeClause";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import EmailInput from "../components/EmailInput";
import EmailCodeInput from "../components/EmailCodeInput";
import { newAccountBucket } from "../redux/reducer/newAccountReducer";
export default function NewAccount(): ReactElement {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const [nick,setNick] = useState<string>('')
  const [agree, setAgree] = useState<boolean>(false);
  const [passwd,setPasswd] = useState<string>('')
  const [nextPasswd,setNextPasswd] = useState<string>('');
  const isLoginComplete = useAppSelector(state=>state.newAccount.complete)
  const code = useAppSelector(state=>state.codeVerify.code);
  const codeCmpl = useAppSelector(state=>state.codeVerify.complete)
  const emailCmpl = useAppSelector(state=>state.emailSend.complete)
  const email = useAppSelector(state=>state.emailOverlap.email);
  const [completeBtn,setCompleteBtn] = useState<boolean>(false);
  const [selectLang,setSelectLang] = useState<string>('kr')

  useEffect(()=>{
    console.log('-----')
    console.log(nick)
    console.log(code)
    console.log(email)
    console.log(passwd)
    console.log(nextPasswd)
    console.log(agree);
    console.log('===')
    console.log(completeBtn)
    setCompleteBtn(nick!==''&& code!=='' && email!=='' && passwd!==''&& nextPasswd!==''&&passwd===nextPasswd && agree && codeCmpl && emailCmpl)
  })
  useEffect(()=>{
    if(!isLoginComplete){return}
    navigate('/account/login',{replace:true})
  },[isLoginComplete])
  return (
    <div className={st.container}>
      <Header />
      <div className={st.line} />

      <p className={st.text1}>회원가입</p>

      <TextInput onChange={setNick} isError={false} errorText="사용중인 닉네임입니다" titleText="사용할 닉네임을 입력해주세요" placeholder="gold" style={{ marginTop: "36px" }} />
      <EmailInput style={{ marginTop: "36px" }} />
      <EmailCodeInput style={{ marginTop: "22px" }} />
      {/* <TextWithBtnInput
        btnFunc={async () => {
          await dispatch(nickAndEmailCheckBucket(''))
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
      /> */}

      <PasswordInput onChange={setPasswd} titleText="비밀번호 입력" isError={false} errorText="비밀번호" style={{ marginTop: "32px" }} />
      <PasswordInput onChange={setNextPasswd} titleText="비밀번호 확인" isError={nextPasswd!=='' && (passwd!==nextPasswd)} errorText="비밀번호 일치하지 않습니다" style={{ marginTop: "22px" }} />

      <LangSelect onChange={setSelectLang} style={{ marginTop: "32px" }} />

      <AgreeClause
        onChange={(v: boolean) => {
          setAgree(v);
        }}
      />

      <button disabled={!completeBtn} onClick={()=>{
        console.log('???')
        dispatch(newAccountBucket({
          code,
          email,
          language:selectLang,
          nickname:nick,
          password:passwd
        }))
      }} className={`${st.completeBtn} ${completeBtn ? st.active : ''}`}>로그인</button>
    </div>
  );
}
