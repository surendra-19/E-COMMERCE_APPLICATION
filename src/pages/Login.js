
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
  const [loginDetails,setLoginDetails] = useState({
    email:"",
    password:""
  })
  const handleChange = (e)=>{
    setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div className='LoginContainer'>
        <form onSubmit={handleSubmit} >
           <div className='LoginWrapper'>
                <div className="LoginEmail">
                  <label>Email</label>
                  <input type="email" value={loginDetails.email} name="email" onChange={handleChange} />
                </div>
                <div className="LoginPassword">
                  <label>Password</label>
                  <input type="password" value={loginDetails.password} name="password" onChange={handleChange}  />
                </div>
            <button>Login</button>
            <p>Don't have an accout? <Link to='/register'> Sign up</Link></p>
           </div>
        </form>
    </div>
  )
}

export default Login