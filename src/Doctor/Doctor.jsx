import React from 'react'
import Title from '../Title/Title'
import photo from "../assets/images/r1.png";
import { AiOutlineDollar } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";

const Doctor = () => {
  return (
    <div className=' max-w-[1140px] mx-auto py-12'>
      <Title Heading={"Our Expert Doctors"} subpara={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}></Title>
     <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-3'>
     <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title font-bold text-xl py-3 text-left">Karyen Anderson</h2>
    <p className=' font-normal text-base text-left'>Karyen Anderson</p>
    <hr className='py-3' />
    <p className=' font-normal text-base text-left flex gap-2 items-center'> <SlLocationPin  className=" text-2xl" />Dhanmondi, Dhaka, Bangladesh</p>
    <p className=' font-normal text-base text-left flex gap-2 items-center'> <CiCalendar className=' text-2xl' /> Available On Mon, 22 December</p>

    <p className=' font-normal text-base pb-2 flex gap-2 items-center'><AiOutlineDollar className=' text-2xl' /> $15</p>


    <div className="card-actionsnn  w-full">
      <button className="btn w-full bg-white hover:bg-[#F7A582] hover:text-white font-bold text-xl border-2 border-[#F7A582] text-[#F7A582]">View Profile</button>
    </div>
  </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title font-bold text-xl py-3 text-left">Karyen Anderson</h2>
    <p className=' font-normal text-base text-left'>Karyen Anderson</p>
    <hr className='py-3' />
    <p className=' font-normal text-base text-left flex gap-2 items-center'> <SlLocationPin  className=" text-2xl" />Dhanmondi, Dhaka, Bangladesh</p>
    <p className=' font-normal text-base text-left flex gap-2 items-center'> <CiCalendar className=' text-2xl' /> Available On Mon, 22 December</p>

    <p className=' font-normal text-base pb-2 flex gap-2 items-center'><AiOutlineDollar className=' text-2xl' /> $15</p>


    <div className="card-actionsnn  w-full">
      <button className="btn w-full bg-white hover:bg-[#F7A582] hover:text-white font-bold text-xl border-2 border-[#F7A582] text-[#F7A582]">View Profile</button>
    </div>
  </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title font-bold text-xl py-3 text-left">Karyen Anderson</h2>
    <p className=' font-normal text-base text-left'>Karyen Anderson</p>
    <hr className='py-3' />
    <p className=' font-normal text-base text-left flex gap-2 items-center'> <SlLocationPin  className=" text-2xl" />Dhanmondi, Dhaka, Bangladesh</p>
    <p className=' font-normal text-base text-left flex gap-2 items-center'> <CiCalendar className=' text-2xl' /> Available On Mon, 22 December</p>

    <p className=' font-normal text-base pb-2 flex gap-2 items-center'><AiOutlineDollar className=' text-2xl' /> $15</p>


    <div className="card-actionsnn  w-full">
      <button className="btn w-full bg-white hover:bg-[#F7A582] hover:text-white font-bold text-xl border-2 border-[#F7A582] text-[#F7A582]">View Profile</button>
    </div>
  </div>
    </div>
      

     
     </section>
    </div>
  )
}

export default Doctor
