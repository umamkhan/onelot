import React from 'react';
import dmscontent from "../assets/dmscontent.png"

const Dealership = () => {
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2  px-8 sm:px-10 mt-10 py-4'>
    <div className=''>
     <p  className='text-4xl text-black font-bold xl:ml-10'>Dealership Management System</p>
     <p className='text-gray-500 text-2xl mt-10 xl:ml-10'>OneLot’s digital platform has been build with the single goal to help used car dealers to operate their business more efficiently.</p>
     <hr className='my-7  text-gray-500'>
          </hr>
      
      <p className='xl:ml-10 text-xl text-black font-bold'>Inventory Management: Track all details about your cars and sales in one place - from car details to buyers. All you need to now in one place</p>
      <p className='xl:ml-10 text-xl text-black font-bold mt-4'>Marketing Tools: Promote your cars across all the different platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages and Instagram with a single click of a button </p>
      <p className='xl:ml-10 text-xl text-black font-bold mt-4'>Marketing Insights (Coming Soon): Get insights on prices and volumes for all cars in the market. We provide you all the date by combining data from various sources with a single click of a button. 

</p>
<hr className='my-7  text-gray-500'>
          </hr>
          <p className=' xl:ml-10 text-gray-500 text-2xl'>Sign-up OneLot's dealer platform today, and your cars easier.</p>
          <button className=' xl:ml-10 bg-[#3f0473] text-white px-4 mt-4 py-2 rounded-lg'>Explore now 🡢</button>
    </div>
     <div className='xl:mx-10'>
       <img src={dmscontent} width={1400} height={1200} className='xl:ml-20'/>
    
    </div> 
  
   


</div>
  )
}

export default Dealership