import React, { useState } from 'react'
import '../pages/Register.css'
import { Link } from 'react-router-dom'

function Register() {
  const [details,setDetails] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    required:true
  })
  const [errorMsg,setErrorMsg] = useState({
    firstName:false,
    lastName:false,
    email:false,
    password:false,
  })
  const changeHandler = (e)=>{
    setDetails((previous)=>{
      return{...previous,[e.target.name]:e.target.value}
    })
  }
  const errorHandler = (e)=>{
    setErrorMsg((previous)=>{
      return{...previous,[e.target.name]:true}
    })
  }
  const SubmitHandler = (e)=>{
    e.preventDefault()
    console.log(details)
  }
  console.log(errorMsg)
  return (
    <div className='FormContainer'>
      <form onSubmit={SubmitHandler}>
        <div className='FormWrapper'>
          <div className='UserName'>
            <div className='FirstName'>
              <label>First Name</label>
              <input
                type='text'
                name='firstName'
                value={details.firstName}
                onChange={changeHandler}
                required={details.required}
              />
            </div>
            <div className='LastName'>
              <label>Last Name</label>
              <input 
                type='text' 
                name='lastName' 
                value={details.lastName} 
                onChange={changeHandler}
                required={details.required}
              />
            </div>
          </div>
          <div className="email">
            <label>Email</label>
            <input
              type='email' 
              name='email' 
              value={details.email} 
              onChange={changeHandler} 
              onBlur={errorHandler}
              required={details.required}
            />
            {
              errorMsg.email === true && <span>It should be a valid Email!</span>
            }
            
          </div>
          <div className='password'>
            <label>Password</label>
            <input 
              type='password' 
              name='password'
              value={details.password}
              onChange={changeHandler} 
              onBlur={errorHandler}
              required={details.required}
              pattern="^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$"
            />
            {
              errorMsg.password === true && <span>Password should be 8-20 characters, Should include 1 uppercase,<br/>1 lowercase, 1 special character and 1 number!</span>
            }
          </div>
          <div className='confirmPassword'>
            <label>Confirm Password</label>
            <input
              type='password' 
              name='confirmPassword' 
              value={details.confirmPassword} 
              onChange={changeHandler} 
              onBlur={errorHandler}
              required={details.required}
              pattern={details.password}
            />
            {
              details.confirmPassword!=="" && details.confirmPassword!== details.password &&  
              <span>Passwords must be same.</span>
            }
          </div>
          <button>Register</button>
          <p>Have an account?<Link to='/login'> Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register