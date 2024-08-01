import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
const Contact = () => {

  return (
    <div className=' max-w-[1140px] mx-auto  py-12'>
<div className="hero bg-[#07332F] p-6">
  <div className="hero-content flex-col w-full lg:flex-row ">
    <div className="text-center lg:text-left md:w-2/6">
      <h1 className="text-4xl font-bold  text-white ">Contact With Us</h1>
      <p className="py-2 text-base font-normal pt-4  text-white">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.
    
      </p>
      <p className=' font-normal text-base text-left flex gap-3 items-center pt-4 text-white'> <SlLocationPin  className=" text-2xl" />Dhanmondi, Dhaka, Bangladesh</p>
    <p className=' font-normal text-base text-left flex gap-3 items-center pt-4 text-white'> <CiCalendar className=' text-2xl' /> Available On Mon, 22 December</p>

    </div>

    <div className="card shrink-0 w-full max-w-lg shadow-2xl ">
      <form className="card-body">
        <div className='grid md:grid-cols-2 grid-cols-1 mx-auto gap-3'>
        <div className="form-control">
         
          <input type="text" placeholder="Name" className="input input-bordered text-white  w-full border-white border-2 bg-[#07332F]" required />
        </div>
        <div className="form-control">
          
          <input type="email" placeholder="Email" className="input input-bordered text-white  border-white border-2 bg-[#07332F]" required />        </div>
        <div className="form-control">
        
          <input type="text" placeholder="Mobile Number" className="input input-bordered text-white  border-white border-2 bg-[#07332F]" required />        </div>
        <div className="form-control">
        
          <input type="text" placeholder="Doctor Name" className="input input-bordered text-white  border-white border-2 bg-[#07332F]" required />        </div>
        <div className="form-control">
         
          <input type="date" placeholder="Date" className="input  input-bordered text-white  border-white border-2 bg-[#07332F]" required />
        </div>
        <div className="form-control">
         
          <input type="Time" placeholder="Time" className="input  input-bordered text-white  border-white border-2 bg-[#07332F]" required />
        </div>

        </div>
      
        <div className="form-control mt-6">
          <button className="btn bg-[#F7A582] text-white font-bold text-xl ">Book Now</button>
        </div>
      </form>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Contact
