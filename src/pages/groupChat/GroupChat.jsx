import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarMenu from "../components/SidebarMenu";
import { FaX } from "react-icons/fa6";
import groupChatBg from "../../assets/groupChat.jpg";

function GroupChat() {
    // This is all message
    const [userMsg, setUserMsg] = useState([
        {
            user: "Miraj",
            dp: <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />,
            message: "This is a Messege 1"
        },
        {
            user: "Miraj",
            dp: <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />,
            message: "This is a Messege  2"
        },
        {
            user: "Miraj",
            dp: <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />,
            message: "This is a Messege 3"
        },
        {
            user: "Miraj",
            dp: <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />,
            message: "This is a Messege 4"
        },
        {
            user: "Miraj",
            dp: <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />,
            message: "This is a Messege 5"
        }
    ]);
    const [isThreedotOptionOpen, setIsThreedotOptionOpen] = useState(null);
    const [message, setMessage] = useState("");
    const [msgStatus, setMsgStatus] = useState(false);
    const [showStatusMsg, setShowStatusMsg] = useState(false);
    //Repling states
    const [replyName, setReplyName] = useState("");
    const [replyMsg, setReplyMsg] = useState("");
    const [replyMsgShow, setReplyMsgShow] = useState(false);


    // This function is for message option/three dot options
    function threeDot(id) {
        setIsThreedotOptionOpen((prev) => prev === id ? null : id);
    }

    // Copy message feature
    async function copyMsgHandler(msg) {
        let msgPopUp;
        await navigator.clipboard.writeText(msg)
            .then(() => {
                setMsgStatus(true);
                setShowStatusMsg(true);
                msgPopUp = setTimeout(() => setShowStatusMsg(false), 2500);
            }).catch(() => {
                setMsgStatus(false);
                setShowStatusMsg(true);
                msgPopUp = setTimeout(() => setShowStatusMsg(false), 2500);
            })

        setIsThreedotOptionOpen(null);
        return () => clearInterval(msgPopUp);
    }

    // Reply message feature
    function replyMsgHandler(name, msg) {
        setReplyName(name);
        setReplyMsg(msg);
        setIsThreedotOptionOpen(false);
        setReplyMsgShow(true);
    }

    // Handle submit 
    function submitHandler() {
        if(message.trim() === "") return;
        let msg = {
            user: "Miraj",
            dp: <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />,
            message:message
        }
        setUserMsg(prev => [...prev, msg]);
        setMessage("");
    }

    return (
        <section style={{ background: `linear-gradient(rgb(0 0 0 / 0%)), url(${groupChatBg}) no-repeat`, backgroundSize: "cover" }} className="relative w-full h-screen">
            <SidebarMenu />
            <div className="w-[90%] h-screen m-auto">
                <div className="h-[90vh]">
                    <div className="w-[90%] h-full m-auto pt-3 overflow-y-scroll flex flex-col gap-3">
                        {
                            userMsg.map((elem, id) => {
                                return (
                                    <div key={id} className="relative w-fit">
                                        <div className="flex items-center gap-2 bg-white w-fit h-fit py-1 pl-1.5 pr-4 rounded-full">
                                            {elem.dp}
                                            <div className="leading-5 text-sm">
                                                <div className="flex items-center">
                                                    <b>{elem.user}</b>
                                                    <BsThreeDots onClick={() => { threeDot(id) }} size={20} className="ml-2.5 cursor-pointer" />
                                                </div>
                                                <p>{elem.message}</p>
                                            </div>
                                        </div>
                                        <ul className="absolute bg-white border -right-5 top-4 z-10" style={{ display: `${isThreedotOptionOpen === id ? "block" : "none"}` }}>
                                            <li className="font-semibold text-sm border-b px-4 hover:bg-gray-200 cursor-pointer" onClick={() => replyMsgHandler(elem.user, elem.message)}>Reply</li>
                                            <li className="font-semibold text-sm border-b px-4 hover:bg-gray-200 cursor-pointer" onClick={() => copyMsgHandler(elem.message)}>Copy</li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* This is the message status pop-up */}
                    <div style={{ transition: "0.8s", right: `${showStatusMsg ? "1%" : "-100%"}`, backgroundColor: `${msgStatus ? "#096809ad" : "#890202ba"}` }} className="absolute text-white flex items-center top-3 gap-5 p-2.5 rounded-lg">
                        <p className="font-bold">{msgStatus ? "Message copied successfuly!" : "Failed to copy Message!"}</p>
                    </div>
                </div>

                <div className="relative mt-[1.5vh] h-[8vh]">
                    {/* Reply message bar show */}
                    <div style={{ transition: "0.3s", bottom: `${replyMsgShow ? "100%" : "65%"}`, opacity: `${replyMsgShow ? "1" : "0"}` }} className="absolute min-w-1/2 max-w-[90%] left-5 px-3 pb-3 pt-1 border border-white text-white rounded-t-2xl leading-3">
                        <FaX onClick={() => setReplyMsgShow(false)} className="absolute right-2 top-1.5 cursor-pointer" size={12} />
                        <span className="text-sm text-orange-400">{replyMsgShow ? replyName : ""}</span>
                        <p className="text-[12px] ml-2">{replyMsgShow ? replyMsg : ""}</p>
                    </div>
                    {/* Input bar with submit button */}
                    <div className="flex h-full relative">
                        <input type="text" onKeyUp={(e) => e.key === "Enter" ? submitHandler() : ""} placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)} value={message} className="border-2 border-white text-white w-full rounded-l-3xl pl-3 p-1 text-md outline-0 font-semibold" />
                        <button onClick={() => submitHandler()} className="bg-white text-md font-bold rounded-r-full pl-2 pr-4 cursor-pointer">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GroupChat;