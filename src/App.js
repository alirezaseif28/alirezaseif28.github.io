import React from "react";
import email from "./images/email.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="head-style"></div>
      <div className="name-style">
        <h1 className="name-text-style">alireza seif</h1>

        <span className="tecn-text-style">software developer</span>
        <div className="social-style">
          <a
            href="https://www.linkedin.com/in/alireza-seif-6a3246158/"
            target="blank"
          >
            Linkedin
          </a>
          <span> | </span>
          <a
            href="https://stackoverflow.com/users/6774162/a-r-seif?tab=profile"
            target="blank"
          >
            StackOverflow
          </a>
        </div>
      </div>
       <div className="footer-style">
        
          <img src={email} className="logo email-logo" alt="email" />
          <span>&nbsp;&nbsp;&nbsp;alirezaseif28@gmail.com</span>
        </div>
        
     
    </>
  );
}

export default App;
