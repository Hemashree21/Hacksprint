import React from 'react';
import Layout from '../Layout';
import "./Loginsg.css";

export default function Login() {
  return (
    <Layout>
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Study Hub Community</h3>
          <span className="loginDesc">
            Connect with friends on Study Hub.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}