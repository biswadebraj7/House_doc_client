import React, { useContext } from 'react'
import photo from  "../assets/images/login.png"
import { Link, useNavigate } from 'react-router-dom'
import { ContextProvider } from '../Provider/ProviderContext'
import Swal from 'sweetalert2' 
import axios from "axios"
const Register = () => {
  const {createsingeMange}=useContext(ContextProvider);
  const navigate=useNavigate()

  const handlesubmit=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const username=e.target.username.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    const userdata={name, username, email, password}
    console.log(userdata)
    createsingeMange(email, password)
    .then((result)=>{
      const user=result.user;
      console.log(user);
      axios.post("http://localhost:5000/user",userdata)
      .then((res)=>{
        if(res.data.InssertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "create New Member successfully",
            showConfirmButton: false,
            timer: 1500
          });

        }
      })
     
      navigate("/")
    })
    .catch((Err)=>{
      console.log(Err)
    })
  }
  return (
    <div className=' mx-auto max-w-[1140px]'>
      <div className="hero min-h-screen bg-[#07332F]  w-full ">
  <div className="hero-content flex-col lg:flex-row  gap-6">
    <div className="text-center  ">
        <img src={photo} alt="" />

        </div>
    
    <div className="card shrink-0 w-full max-w-md border-2   bg-white ">
      <div className=' py-4'>
        <h1 className=' font-bold text-3xl text-center text-black pt-3'>Sign Up to Doc House</h1>
      </div>
      <form className="card-body" onSubmit={handlesubmit}>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold py-2">Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter your name" className="input input-bordered text-base font-normal text-black" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold py-2">Username</span>
          </label>
          <input type="text" name='username' placeholder="Enter your Username" className="input input-bordered text-base font-normal text-black" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold py-2">Email</span>
          </label>
          <input type="email" name='email' placeholder="Enter your email" className="input input-bordered text-base font-normal text-black" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold py-2">Password</span>
          </label>
          <input type="password" name='password' placeholder="Enter your password" className="input input-bordered text-base font-normal text-black" required />
          
        </div>
        
         
        <div className="form-control mt-6">
          <button className="btn bg-[#F7A582] hover:bg-[#F7A582]  font-bold text-xl hover:text-[#FFFFFF] text-[#FFFFFF]">Register</button>
        </div>
      </form>
      <div className=' text-center mx-auto pb-4'>
        <p className=' text-lg font-semibold text-center'>Already registered? Go to <Link className=' text-lg text-[#F7A582] font-semibold'>SIGN IN</Link></p>
      </div>
    </div>
  </div>
        </div>
      
   
    </div>
  )
}

export default Register
