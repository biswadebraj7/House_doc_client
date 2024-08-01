import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/images/log.png";
import { ContextProvider } from '../Provider/ProviderContext';
import Swal from 'sweetalert2';


const Navabr = () => {
  const {user,LogOut}=useContext(ContextProvider)
  const navigate=useNavigate()
  const logouthandle=()=>{
    LogOut()
    .then((result)=>{
      const users=result.users
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Log out successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/")

    })

  }
    const links=<>
    <li><Link to="/" className=" text-lg text-white  font-semibold" >Home</Link></li>
    <li><Link to="/about" className=" text-lg text-white  font-semibold" >About</Link></li>
    <li><Link to={''} className=" text-lg text-white  font-semibold" >Appointment</Link></li>
    <li><Link to={'/dashboard'} className=" text-lg text-white  font-semibold" >Dashboard</Link></li>

    {
      user ? <>
             <li><Link onClick={logouthandle} className=" text-lg text-white  hover:text-white font-semibold" >logout</Link></li>

      
      </>:
      <>
       <li><Link to={'/reg'} className=" text-lg text-white  hover:text-white font-semibold" >Register</Link></li>
    <li><Link to={'/login'} className=" text-lg text-white  hover:text-white font-semibold" >Login</Link></li>
   
      </>
    }
  
    
    </>
  return (
    <div className=' max-w-screen-xl mx-auto bg-[#07332F]'>
       <div className="navbar  py-12">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="bg-white mx-3 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-10 z-[1] p-2 px-7 shadow bg-[#07332F] rounded-box w-52">
     {links}
      </ul>
    </div>
    <Link to={"/"} className="  font-bold text-4xl flex items-center gap-2 text-[#F7A582]">  <img src={logo} alt="" /> Doc <span className=' text-4xl font-bold text-[#FFFFFF]'>House</span> </Link>

  </div>
  {/* <div className="navbar-center hidden lg:flex">
   
  </div> */}
  <div className="navbar-end hidden lg:flex">
  <ul className="menu menu-horizontal">
      {links}
     
    </ul>
    
  </div>
</div>
   
    </div>
  )
}

export default Navabr
