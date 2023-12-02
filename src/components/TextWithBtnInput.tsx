import { ReactElement, useState } from "react";
import st from '../styles/components/TextWithBtnInput.module.scss'
import { TextWithBtnInputProps } from "../models/TextWithBtnInputProps";
import turnIcon from '../assets/images/u_sync.svg'
/**
 * 회원가입 페이지에서 전송 버튼이 포함된 input component
 * @returns component
 */
export default function TextWithBtnInput({ style, titleText, placeholder, isError, errorText, btnText, btnFunc }: TextWithBtnInputProps): ReactElement {
    const [isSend, setIsSend] = useState<boolean>(false);
    function turnBtn() {
        setIsSend(true);

    }
    return (
        <div style={style} className={st.container}>
            <p className={st.text1}>{titleText}</p>
            <div className={st.box}>
                <input placeholder={placeholder} />
                <button disabled={isSend} onClick={async () => {
                    turnBtn();
                    // await btnFunc();
                    // setIsSend(false)
                }}>
                    {isSend ? (
                        <img src={turnIcon} alt="전송버튼 로딩바" />
                    ) :
                        btnText
                    }

                </button>
            </div>
            <div className={st.smallLine} />
            {isError ? (
                <p className={st.errorText}>{errorText}</p>
            ) : (null)}

        </div>
    )
}