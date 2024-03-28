import { ReactElement, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import st from "../styles/pages/AccountLogin.module.scss";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loginBucket } from "../redux/reducer/loginReducer";
export default function AccountLogin(): ReactElement {
  const [email, setEmail] = useState<string>('');
  const [passwd, setPasswd] = useState<string>('');
  const res = useAppSelector(state => state.login.res);
  const [isErr, setIsErr] = useState<boolean>(false);
  const loginComplete = useAppSelector(state=>state.login.complete)
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (!res) { return; }
    setIsErr(true)
  })

  useEffect(()=>{
    if(loginComplete){
      navigate('/list')
    }
  },[loginComplete])
  return (
    <div className={st.container}>
      <Header />
      <div className={st.line} />

      <p className={st.text1}>여행지에서 쓸 수 있는</p>
      <p className={st.text2}>세상에서 가장 간단한 채팅 서비스</p>

      <TextInput onChange={setEmail} isError={false} errorText="이메일" titleText="이메일 주소" placeholder="asdf@gmail.com" style={{ marginTop: "36px" }} />

      <PasswordInput onChange={setPasswd} titleText="비밀번호 입력" isError={isErr} errorText="비밀번호 또는 이메일이 잘못 되었습니다" style={{ marginTop: "32px" }} />

      <button
        disabled={email === '' || passwd === ''}
        onClick={() => {
          dispatch(loginBucket({ email, password: passwd }))
        }} className={`${st.completeBtn} ${email !== '' && passwd !== '' ? st.active : ''}`}>로그인</button>

      <div className={st.otherBtns}>
        <Link to={"/account"}>회원가입</Link>
        <div />
        <Link to={"/"}>문의하기</Link>
      </div>
    </div>
  );
}
