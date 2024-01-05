import React from 'react';
import './Chat.css';
import ChatSidebar from '../components/ChatSidebar';
import Chatting from '../components/Chatting';
import Layout from '../components/Layout';

const Chat = () => {
  return (
    <Layout>
    <div className="chat">
      <div className="container1">
        <ChatSidebar/>
        <Chatting/>
      </div>
    </div>
    </Layout>
  )
}

export default Chat