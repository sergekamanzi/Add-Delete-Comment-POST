import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

const hero = () => {
  return (
    <div className='main-hero' id='hero'>
       <div className='hero-content'>
           <h1>Food Blog: Share, Discover, Connect</h1>
           <p>Welcome to our culinary community! 
            Discover, share, and connect with passionate
            food lovers. Explore the latest recipes, add
            your own creations, and engage in lively 
            discussions.
           </p>
          <Link to='/register'><button>Get Started</button></Link>
       </div>
    </div>
  )
}

export default hero
