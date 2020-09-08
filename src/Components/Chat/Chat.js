import React from 'react';
import './Chat.scss'

const Chat = (props) => {
    return (
        <div className="chat">
            <div className="chat-header">
                <p>Chat with <span>{props.name}</span> </p>
                <span className="open">
                <img src={require("../../Assets/Images/dec/up.png")} alt="chat"/>
                </span>
            </div>
            <div className="chat-icons">
                <div>
                <img src={require("../../Assets/Images/dec/chat.png")} alt="chat"/>
                </div>
                <div>
                <img src={require("../../Assets/Images/dec/smile.png")} alt="emoji"/>
                </div>

            </div>
        </div>
    );
}

export default Chat;