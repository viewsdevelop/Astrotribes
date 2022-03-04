import React, {useRef, useState} from 'react';
import {Alert} from 'react-bootstrap';
import './firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import logo from '../images/logo.png'
import './Login.css'
import {useHistory} from 'react-router-dom'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const auth = getAuth();
  const history = useHistory()

  function handleSubmit(e){
    e.preventDefault()
    
    try{
      setError('')
      setLoading(true)
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Invalid email or password.')
    }
    setLoading(false)
    .then(window.location='/dashboard')
  }

  return(
    <form className='login' onSubmit={handleSubmit}>
      {error && <Alert variant='danger'>{error}</Alert>}
      <img src={logo}/>
      <p>Email</p>
      <input type='email' ref={emailRef} required/>
      <p>Password</p>
      <input type='password' ref={passwordRef} required/>
      <button disabled={loading} className='login-button' type='submit'>Log In</button>
    </form>
  )
}
