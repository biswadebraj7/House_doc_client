import React from 'react'
import {Link, Outlet} from "react-router-dom"
import Allitem from '../Admin/ALlList/Allitem'
import Admin from '../Admin/Admin/Admin'
import Navabr from '../Navbar/Navabr'
const Dashboard = () => {
  return (
    <div className=' max-w-[1140px] mx-auto'>
      <Navabr></Navabr>
     
      <div className=' flex justify-between   mx-auto gap-4   '>
        <div className=' w-1/4 items-center'>
        <div>
        <h1 className=' py-4 text-xl font-semibold text-center'>Dashboard</h1>
      </div>
      <div className=' card bg-base-300'>
        <Admin></Admin>
      
      </div>
      
       
          <div className="divider">OR</div>
       

        </div>
        {/* datashow */}
      
        <div className=' w-3/4 mt-16'>
        <Outlet></Outlet>
          <Allitem></Allitem>
          <h1>dhashboard</h1>
        </div>
      

      </div>
      
    </div>
  )
}

export default Dashboard
