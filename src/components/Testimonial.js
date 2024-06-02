import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className='bg-gray-50'>

   
    <div className='relative z-1 max-w-[42rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem] mt-20'>
          <h1 className='text-4xl font-bold mt-10'>Get Started Today</h1>
        <img src="https://st.depositphotos.com/2931363/3703/i/450/depositphotos_37034497-stock-photo-young-black-man-smiling-at.jpg" width={200} height={200} className='mx-auto mt-10 rounded-3xl'/>
      <p className='text-black xl:text-3xl  sm:text-xl mt-10'>We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market.</p> 
        <div className='flex justify-center mt-4 gap-4'>
            <p className='text-xl text-black font-bold' >Mark Vergel Dios</p>
            <p className='text-gray-500 text-xl'>Owner, MVD Auto works</p>
        </div>
        <div className='flex justify-center gap-6 mt-10'>

        {/* <h1 className='text-4xl font-bold mt-10'>Get Started Today</h1>
            <p className='text-gray-500  text-2xl mt-10'>We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market.</p> */}

        <FaArrowLeftLong size={30} />
        <FaArrowRight size={30} />
       
        </div>
        <div>

        </div>
    </div>
    </div>
  )
}

export default Testimonial