import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/footer.png"

const Footer = () => {
  return (
    <div className='bg-base-200'>
<footer className="footer py-12  text-base-content max-w-[1140px] mx-auto gap-4">
  <aside>
 <div className=' flex items-center gap-3'>
    <img src={logo} alt="" />
    <h1 className=' font-bold text-4xl flex items-center gap-3 text-[#F7A582]'>Doc <span className='font-bold text-4xl text-[#07332F]'>House</span></h1>
 </div>
    <p className=' font-normal text-base py-4 pr-16'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
    <div>
    <Link to={''} className=' btn border-2 border-[#F7A582] text-[#F7A582] font-bold text-xl mt-4 bg-white'>Appointment</Link>
  </div>
  </aside> 
  
  <nav className=' px-4'>
    <h6 className="footer-title  font-bold text-2xl">Quick Links</h6> 
    <a className="link link-hover font-semibold text-lg">About Us</a>
    <a className="link link-hover font-semibold text-lg">Service</a>
    <a className="link link-hover font-semibold text-lg">Doctors</a>
    <a className="link link-hover font-semibold text-lg">Departments</a>
    <a className="link link-hover font-semibold text-lg">Online Payment</a>
    <a className="link link-hover font-semibold text-lg">Contact Us</a>
    <a className="link link-hover font-semibold text-lg">My Account</a>
    
  </nav> 
  <nav className='px-4'>
    <h6 className="footer-title  font-bold text-2xl">Doc House Services</h6> 
    <a className="link link-hover font-semibold text-lg">Pediatric Clinic</a>
    <a className="link link-hover font-semibold text-lg">Diagnosis Clinic</a>
    <a className="link link-hover font-semibold text-lg">Cardiac Clinic</a>
    <a className="link link-hover font-semibold text-lg">Laboratory Analysis</a>
    <a className="link link-hover font-semibold text-lg">Gynecological Clinic</a>
    <a className="link link-hover font-semibold text-lg">Personal Counseling</a>
    <a className="link link-hover font-semibold text-lg">Dental Clinic</a>
    
  </nav>
  <nav>
    <h6 className="footer-title  font-bold text-2xl">Working Hours</h6> 
    <a className="link link-hover font-semibold text-lg">Monday - 10 am to 7 pm</a>
    <a className="link link-hover font-semibold text-lg">Tuesday - 10 am to 7 pm</a>
    <a className="link link-hover font-semibold text-lg">Wednesday - 10 am to 7 pm</a>
    <a className="link link-hover font-semibold text-lg">Thursday - 10 am to 7 pm</a>
    <a className="link link-hover font-semibold text-lg">Friday - 10 am to 7 pm</a>
    <a className="link link-hover font-semibold text-lg">Saturday - 10 am to 7 pm</a>
    <a className="link link-hover font-semibold text-lg">Sunday - 10 am to 7 pm</a>
    
  </nav>
  
</footer>

<hr className='pt-3' />
<footer className="footer footer-center py-12 g-base-300 text-base-content">
  <aside>
    <p className=' font-normal text-lg'>Copyright © 2022 - All right reserved by Doc House Ltd</p>
  </aside>
</footer>
      
    </div>
  )
}

export default Footer
