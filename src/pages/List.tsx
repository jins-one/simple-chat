import { ReactElement, useEffect, useRef, useState } from "react";
import st from "../styles/pages/List.module.scss";
import Header from "../components/Header";
import { ReactComponent as NewRoom } from "../assets/images/new-room-btn.svg";
import RoomCard from "../components/RoomCard";
import { RoomCardType } from "../models/cusModal";
import { Socket, io } from "socket.io-client";
interface roomChat {
    info: string,
    roomId: number,
    title: string,
    users: {
        id: string,
        nickname: string
    }[]
}
export default function List(): ReactElement {
    const [list, setList] = useState<RoomCardType[]>([]);
    const didMount = useRef<boolean>(false)
    const [socket, setSocket] = useState<Socket | null>(null)

    function newRoomCreate(): void {
        socket?.emit('create')

    }

    useEffect(() => {
        if (socket) { return; }
        if (!didMount.current) {didMount.current=true;return}
        const sock = io("ws://3.34.151.1:3000/chats", {
            auth: {
                token: `${localStorage.getItem('access')}`,
            },
            transports: ['websocket'],
            reconnection: false,
            port: 3000
        })
        sock.on('connection', (res) => {
            console.log('connection = ')
            console.log(res)
        })
        sock.on('disconnected', (ee) => {
            console.log('disconnected')
        })
        sock.on('rooms', (res) => {
            console.log('rooms = ')
            console.log(res)
        })
        sock.on('create', (res: roomChat) => {
            console.log('create = ')
            console.log(res)
            setList((p): RoomCardType[] => {
                const newRoom: RoomCardType = {
                    nickName: res.users[0].nickname,
                    lastMsg: res.info,
                    lastMsgTime: new Date(),
                };
                return p.length > 0 ? [...p, newRoom] : [newRoom];
            });
        })
        setSocket(sock)
        return () => {
            if (socket)
                sock.close()
        }
    }, [socket])

    useEffect(() => {
        console.log(list)
    }, [list])

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
