import React, { useState } from 'react'
import '../pages/Register.css'
import { Link } from 'react-router-dom'

function Register() {
  const [person,setPerson] = useState([])
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
    confirmPassword:false
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
    setPerson([...person,details])
  }
  return (
    <div className='FormContainer'>
      <form onSubmit={SubmitHandler} >
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
                onBlur={errorHandler}
                fnameerror={errorMsg.firstName.toString()}
              />
              <span>Enter your name</span>
            </div>
            <div className='LastName'>
              <label>Last Name</label>
              <input 
                type='text' 
                name='lastName' 
                value={details.lastName} 
                onChange={changeHandler}
                required={details.required}
                onBlur={errorHandler}
                lnameerror={errorMsg.lastName.toString()}
              />
              <span>Enter your family name</span>
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
              emailerror={errorMsg.email.toString()}
            />
            <span>It should be a valid Email</span>
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
              passworderror={errorMsg.password.toString()}
            />
            <span>Password should be 8-20 characters, should include 1 uppercase, 1 lowercase, 1 special character and 1 number</span>
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
            {details.confirmPassword !=="" && details.confirmPassword !== details.password && <span className='passCheck'>Password is not same</span>}
          </div>
          <button>Register</button>
          <p>Have an account?<Link to='/login'> Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register