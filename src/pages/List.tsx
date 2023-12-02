import { ReactElement, useState } from "react";
import st from "../styles/pages/List.module.scss";
import Header from "../components/Header";
import { ReactComponent as NewRoom } from "../assets/images/new-room-btn.svg";
import RoomCard from "../components/RoomCard";
import { RoomCardType } from "../models/cusModal";

export default function List(): ReactElement {
  const [list, setList] = useState<RoomCardType[]>([]);

  function newRoomCreate(): void {
    setList((p): RoomCardType[] => {
      const newRoom: RoomCardType = {
        nickName: "new",
        lastMsg: "마지막",
        lastMsgTime: 1,
      };
      return p.length > 0 ? [...p, newRoom] : [newRoom];
    });
  }

  return (
    <div className={st.container}>
      <Header />

      <div className={st.line} />

      {list.length > 0 ? (
        list.map((item: RoomCardType, index: number) => {
          return <RoomCard {...item} key={index} myKey={index} />;
        })
      ) : (
        <div className={`${st.textBox} ${st.mt213}`}>
          <p className={st.text1}>채팅방이 존재하지 않습니다</p>
          <p className={`${st.text2} ${st.mt13}`}>
            하단 + 버튼을 이용해 채팅방을
            <br />
            생성해주세요
          </p>
        </div>
      )}

      <button className={st.newRoomBtn} onClick={newRoomCreate}>
        <NewRoom width={"67"} height={"67"} />
      </button>
    </div>
  );
}
