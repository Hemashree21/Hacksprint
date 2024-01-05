import React from 'react';
import '../components/Sidebar.css'
import {Link} from 'react-router-dom'
import SchoolIcon from '@mui/icons-material/School';

const LandingPage = () => {
  return (
    <>
    <div className="home-container">
      <h1 className='welcome'><SchoolIcon sx={{fontSize: '8rem', verticalAlign: 'middle', mr: '2rem'}}/>Welcome to StudyHub</h1>
      <p className='study'>
        Studying is a collaborative journey. Connect with study groups, enhance teamwork on assignments,
        and conquer challenges collectively to elevate your academic performance.
      </p>
      <Link to='/register'>
        <button className='cta-button'><span>Get Started</span></button>
      </Link>
    </div>
    </>
  );
  
};


export default LandingPage;