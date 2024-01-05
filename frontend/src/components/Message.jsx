import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../auth/ChatContext';

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: "smooth"})
  }, [message])

  console.log(message)
  return (
    <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className="message-info">
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="profile" />
        <span>just now</span>
      </div>
      <div className="message-content">
        {message.text && <p>{message.text}</p>}
        {message.img && <img src={message.img} alt="profile" />}
      </div>
    </div>
  )
}

export default Message