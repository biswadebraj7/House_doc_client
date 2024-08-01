import React from 'react'
import {Link} from "react-router-dom"
const Dashboard = () => {
  return (
    <div className=' max-w-[1140px] mx-auto'>
     
      <div className=' flex justify-between items-center   '>
        <div className=' w-96 items-center'>
        <div>
        <h1 className=' py-4 text-xl font-semibold text-center'>Dashboard</h1>
      </div>
      <div className=' card bg-base-300'>
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
      
       
          <div className="divider">OR</div>
       

        </div>
        {/* datashow */}
        <div>
          <h1>dhashboard</h1>
        </div>
      

      </div>
      
    </div>
  )
}

export default Dashboard
