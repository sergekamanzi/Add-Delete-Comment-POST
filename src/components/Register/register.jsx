import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

const register = () => {
  return (
    <div className='main-register'>
        <div className='logo'>
            <Link to='/'><h2>Blog <span>App.</span></h2></Link>
        </div>
        <div className='register-content'>
            <h1>Create an Account Here</h1>
            <label>FullNames</label>
            <input type="text" placeholder='Name'/>
            <label>Email</label>
            <input type="email" placeholder='Email'/>
            <label>Password</label>
            <input type="password" placeholder='Password'/>
            <label>Confirm Password</label>
            <input type="password" placeholder='Confirm Password'/>
            <button>Create an Account</button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
    </div>
  )
}

export default register
