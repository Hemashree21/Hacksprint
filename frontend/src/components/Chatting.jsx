import React, { useContext } from 'react';
import '../pages/Chat.css';
import vc from '../assets/video-call.png';
import addfrnd from '../assets/add-friend.png';
import more from '../assets/more.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../auth/ChatContext';

const Chatting = () => {

  const {data} = useContext(ChatContext)
  return (
    <div className="chatting">
      <div className="chat-info">
        <span>{data.user?.displayName}</span>
        <div className="chat-icons">
          <img src={vc} alt='video-call'/>
          <img src={addfrnd} alt='add-friend'/>
          <img src={more} alt='more-icon'/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chatting;