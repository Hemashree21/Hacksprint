import React, { useContext } from 'react';
import Layout from '../components/Layout';
import SchoolIcon from '@mui/icons-material/School';
import { AuthContext } from '../auth/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const Account = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <Layout>
      <div className='register-container'>
        <div className="register-wrapper">
            <span className="register-logo"><SchoolIcon sx={{fontSize: '5rem', mr: '1rem', verticalAlign: 'middle'}}/>Study Hub</span>
            <span className="reg-title">View Profile</span>
            <img src={currentUser.photoURL} alt="avatar" className='view-avatar'/>
            <div className='view-details'>Display Name: {currentUser.displayName}</div>
            <div className='view-details'>Email: {currentUser.email}</div>
            <button onClick={() => signOut(auth)} className='view-logout'>Logout</button>
            <Link to="/register">
            <button onClick={() => signOut(auth)} className='view-logout'>Add another account</button>
            </Link>
        </div>
    </div>
    </Layout>
  )
}

export default Account