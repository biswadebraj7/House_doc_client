import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Title from '../../Title/Title'
import g1 from "../../assets/images/Ellipse 2.png"
import e2 from "../../assets/images/e2.png"
import comma from "../../assets/images/Quote_1_.png"

const Patient = () => {
  return (
    <div className=' py-12 max-w-[1140PX] mx-auto'>
         <Title Heading={"What Our Patients Says"} subpara={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}></Title>
         <Swiper
        slidesPerView={2}
        lg:slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className=' grid md:grid-cols-2 grid-cols-1'>
        <SwiperSlide>
        <div class="card shadow-2xl p-6 border-3">
             <div class="card-body">
                <div className=' flex justify-between  items-center gap-4'>
                    <div className=' flex gap-3'>
                        <img src={g1} alt="" />
                        <div>
                         
                            <p className=' font-bold text-lg '>Awlad Hossain </p>
                            <p className=' text-base font-normal'>Product Designer</p>

                        </div>
                    </div>
                    <div>
                        <img src={comma} alt="" />

                    </div>
                   

                </div>
                <div>
                    <p className=' text-lg font-normal py-3'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                </div>
                                  
               </div>
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div class="card shadow-xl p-6 border-3">
             <div class="card-body">
                <div className=' flex justify-between  items-center gap-4'>
                    <div className=' flex gap-3'>
                        <img src={e2} alt="" />
                        <div>
                         
                            <p className=' font-bold text-lg '>Awlad Hossain </p>
                            <p className=' text-base font-normal'>Product Designer</p>

                        </div>
                    </div>
                    <div>
                        <img src={comma} alt="" />

                    </div>
                   

                </div>
                <div>
                    <p className=' text-lg font-normal py-3'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                </div>
                                  
               </div>
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div class="card shadow-2xl p-6 border- border-[#FFFFFF]">
             <div class="card-body">
                <div className=' flex justify-between  items-center gap-4'>
                    <div className=' flex gap-3'>
                        <img src={g1} alt="" />
                        <div>
                         
                            <p className=' font-bold text-lg '>Awlad Hossain </p>
                            <p className=' text-base font-normal'>Product Designer</p>

                        </div>
                    </div>
                    <div>
                        <img src={comma} alt="" />

                    </div>
                   

                </div>
                <div>
                    <p className=' text-lg font-normal py-3'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                </div>
                                  
               </div>
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div class="card shadow-2xl p-6 border-2 border-[#FFFFFF]">
             <div class="card-body">
                <div className=' flex justify-between  items-center gap-4'>
                    <div className=' flex gap-3'>
                        <img src={e2} alt="" />
                        <div>
                         
                            <p className=' font-bold text-lg '>Awlad Hossain </p>
                            <p className=' text-base font-normal'>Product Designer</p>

                        </div>
                    </div>
                    <div>
                        <img src={comma} alt="" />

                    </div>
                   

                </div>
                <div>
                    <p className=' text-lg font-normal py-3'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                </div>
                                  
               </div>
        </div>

        </SwiperSlide>
       

        </div>
      
      </Swiper>
    </div>
  )
}

export default Patient
