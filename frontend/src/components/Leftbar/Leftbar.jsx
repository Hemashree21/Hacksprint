import React from 'react';
import avatar from '../../assets/avatar.png';
import './Leftbar.css';
import friends from '../../assets/friends.png';
import groups from '../../assets/groups.png';
import messages from '../../assets/messages.png';
import gallery from '../../assets/gallery.png';
import settings from '../../assets/settings.png';
import events from '../../assets/events.png';
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';

const Leftbar = () => {
  return (
    <div className="leftbar-sg">
      <div className="containerl-lg">
        <div className="menul-lg">
          <div className="userl-lg">
            <img src={avatar} alt="avatar" />
            <span>John Doe</span>
          </div>
          <div className="iteml-lg">
            <img src={friends} alt="friends" />
            <span>Friends</span>
          </div>
          <div className="iteml-lg">
            <img src={groups} alt="groups" />
            <span>Groups</span>
          </div>
          <div className="iteml-lg">
            <img src={messages} alt="messages" />
            <span>Messages</span>
          </div>
          <div className="iteml-lg">
            <img src={gallery} alt="gallery" />
            <span>Gallery</span>
          </div>
          <div className="iteml-lg">
            <img src={events} alt="events" />
            <span>Events</span>
          </div>
          <div className="iteml-lg">
            <img src={settings} alt="settings" />
            <span>Settings</span>
          </div>
        </div>
      </div>
      <div className="users-sb">
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Leftbar