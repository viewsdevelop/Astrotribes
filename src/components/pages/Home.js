import React, {useState} from "react";
import Navbar from "../Navbar.js";
import Login from "../Login.js";
import Signup from "../Signup.js";
import "./Home.css";
import background from "../../images/background.jpeg"
import logo from '../../images/logo.svg'

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
    <div>
      <img className="background" src={background} onClick={close}/>
      {navbar && <Navbar/>}
      {login && <Login/>}
      {signup && <Signup/>}
        {heroSection && <div className="hero-section">
          <img src={logo}/>
          <p>Discover your astrological signs and build your community.</p>
          <div>
            <button className="open-login" onClick={openLogin}>
              LOG IN
            </button>
            <button className="open-signup" onClick={openSignup}>
              SIGN UP
            </button>
          </div>
        </div>}
    </div>
  );
}
