import React from 'react';
import ReactEmoji from 'react-emoji';
import "./Message.css";
const Message = ({message , user}) =>{
  let isSentByCurrentUser = false;

  if (user === message.user){
      isSentByCurrentUser= true;
  }
 return (
    isSentByCurrentUser ? ( 
        <div className = "messageContainer justifyEnd" >
            <div className="messageBox backgroundBlue"> 
            <p className="messageText colorWhite"> {ReactEmoji.emojify(message.text)}  </p>
            </div>
            <p className="sendText pr-10">{user}</p>
        </div>
    )
    :(
      <div className="messageContainer justifyStart"> 
          <p className = "sendText pl-10"> {message.user}</p>
          <span></span>
          <div className="messageBox backgroundDark"> 
            <p className="messageText colorDark">{ReactEmoji.emojify(message.text)} </p>
          </div>
       
      </div>
    )
 );
}

export default Message;