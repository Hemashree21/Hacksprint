import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar-sg'>
      <div className="left-sg">
        <Link to="/studygroup/home">
        <span style={{textDecoration: 'none'}}>Community</span>
        </Link>
        <div className="search-lg">
          <SearchIcon/>
          <input type="text" placeholder='Search...'/>
        </div>
      </div>
      <div className="right-sg">
      <div><b>Homepage</b></div>
        <div><b>Timeline</b></div>
        <PersonIcon/>
        <EmailIcon/>
        <NotificationsIcon/>
        <div className="user-sg">
          <img src={avatar} alt="avatar" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar