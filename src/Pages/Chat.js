import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getMessages } from "../Data/chatMessages"
import "../Components/Chat.css"
import ChatList from "../Components/ChatList"
import CreateNewChatMessage from "../Components/CreateNewChatMessage"
import ChatInfo from "../Components/ChatInfo"

function Chat() {
    const [chatMessages, setChatMessages] = useState([])
    const [chatLoading, setChatLoading] = useState(true)

    const loadMessages = async () => {
        setChatLoading(true)
        const messagesFromBackend = await getMessages()
        setChatMessages(messagesFromBackend)
        setChatLoading(false)
    }
    useEffect(() => {
        loadMessages()
    }, [])
    let chatMessageList = (
        <div>
            <h3>loading...</h3>
        </div>
    )
    if (chatLoading === false && chatMessages.length > 0) {
        chatMessageList = <ChatList chatMessages={chatMessages} />
    } else if (chatLoading === false && chatMessages.length === 0) {
        chatMessageList = (
            <div>
                <h4>no chat messages found</h4>
            </div>
        )
    }
    return (
        <div container="true">
            <div className="row">
                <div className="col-sm-12 my-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item nav-link">
                                <Link className="link-secondary text-decoration-none" to="/"><small>home</small></Link>
                            </li>
                            <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>C H A T</small></strong></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col border rounded border-light">
                    <div id="chat-username-date" className="border-bottom">
                        {chatMessageList}
                    </div>
                    <div className="row" style={{marginBottom: "100px"}}>
                        <div className="col-6">
                            <h2 className="text-success" style={{ marginTop: "60px", paddingLeft: "20px"}}>send me a message:</h2>
                            <CreateNewChatMessage loadMessages={loadMessages} />
                        </div>
                        <div className="col-6">
                            <ChatInfo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat