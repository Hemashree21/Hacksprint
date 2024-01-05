import React from 'react';
import './Home1.css';
import Leftbar from '../Leftbar/Leftbar';
import Rightbar from '../Rightbar/Rightbar';
import Homesg from '../Studygroup/Homesg';
import Navbar from '../Navbar-sg/Navbar';
import Layout from '../Layout';

export default function Home() {
  return (
    <>
    <Layout>
      <Navbar />
      <div className="homeContainer">
        <Leftbar />
        <Homesg/>
        <Rightbar/>
      </div>
      </Layout>
    </>
  );
}