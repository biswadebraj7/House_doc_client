import React from 'react'

const AddDcotor = () => {
  return (
    <div className=' mx-auto'>
        <div className=' w-96 items-center'>
        
        <h1 className=' py-4 text-xl font-semibold text-center'>Dashboard</h1>
      </div>
      <div className=' w-full'>
        <form action="">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold py-2">Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter your name" className="input input-bordered text-base font-normal text-black" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold py-2">Email</span>
          </label>
          <input type="email" name='email' placeholder="Enter your email" className="input input-bordered text-base font-normal text-black" required />
        </div>
        <div className="form-control">
         
          <input type="file" name='image' placeholder="Upload your photo" className="input input-bordered text-base font-normal text-black" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold py-2">Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter your name" className="input input-bordered text-base font-normal text-black" required />
        </div>
        </form>

      </div>
      
    </div>
  )
}

export default AddDcotor
