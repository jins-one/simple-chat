import { ReactElement, useRef, useState } from 'react';
import st from '../styles/components/PasswordInput.module.scss'
import eyeIcon from '../assets/images/fi_eye.svg'
import eyeIconColor from '../assets/images/fi_eye-color.svg'
import { PasswordInputProps } from '../models/PasswordInput';
export default function PasswordInput({ style, isError, errorText, titleText }: PasswordInputProps): ReactElement {
    const input = useRef<HTMLInputElement>(null);
    const [passwordState, setPasswordState] = useState<boolean>(false)
    function showToggle(): void {
        if (!input.current) { return; }
        if (input.current.type === 'password') {
            input.current.type = 'text';
            setPasswordState(true);
        } else {
            input.current.type = 'password';
            setPasswordState(false);
        }
    }
    return (
        <div style={style} className={st.container}>
            <p>{titleText}</p>
            <div className={st.inputBox}>
                <input ref={input} type='password' />
                <img onClick={() => { showToggle() }} src={!passwordState ? eyeIcon : eyeIconColor} alt='비밀번호 보기 버튼' />
            </div>
            <div className={st.smallLine} />
            {isError ? (
                <p className={st.errorText}>{errorText}</p>
            ) : (null)}
        </div>
    )
}