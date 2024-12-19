import React from 'react'
import './contact.css'
const contact = () => {
  return (
    <div className='main-contact'>
        <div className='contact-content'>
             <a href="#hero"><h2>Blog <span>App.</span></h2></a> 
             <p>we offer you the best recipes
             and cooking tips from our community
             of passionate food lovers.
             </p>
        </div>
        <div className='contact-content'>
             <h3>Discover</h3>
             <p>recipes</p>
             <p>tips</p>
             <p>community</p>
             <p>supportive meal</p>
        </div>
        <div className='contact-content'>
             <h3>Contact</h3>
             <p>Kigali, Rwanda</p>
             <p>blog@gmail.com</p>
             <p>+250 789 123 456</p>
             <p>kstreet, 128k</p>
        </div>
    </div>
  )
}

export default contact
