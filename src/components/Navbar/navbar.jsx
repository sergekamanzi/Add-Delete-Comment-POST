import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='main-navbar'>
        <div className='logo'>
           <h2>BLOG <span>App.</span></h2>
        </div>
        <div className='post'>
            <Link to="/login"><button>Add a Post</button></Link>
        </div>
    </div>
  )
}

export default navbar
