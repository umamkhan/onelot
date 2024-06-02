import React from 'react';
import dealerloanicon from "../assets/dealerloanicon.svg";
import dmsicon from "../assets/dmsicon.webp"

const Section = () => {
  return (
   
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2  px-8 sm:px-10 mt-10 py-4'>
        <div className='xl:ml-10'>
         <p  className='text-4xl text-black font-bold'>Everything you need to grow your business</p>
         <p className='text-gray-500 text-2xl mt-10'>OneLot is your trusted lending and financing partner, exclusively tailored for used car dealership. We also offer digital tools for streamlined operations and growth of your dealership.</p>
         <p className='text-[#3f0473] text-xl font-bold mt-2 '>learn more 🡢 </p>

        </div>
        <div className='xl:mx-20'>
            <div className='flex gap-4'>
            <img src={dealerloanicon} />
            <h3 className=' text-black font-bold text-2xl'>Dealer loans</h3>
            </div>
            <p className='text-xl mx-14 mt-5 text-green-600 '>Accelerate your growth with tailored loan solutions</p>
            <p className='text-xl mx-14 mt-5 text-gray-500 '>Get comprehensive car financing solutions, unlock the potential of your dealership and take it to new heights.</p>
          <div className='mt-10'>
          <div className='flex gap-4'>
          <img src={dmsicon} />
          <h3 className='text-black font-bold text-2xl'>Dealership Management</h3>
            </div>
            <p className='text-xl mx-14 mt-5 text-green-600'>Enhance Efficiency and Sales with free digital tools for car dealerships</p>
            <p className='text-xl mx-14 mt-5 text-gray-500'>OneLot offers a suite of powerful digital tools designed to optimize your dealership's operations.</p>
          </div>
        
        </div>
      
       
   

  </div>
   
  )
}

export default Section