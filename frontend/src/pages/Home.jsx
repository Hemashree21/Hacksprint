import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { AuthContext } from '../auth/AuthContext';
import chat from '../assets/chat.png';
import posts from '../assets/social-media-posts.png';
import reminder from '../assets/reminder.png'

const Home = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <Layout>
      <div className="home-bg">
      <div className='home-welcome'>
        <img src={currentUser.photoURL} alt=""/>
        Welcome {currentUser.displayName}!
      </div>
      <div className="home-title">Do it all with Study Hub!</div>
      <div className="home-learn">
        <div className="home-blocks">
          <div className="icon-block">
            <img src={chat} alt="chat-icon"/>
            <h2>Chat with Friends</h2>
            <p>Connect personally with your classmates and friends through seamless one-on-one chat, fostering meaningful conversations and providing dedicated support for individualized learning journeys.</p>
          </div>
          <div className="icon-block">
          <img src={posts} alt="posts-icon"/>
            <h2>Video Calls & Posts</h2>
            <p>Empower collaborative learning with multi-member video calls, enabling interactive discussions and community engagement through shared posts for a vibrant and inclusive educational experience.</p>
            </div>
          <div className="icon-block">
          <img src={reminder} alt="reminder-icon"/>
            <h2>Schedule Reminders with Calendar</h2>
            <p>Stay organized and on track with our integrated calendar feature. Easily schedule and manage tasks, ensuring you never miss an important assignment in your academic journey.</p>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default Home