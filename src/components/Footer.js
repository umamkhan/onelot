import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex justify-between '>
 <div className='ml-10 gap-4 '>
    <h1 className='text-gray-500 text-xl '>© 2023 OneLot Technologies Incorporated Pte. Ltd. All Rights Reserved.</h1>
    <h1 className='text-gray-500 text-xl mt-5'>© 2023 OneLot Financing Corporation. All Rights Reserved.</h1>
    </div>
    <div className='flex gap-4'>

   
    <FaFacebook size={30} />
    <FaInstagram  size={30}/>
  
    </div>
    </div>
  )
}

export default Footer