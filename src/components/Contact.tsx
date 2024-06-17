


import React from 'react'

const Contact = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900 text-white'>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[8rem]'>
        <div>
        <h1 className='text-[25px] md:text-[30px] lg:text-[35px] leading-[2.4rem]'>Get our emails for info on new items, sales and more.</h1>
        <p className='text-[17px] mt-[0.8rem] mb-[1.5rem] opacity-70'>We&apos;ll email you a voucher worth 10$ off your first order over 50$</p>
        <div className='w-[100%] relative h-[2.7rem] mb-[0.3rem] bg-white'>
            <input type="email" placeholder='Enter your Email' className='w-[70%] md:w-[79%] bg-white ml-4 outline-none h-[2.7rem]' />
            <button className='w-[20%] md:w-[25%] right-0 absolute h-[2.7rem] bg-blue-500 hover:bg-blue-700 transition-all'>Subscribe</button>
            <p className='text-[14px] mt-[0.2rem] text-white opacity-35 font-thin'>By subscribing you agree to our terms & conditios and privacy & cookies policy</p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
