import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import FeatureProducts from '@/components/FeatureProducts'
import TopProduct from '@/components/TopProduct'
import BestSeller from '@/components/BestSeller'
import News from '@/components/News'
import Contact from '@/components/Contact'

export const page = () => {
  return (
    <div className='overflow-hidden'>
  <Nav/>
  <Hero/>
  <FeatureProducts/>
  <TopProduct/>
  <BestSeller/>
  <News/>
  <Contact/>
    </div>
  )
}

export default page;