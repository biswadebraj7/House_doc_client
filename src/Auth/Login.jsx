import React, { useContext } from 'react'
import photo from  "../assets/images/login.png"
import { ContextProvider } from '../Provider/ProviderContext'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = () => {
  const {SingInmange}=useContext(ContextProvider);
  const navigate=useNavigate()

  const handlelogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;
    const userdata={email,password};
    console.log(userdata);
    SingInmange(email, password)
    .then((result)=>{
      const user=result.user;
      console.log(user)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/")
    })
    .cathc(err=>{
      console.log(err)
    })

  }

  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
        <img src={photo} alt="" />

        </div>
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form className="card-body" onSubmit={handlelogin}>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
        </div>
      
    </div>
  )
}

export default Login
