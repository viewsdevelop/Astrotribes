import React, {useRef, useState} from "react";
import {useHistory} from "react-router-dom";
import {db} from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import logo from "../images/logo.png";
import "./Signup.css";

export default function Signup() {
  const [form1, setForm1] = useState(true)
  const [form2, setForm2] = useState(false)
  const firstNameRef=useRef()
  const lastNameRef=useRef()
  const dateRef=useRef()
  const timeRef=useRef()
  const cityRef=useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState("")
  const auth = getAuth()
  const history = useHistory()

  function form1Submit(e){
    e.preventDefault()

    setForm1(false)
    setForm2(true)
  }

  function form2Submit(e){
    e.preventDefault()

    if (passwordRef.current.value !== confirmRef.current.value){
      return setError("Passwords do not match.")
    }
    
    try{
      setError("")
      setLoading(true)
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value) //create new user
      .then(signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)) //sign in new user
      .then(setDoc(doc(db, "users", auth.currentUser.uid),{
        name:`${firstNameRef.current.value} ${lastNameRef.current.value}`,
        email: emailRef.current.value,
        birthdate: dateRef.current.value
      })) //push new user data to database
      window.location='./user' //redirect to new user's page
      history.push("/")
    } catch {
      setError("Failed to create an account.")
    }
    setLoading(false)
  }

  return(
    <div className="signup">
      {form1 && <form className="form-1" onSubmit={form1Submit}>
        <img src={logo}/>
        <p>First Name</p>
        <input ref={firstNameRef} required/>
        <p>Last Name</p>
        <input ref={lastNameRef} required/>
        <p>Birthplace</p>
        <input className="citySearch" ref={cityRef}/>
        <p>Birthdate</p>
        <div className="birthdate">
          <input type="date" min="1900-01-01" max="2008-12-31" ref={dateRef}></input>
          <input type="time" ref={timeRef}></input>
        </div>
        <button disabled={loading} type="submit">Continue</button>
      </form>}
      {form2 && <form className="form-2"  onSubmit={form2Submit}>
        <img src={logo}/>
        <div className='error'>{error}</div>
        <p>Email</p>
        <input type="email" ref={emailRef} required/>
        <p>Password</p>
        <input type="password" ref={passwordRef} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Password must be at least 8 characters, including lowercase/uppercase letters, and numbers." 
        required/>
        <p>Confirm Password</p>
        <input type="password" ref={confirmRef} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Password must be at least 8 characters, including lowercase/uppercase letters, and numbers." 
        required/>
        <button disabled={loading} type="submit">Sign Up</button>
      </form>}
    </div>
  )
}

