import React from 'react'
import doctor from "../assets/images/services.png"
import s1 from "../assets/images/s1.png";
import { Link } from 'react-router-dom'
import { CiStopwatch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephoneForward } from "react-icons/bs";

const Services = () => {
  return (
    <div className=' max-w-[1140px] mx-auto py-12'>
                <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
            <img src={doctor} className="w-full" />
            <div>
            <h1 className="text-4xl font-bold">Our Services</h1>
         <div className=' pr-12 pt-6'>
         <p className=" text-base font-normal ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
         </div>

            <div>
                <ul className=' flex items-center float-start gap-4 py-12'>
                    <li><Link to={'/Cavity'}  className='btn bg-[#F7A582] text-bold text-lg '>Cavity Protection </Link></li>
                    <li><Link className='btn text-bold text-lg '>Cosmetic Dentisty </Link></li>
                    <li><Link className='btn  text-bold text-lg '>Oral Surgery </Link></li>
                </ul>
                
                <div>
                <img src={s1} alt="" />
                <div>
                    <h3 className=' font-bold text-3xl py-6'>Electro  Gastrology Therapy</h3>
                    <p className=' text-base font-normal py-6 w-[438px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                    <p className=' text-base font-normal pb-8 w-[438px]'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <Link className=' text-xl font-bold text-[#F7A582]  border-2 border-[#F7A582] p-3 '>More Details</Link>

                </div>
                  
                </div>
             
               
            </div>
           
            </div>
        </div>
            </div>
            <div  className='grid md:grid-cols-3 grid-cols-1 gap-3 pt-12'>

            <div className="card  bg-[#07332F] shadow-xl">
                <div className="card-body ">
                   <div className='flex justify-between gap-3'>
                   <div>
                    <CiStopwatch  className=' text-white w-12 h-12' />
                    </div>

                    <div>
                   <h2 className="card-title text-2xl font-bold text-white">Opening Hours</h2>
                   <p className=' text-xl font-normal text-white'>Open 9.00 am to 5.00pm Everyday</p>
                   </div>
                   </div>
                </div>
                </div>
                <div className="card  bg-[#F7A582] shadow-xl">
                <div className="card-body ">
                   <div className='flex justify-between  gap-3'>
                   <IoLocationOutline  className=' text-white w-12 h-12' />
                   <div>
                   <h2 className="card-title text-2xl text-white  font-bold">Our Locations</h2>
                   <p className=' text-xl font-normal text-white pr-4'>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                   </div>
                   </div>
                    
                </div>
                </div>
                <div className="card  bg-[#07332F] shadow-xl">
                <div className="card-body ">
                 <div className='flex  justify-between  gap-4'>
                 <div>
                 <BsTelephoneForward  className=' text-white w-12 h-12'/>
                 </div>
                    <div>
                   <h2 className="card-title text-2xl font-bold text-white">Contact Us</h2>
                   
                   <p className=' text-xl font-normal text-white pr-12'>+88 01750 00 00 00 +88 01750 00 00 00</p>
                   </div>

                 </div>
                  
                    
                </div>
                </div>
                

            </div>

            
      
    </div>
  )
}

export default Services
