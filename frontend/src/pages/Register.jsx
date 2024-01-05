import React, { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import addavatar from '../assets/add-avatar-register.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase'; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        
        const storageRef = ref(storage, displayName);
        
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          (error) => {
            setErr(true);
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL
              });
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });

              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate('/');
    });
    }
       );

}

   catch(err) {
      console.error(err);
      setErr(true);
}   }


  return (
    <div className='register-container'>
        <div className="register-wrapper">
            <span className="register-logo"><SchoolIcon sx={{fontSize: '5rem', mr: '1rem', verticalAlign: 'middle'}}/>Study Hub</span>
            <span className="reg-title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display: 'none'}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={addavatar} alt="add-avatar-icon" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span style={{textAlign: 'center'}}>Email is already Registered</span>}
            </form>
            <p>Already have an account?</p>
            <p id='login'><Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register;