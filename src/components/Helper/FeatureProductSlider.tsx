
'use client'
import React from 'react';
import ProductCard from './ProductCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const FeatureProductSlider = () => (
  <Carousel
    additionalTransfrom={0}
    arrows={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    centerMode={false}
    infinite
    responsive={responsive}
    itemClass='item'
  >
    <ProductCard 
      title='Call of Duty'
      actualPrice='€54.99'
      discountPrice='39.99'
      category='Shooting'
      image='/images/g1.jpg'
    />
    <ProductCard 
      title='Zombie House'
      actualPrice='€64.99'
      discountPrice='44.99'
      category='Action'
      image='/images/g2.jpg'
    />
     <ProductCard 
      title='Gun of Wars'
      actualPrice='€69.99'
      discountPrice='49.99'
      category='Shooting'
      image='/images/g3.jpg'
    />
     <ProductCard 
      title='House of Fire'
      actualPrice='€54.99'
      discountPrice='34.99'
      category='Action'
      image='/images/g4.jpg'
    />
     <ProductCard 
      title="Assasin's Creed"
      actualPrice='€74.99'
      discountPrice='49.99'
      category='Action'
      image='/images/g5.jpg'
    />
     <ProductCard 
      title='Space Fight'
      actualPrice='€29.99'
      discountPrice='14.99'
      category='Action'
      image='/images/g6.jpg'
    />
    <ProductCard 
      title='Space Cars 2024'
      actualPrice='€99.99'
      discountPrice='69.99'
      category='Action'
      image='/images/g7.jpg'
    />
    <ProductCard 
      title='Wild Wolf'
      actualPrice='€39.99'
      discountPrice='24.99'
      category='Action'
      image='/images/g8.jpg'
    />
  </Carousel>
);

export default FeatureProductSlider;
