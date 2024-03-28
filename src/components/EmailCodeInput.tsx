import { ReactElement, useEffect, useState } from "react";
import st from '../styles/components/TextWithBtnInput.module.scss'
import { TextWithBtnInputProps } from "../models/TextWithBtnInputProps";
import turnIcon from '../assets/images/u_sync.svg'
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { codeVerifyBucket,setCode as setCodeReducer,resetCode as resetCodeReducer } from "../redux/reducer/codeVerifyReducer";
/**
 * 회원가입 페이지에서 전송 버튼이 포함된 input component
 * @returns component
 */
export default function EmailCodeInput({ style }: TextWithBtnInputProps): ReactElement {
    const [code, setCode] = useState<string>('');
    const [isError,setIsError] = useState<boolean>(false)
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.codeVerify.isLoading);
    const getEmail = useAppSelector(state => state.emailOverlap.email);
    const complete = useAppSelector(state => state.codeVerify.complete);
    const res = useAppSelector(state=>state.codeVerify.res);

    useEffect(()=>{
        if(!res){setIsError(false);return;}
        setIsError(true)
        dispatch(resetCodeReducer())
    },[res])
    return (
        <div style={style} className={st.container}>
            <p className={st.text1}>{'인증번호 확인'}</p>
            <div className={st.box}>
                <input disabled={complete} placeholder={'123456'} onChange={(e) => { setCode(e.target.value) }} />
                {(!complete && getEmail !== '') &&
                    <button disabled={complete} onClick={async () => {
                        dispatch(setCodeReducer(code))
                        dispatch(codeVerifyBucket({ code, email: getEmail }))
                    }}>

                        {isLoading ? (
                            <img src={turnIcon} alt="전송버튼 로딩바" />
                        ) :
                            '인증번호 확인'
                        }

                    </button>}
            </div>
            <div className={st.smallLine} />
            {isError ? (
                <p className={st.errorText}>{'잘못 된 인증번호 입니다.'}</p>
            ) : (null)}

        </div>
    )
}