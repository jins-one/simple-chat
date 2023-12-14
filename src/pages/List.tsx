import { ReactElement, useEffect, useRef, useState } from "react";
import st from "../styles/pages/List.module.scss";
import Header from "../components/Header";
import { ReactComponent as NewRoom } from "../assets/images/new-room-btn.svg";
import RoomCard from "../components/RoomCard";
import { RoomCardType } from "../models/cusModal";
import { io,Manager } from "socket.io-client";
// const manager = new Manager("http://3.34.151.1:3000/chat");
// const socket = manager.socket("http://3.34.151.1:3000/chat");
const socket = io("http://3.34.151.1:3000/chats",{transports:['websocket'],reconnection:true} );
export default function List(): ReactElement {
    const [list, setList] = useState<RoomCardType[]>([]);
    const didMount = useRef<boolean>(false)

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

    useEffect(() => {
        if(!didMount.current){
            didMount.current = true;
            return;
        }
        // console.log('111')
        // const socket = manager.socket("http://3.34.151.1:3000/chat");

        // socket.
        socket.connect();
        socket.on('connect', () => {
            console.log(socket.id)
        })
        socket.on('chats', (eee) => {
            console.log(eee)
        })
        socket.on('create', (res) => {
            console.log('create')
            console.log(socket.id)
        })
        socket.on('rooms', (res) => {
            console.log(res)
        })

        setTimeout(()=>{
            console.log(11)
            console.log(socket)
            socket.emit('rooms',{})
        },1500)

        return (()=>{socket.close()})
    }, [])

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
