import React, { useContext } from 'react';
import '../pages/Chat.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../auth/AuthContext';

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className="logo">Study Hub</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt="avatar" className='avatar'/>
        <span style={{marginTop: '1rem'}}>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)} className='logout' style={{height: '1.8rem', marginTop: '0.8rem', width: '4rem'}}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar;