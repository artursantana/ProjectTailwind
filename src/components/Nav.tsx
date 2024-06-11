import React from 'react'
import Image from 'next/image'
import {HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon} from '@heroicons/react/16/solid'

const Nav = () => {
  return (
    <div className='h-[13vh] bg-gray-800'>
      <div className='w-[95%] md:w-[80%] mx-auto h-[100%] flex items-center justify-between'>
        <div>
            <Image src='/images/logo.png' width={150} height={150} alt='logo'/>
        </div>
      
      <div className='h-[50%] hidden flex-[0.5] overflow-hidden bg-gray-200 rounded-md sm:flex items-center'>

        <input type="text" placeholder='Search Game (eg. Call of Duty)' className='block pl-[0.5rem] w-[90%] outline-none mx-auto h-[100%] bg-gray-200'/>
        <MagnifyingGlassIcon className='w-[25px] h-[25px] mr-[5px] cursor-pointer'/>
      </div>
      <div className='flex items-center justify-center space-x-8'>
        <div className='relative'>
            <ShoppingBagIcon className='w-[35px] h-[35px] mr-[5px] cursor-pointer text-white'/>
            <div className='w-[20px] text-[12px] absolute top-[-7px] right-[-7px] h-[20px] flex items-center text-white font-semibold rounded-full bg-red-400 justify-center'>4</div>
        </div>
      </div>
      <HeartIcon className='w-[2rem] h-[2rem] text-white cursor-pointer'/>
      <UserIcon className='w-[2rem] h-[2rem] text-white cursor-pointer'/>
      </div>
    </div>
  )
}

export default Nav
