import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const register = () => {
  return (
    <div className='main-register'>
        <div className='logo'>
            <Link to='/'><h2>Blog <span>App.</span></h2></Link>
        </div>
        <div className='register-content'>
            <h1>Log-in Here</h1>
            <label>Email</label>
            <input type="email" placeholder='Email'/>
            <label>Password</label>
            <input type="password" placeholder='Password'/>
            <Link to="/post"><button>Login</button></Link> 
            <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </div>
    </div>
  )
}

export default register
