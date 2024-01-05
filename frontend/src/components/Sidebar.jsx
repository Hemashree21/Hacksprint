import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SchoolIcon from '@mui/icons-material/School';
import { NavLink } from 'react-router-dom';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import './Sidebar.css';

const Sidebar = ({children}) => {
    const menuItem = [
        {
        path: '/home',
        icon: <HomeOutlinedIcon sx={{fontSize: '40px'}}/>
        },
        {
        path: '/calendar',
        icon: <CalendarMonthOutlinedIcon sx={{fontSize: '40px'}}/>
        },
        {
        path: '/chat',
        icon: <ChatOutlinedIcon sx={{fontSize: '40px'}}/>
        },
        {
            path: '/videocall',
            icon: <VideoCameraFrontIcon sx={{fontSize: '40px'}}/>
        },
        {
        path: '/studygroup',
        icon: <Diversity2OutlinedIcon sx={{fontSize: '40px'}}/>
        }
   ]

  return (
    <div className='container'>
        <div className='sidebar'>
            <div className="top-section">
            <div className="bars">
                <SchoolIcon sx={{fontSize: '50px'}}/>
            </div>
        </div>
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className='link' activeclassName='active'>
                    <div className="icon">{item.icon}</div>
                </NavLink>
            ))
        }
        <NavLink to='/account' className='accountlink' activeClassName='active'>
          <div className="icon"><AccountCircleOutlinedIcon sx={{ fontSize: '40px' }} /></div>
        </NavLink>
    </div>
    <main>{children}</main>
    </div>
  )
}

export default Sidebar