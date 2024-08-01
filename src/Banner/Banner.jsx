import React from 'react'
import banner from "../assets/images/banner.png";


const Banner = () => {
  return (
    <div className=' bg-[#07332F]'>
<div className=' mx-w-[1140px] mx-auto'>
<div className="hero  pb-12 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="w-full  mx-auto rounded-lg shadow-2xl" />
    <div>
      <h1 className="lg:text-7xl text-5xl font-semibold text-white">Your Best Medical Help Center</h1>
      <p className="py-6 8 text-lg w-[530px] font-semibold text-white">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
      <button className="btn overflow-hidden font-bold text-xl hover:text-white text-white bordered bg-[#F7A582] hover:bg-[#F7A582]">All Service</button>
    </div>
  </div>
</div>
</div>
      
    </div>
  )
}

export default Banner
