import { ReactElement, useState } from "react";
import st from '../styles/components/LangSelect.module.scss'
import { LangSelectProps } from "../models/LangSelectProps";

/**
 * 회원가입 페이지에서 한국, 영어 선택을 하는 버튼 두 개 짜리 button component
 * @param param0 LangSelectProps
 * @returns component
 */
export default function LangSelect({ style }: LangSelectProps): ReactElement {
    const [lang, setLang] = useState<boolean>(true);
    return (
        <div style={{ ...style }} className={st.container}>
            <p className={st.text1}>사용할 언어를 선택해주세요</p>
            <div className={st.buttonBox}>
                <button onClick={() => { setLang(true); }} className={`${lang ? st.choose : ''}`}>Korea</button>
                <button onClick={() => { setLang(false); }} className={`${!lang ? st.choose : ''}`}>English</button>
            </div>
        </div>
    )
}