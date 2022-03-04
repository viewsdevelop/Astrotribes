import React, {useRef, useState} from 'react';
import {Alert} from 'react-bootstrap';
import './firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import logo from '../images/logo.png';
import './Signup.css';
import {useHistory} from 'react-router-dom';

export default function Signup() {
  const [form1, setForm1] = useState(true)
  const [form2, setForm2] = useState(false)
  const firstNameRef=useRef()
  const lastNameRef=useRef()
  const dateRef=useRef()
  const timeRef=useRef()
  const placeRef=useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const auth = getAuth()
  const history = useHistory()

  function form2Submit(e){
    e.preventDefault()

    if (passwordRef.current.value !== confirmRef.current.value){
      return setError('Passwords do not match.')
    }
    
    try{
      setError('')
      setLoading(true)
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to create an account.')
    }
    setLoading(false)
  }

  return(
    <div className='signup'>
      {form1 && <form className='form-1'>
        <img src={logo}/>
        <p>First Name</p>
        <input ref={firstNameRef} required/>
        <p>Last Name</p>
        <input ref={lastNameRef} required/>
        <p>Birthplace</p>
        <input className='citySearch' ref={placeRef}/>
        <p>Birthdate</p>
        <div className='birthdate'>
          <input type='date' ref={dateRef}></input>
          <input type='time' ref={timeRef}></input>
        </div>
        <button disabled={loading} type='submit'>Continue</button>
      </form>}
      {form2 && <form className='form-2'  onSubmit={form2Submit}>
        <img src={logo}/>
        {error && <Alert variant='danger'>{error}</Alert>}
        <p>Email</p>
        <input type='email' ref={emailRef} required/>
        <p>Password</p>
        <input type='password' ref={passwordRef} pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
        title='Password must be at least 8 characters, including lowercase/uppercase letters, and numbers.' 
        required/>
        <p>Confirm Password</p>
        <input type='password' ref={confirmRef} pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
        title='Password must be at least 8 characters, including lowercase/uppercase letters, and numbers.' 
        required/>
        <button disabled={loading} type='submit'>Sign Up</button>
      </form>}
    </div>
  )
}
