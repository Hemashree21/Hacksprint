import React from 'react';
import '../pages/Chat.css';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const ChatSidebar = () => {
  return (
    <div className="chatsidebar">
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default ChatSidebar