import React, { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;

try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/home")
}catch(err) {
      console.error(err);
      setErr(true);
}  
    }

  return (
    <div className='register-container'>
        <div className="register-wrapper">
            <span className="register-logo"><SchoolIcon sx={{fontSize: '5rem', mr: '1rem', verticalAlign: 'middle'}}/>Study Hub</span>
            <span className="reg-title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button style={{marginTop: '1.5rem'}}>Sign In</button>
            </form>
            {err && <span style={{textAlign: 'center'}}>Incorrect Password</span>}
            <p>Don't have an account?</p>
            <p id='login'><Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login