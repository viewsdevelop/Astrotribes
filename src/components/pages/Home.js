import React, {useEffect, useState} from "react";
import {db} from "../firebase";
import {collection, doc, getDocs} from "firebase/firestore";
import Navbar from "../Navbar.js";
import Login from "../Login.js";
import Signup from "../Signup.js";
import "./Home.css";

export default function Home() {
  const [heroSection, setHeroSection]=useState(true)
  const [navbar, setNavbar]=useState(true)
  const [login, setLogin]=useState(false)
  const [signup, setSignup]=useState(false)

  function openLogin(){
    setHeroSection(false)
    setLogin(true)
  }

  function openSignup(){
    setHeroSection(false)
    setSignup(true)
  }

  function close(){
    setHeroSection(true)
    setNavbar(true)
    setLogin(false)
    setSignup(false)
  }

  return (
    <>
      {navbar && <Navbar/>}
      {login && <Login/>}
      {signup && <Signup/>}
        <video src="/videos/video-1.mp4" autoPlay loop muted onClick={close}/>
        {heroSection && <div className="hero-section">
          <h1>AstroTribes®</h1>
          <p>Buid your astrological community today.</p>
          <div>
            <button className="open-login" onClick={openLogin}>
              LOG IN
            </button>
            <button className="open-signup" onClick={openSignup}>
              SIGN UP
            </button>
          </div>
        </div>}
    </>
  );
}
