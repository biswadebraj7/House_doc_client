import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
       <ul className=' min-h-screen w-full'> 
              <li className=' pt-10 mx-auto items-center text-center'>
                 <Link className=' text-xl font-bold text-center mx-auto '>All user</Link>
              </li>
              <li  className=' pt-10 text-center'>
                 <Link className=' text-xl font-bold text-center '>Add a Doctor</Link>
              </li>
              <li  className=' pt-10 text-center'>
                 <Link className=' text-xl font-bold text-center '>Manage Doctors</Link>
              </li>
              <li  className=' pt-10 text-center'>
                 <Link to={'/'} className=' text-xl font-bold text-center '>Home</Link>
              </li>
            </ul>
      
    </div>
  )
}

export default Admin
