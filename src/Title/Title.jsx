import React from 'react'

const Title = ({Heading, subpara}) => {
  return (
    <div>
        <div className=' mx-auto max-w-screen-lg '>
            <h1 className=' font-bold text-center text-4xl  '>{Heading}</h1>
            <p className='text-base font-normal text-center px-8 py-8'>{subpara}</p>

        </div>
      
    </div>
  )
}

export default Title
