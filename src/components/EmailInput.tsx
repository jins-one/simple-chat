import { ReactElement, useEffect, useState } from "react";
import st from '../styles/components/TextWithBtnInput.module.scss'
import { TextWithBtnInputProps } from "../models/TextWithBtnInputProps";
import turnIcon from '../assets/images/u_sync.svg'
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { emailOverlapCheckBucket,resetEmail,setEmail as setEmailReducer } from "../redux/reducer/emailOverlapReducer";
import { sendEmailBucket } from "../redux/reducer/sendEmailReducer";
/**
 * 회원가입 페이지에서 전송 버튼이 포함된 input component
 * @returns component
 */
export default function EmailInput({ style }: TextWithBtnInputProps): ReactElement {
    const [email, setEmail] = useState<string>('');
    const [isErr, setIsErr] = useState<boolean>(false)
    //이메일 중복 api
    const isLoading = useAppSelector(state => state.emailOverlap.isLoading);
    //이메일 중복 결과
    const res = useAppSelector(state => state.emailOverlap.res);
    //이메일 중복 검사완료
    const complete = useAppSelector(state => state.emailOverlap.complete);

    const isSendEmail = useAppSelector(state=>state.emailSend.isLoading)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!res) {setIsErr(false);return;}
        setIsErr(true);
        dispatch(resetEmail())
    }, [res])
    useEffect(()=>{
        if(!complete){return;}
        dispatch(setEmailReducer(email))
        dispatch(sendEmailBucket({email}))
    },[complete])
    return (
        <div style={style} className={st.container}>
            <p className={st.text1}>{'이메일 주소'}</p>
            <div className={st.box}>
                <input disabled={complete} placeholder={'asdf@gmail.com'} onChange={(event) => { setEmail(event.target.value) }} />
                {(!complete && email!=='') && <button disabled={isLoading } onClick={async () => {
                    dispatch(emailOverlapCheckBucket({ email }))
                    
                }}>
                    {isLoading || isSendEmail ? (
                        <img src={turnIcon} alt="전송버튼 로딩바" />
                    ) : '메일발송'}
                </button>}
                
            </div>
            <div className={st.smallLine} />
            {isErr ? (
                <p className={st.errorText}>{'이미 사용중인 이메일 주소입니다'}</p>
            ) : (null)}

        </div>
    )
}