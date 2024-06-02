import React from 'react';
import home_hero_image from "../assets/home_hero_image.webp";
import sec from "../assets/sec.webp"


const Header = () => {
  return (
    <>
    <div className='relative z-1 max-w-[72rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem] mt-20 '>
        <h1 className='mb-6 font-bold text-5xl '>Grow your dealership with car loans and
digital tools for dealers</h1>
<h4 className='xl:text-2xl md:text-2xl text-gray-500'>
We enable dealers to buy more cars through our inventory loan solutions and sell cars more efficiently through our Dealership Management System with its inventory management, marketing solutions and market insights
</h4>
  <button className='text-white bg-[#3f0473] mt-8  py-2 border rounded-md px-8 font-bold'>Inquire now</button>
   
  </div>
  <div className='bg-gray-50'>

  
   <img src={home_hero_image} className='mx-auto mt-5' width={1500} height={1000} />
   <h5 className='text-2xl mt-10 text-gray-500 text-center'>Regulated by</h5>
   <img src={sec} width={220} height={100} className='mx-auto mt-5'/>
   </div>
 </> 
  )
}

export default Header