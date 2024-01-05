import { React, useState, useEffect, useContext } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../auth/ChatContext';

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: 'CHANGE_USER', payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
        <div className="userchat" key={chat[0]} onClick={() => handleSelect(chat[1]?.userInfo)}>
          {chat[1]?.userInfo?.photoURL && (
  <img
    src={chat[1].userInfo.photoURL}
    alt=''
    className='profile1'
  />
)}

          <div className="user-chat-info">
            <span>{chat[1].userInfo?.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
          {/* <p>{chat[1]?.date ? chat[1].date.toDate().toLocaleDateString() : null}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Chats;