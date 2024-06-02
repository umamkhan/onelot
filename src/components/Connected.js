import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Connected = () => {
  return (
    <div className='relative z-1 max-w-[42rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem] mt-20 '>
        <div>
            <h1 className='text-4xl font-bold mt-10'>Stay Connected</h1>
            <p className='text-gray-500  xl:text-2xl sm:text-xl mt-10 ml-5 mr-5'>Follow OneLot on our Facebook and Instagram page and stay up to date with our most recent recent offers, updates and new product features</p>
            <div className='flex justify-center gap-6 mt-10'>
                <button className='border-black border px-2 py-4 rounded-lg flex  xl:gap-2'>
                <FaFacebookF className='mt-2 '/> Follow us on facebook
                </button>
                <button className='border-black border px-2 py-4 rounded-lg flex  xl:gap-2'>  <FaInstagram className='mt-1' /> follow us on instagram
               
                </button>
            </div>
        </div>
    </div>
  )
}

export default Connected
