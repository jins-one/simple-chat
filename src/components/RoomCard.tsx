import { ReactElement } from 'react'
import { RoomCardType } from '../models/cusModal'
import st from '../styles/components/RoomCard.module.scss'
export default function RoomCard(props: RoomCardType): ReactElement {
    return (
        <div key={props.myKey} className={st.container}>
            <div className={st.thumnail}></div>
            <div className={`${st.msgBox} ${st.ml12}`}>
                <p className={st.text1}>{props.nickName}</p>
                <p className={st.text2}>{props.lastMsg}</p>
            </div>
            <p className={st.lastMsgTime}>{props.lastMsgTime} min</p>
        </div>
    )
}