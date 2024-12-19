import React from 'react'
import './post.css'
import { FaFileUpload } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom'
const post = () => {
  return (
    <div className='main-post'>
         <Link to='/'><h2>Blog <span>App.</span></h2></Link>
        <h3>Posts</h3>
        <div className='post-content'>
            <div className='card'> 
               <p><FaFileUpload /> <br/>Upload a Post</p>
               <h5><IoMdAdd /> add title</h5>
               <p><IoMdAdd /> add paragraph</p>
            </div>
        </div>
    </div>
  )
}

export default post
