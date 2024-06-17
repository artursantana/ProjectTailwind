

import React from 'react'
import FeatureProductSlider from './Helper/FeatureProductSlider'

const FeatureProducts = () => {
  return (
    <div className='pt-[6rem] pb-[3rem] bg-gray-900'>
      <div className='w-[80%] mx-auto flex items-center justify-between'>
        <h1 className='md:text-[28px] text-[22px] lg:text-[34px] text-white'>Feature Products
        </h1>
        <button className='uppercase text-[13px] md:text-[15px] text-yellow-300'>
            View all product
        </button>
      </div>
      <div className='w-[80%] mt-[2rem] mx-auto'>
        <FeatureProductSlider/>
      </div>
    </div>
  )
}

export default FeatureProducts
