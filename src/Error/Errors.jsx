import React from 'react'
import errphoto from "../assets/images/404.png"
import { Link } from 'react-router-dom'

const Errors = () => {
  return (
    <div className=' max-w-screen-[1140px] max-auto items-center py-20'>
        <h1 className=' text-4xl text-center'>Sorry,</h1>
        <p className=' text-center text-xl py-3'>This page is not found.</p>
    <div className=' mx-auto'>
    <img src={errphoto} alt="" className=' mx-auto' />

    </div>
<div className=' mx-auto flex items-center'>
<Link to={'/'} className=' text-center mx-auto btn bg-[#F7A582] text-lx text-white'> Back to Home</Link>


</div>
        
      
    </div>
  )
}

export default Errors
