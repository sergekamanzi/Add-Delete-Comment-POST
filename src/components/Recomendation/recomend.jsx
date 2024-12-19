import React from 'react'
import './recomend.css'
import { MdSunny } from "react-icons/md";
import { FaCloudMoon } from "react-icons/fa6";
import { IoPartlySunnySharp } from "react-icons/io5";
const recomend = () => {
  return (
    <div className='main-recomend'>
        <h1>Recomendation</h1>
        <p>choose your favorite recipe on different categories</p>
       <div className='categories'>
           <div className='category'>
           <IoPartlySunnySharp />
           <h6>BreakFast</h6>
           <button>View more</button>
           </div> 
           <div className='category'>
           <MdSunny />
           <h6>Lunch</h6>
           <button>View more</button>
           </div> 
           <div className='category'>
           <FaCloudMoon />
           <h6>Supper</h6>
           <button>View more</button>
           </div>      
       </div>
    </div>
  )
}

export default recomend
