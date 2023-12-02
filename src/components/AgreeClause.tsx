import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import st from '../styles/components/AgreeClause.module.scss'
import { AgreeClauseProps } from '../models/AgreeClause'
export default function AgreeClause({ onChange }: AgreeClauseProps): ReactElement {
    return (
        <div className={st.container}>
            <input type={'radio'} id={'agree-radio'} onChange={(e) => { onChange(e.target.checked) }} />
            <div className={st.textBox}>
                <label htmlFor={'agree-radio'}>서비스 이용약관에 동의합니다(필수)</label>
                <p><Link to={'/'}>서비스 이용약과, 개인정보 제3자 제공동의</Link></p>
            </div>

        </div>
    )
}