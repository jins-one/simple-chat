import { ReactElement } from "react";
import st from '../styles/components/TextInput.module.scss'
import { TextInputProps } from "../models/TextInputProps";
/**
 * 로그인 페이지에서 이메일을 입력하는 input component
 * @returns component
 */
export default function TextInput({ style, titleText, placeholder, isError, errorText }: TextInputProps): ReactElement {
    return (
        <div style={style} className={st.container}>
            <p className={st.text1}>{titleText}</p>
            <input placeholder={placeholder} />
            <div className={st.smallLine} />
            {isError ? (
                <p className={st.errorText}>{errorText}</p>
            ) : (null)}

        </div>
    )
}