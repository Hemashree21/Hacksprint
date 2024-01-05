import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Chat from './pages/Chat';
import StudyGroup from './pages/StudyGroup';
import Login from './pages/Login';
import Register from './pages/Register';
import VideoCall from './pages/VideoCall';
import { AuthContext } from './auth/AuthContext';
import Room from './components/Room/index';
import LandingPage from './pages/LandingPage';
import Profile from './components/Studygroup/Profile';
import Loginsg from './components/Studygroup/Loginsg';
import Home1 from './components/Studygroup/Home1';

const App = () => {

  const {currentUser} = useContext(AuthContext)
  
  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to = "/login"/>
    }

    return children;
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/chat" element={<ProtectedRoute><Chat/></ProtectedRoute>} />
              <Route path="/studygroup" element={<StudyGroup />} />
              <Route path="/register" element={<Register />} />
              <Route path="/videocall" element={<VideoCall />} />
              <Route path="/room/:roomId" element={<Room />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/studygroup/loginsg" element={<Loginsg/>}/>
              <Route path="/studygroup/home" element={<Home1/>}/>
              <Route path="/studygroup/profile/:username" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
