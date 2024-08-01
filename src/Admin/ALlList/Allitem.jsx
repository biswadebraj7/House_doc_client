import { CiUser } from "react-icons/ci";

const Allitem = () => {
  return (
    <div>
        <div className=' mx-auto  flex justify-between items-center gap-3'>
            <div className="  shadow-md p-6" >
                <div className=" flex justify-start gap-5 w-64 items-center ">
                <CiUser  className=" text-[#FF0034] bg-[#e7e3e4] p-1 font-semibold text-5xl"/>
                <h1 className=" font-semibold text-3xl">20</h1>

                </div>
                <h3 className=" font-semibold text-base pt-2">Doctor</h3>
            </div>
            <div className=" card shadow-md  p-6" >
                <div className=" flex justify-start items-center gap-3 w-64">
                <CiUser  className=" font-semibold text-3xl"/>
                <h1 className=" font-semibold text-3xl">20</h1>
                </div>
            </div>
            <div className=" card shadow-md  p-6" >
                <div className=" flex justify-start items-center gap-3 w-64 ">
                <CiUser  className=" font-semibold text-3xl"/>
                <h1 className=" font-semibold text-3xl">20</h1>
                </div>
            </div>


        </div>
      
    </div>
  )
}

export default Allitem
