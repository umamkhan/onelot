import React from 'react';
import carfinancing from "../assets/carfinancing.png"

const Financing = () => {
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2  px-8 sm:px-10 mt-20 py-4 '>
        <div className='pl-22'>
      <img src={carfinancing} width={1000} height={100}/>

        </div>
        <div className='xl:ml-10 '>
            
          <div className='xl:ml-20'>

        
            <h3 className='text-black font-bold text-4xl '>Car Financing</h3>
           
            <p className=' text-xl  mt-5 font-bold'>Dealer loans</p>
            <p className=' text-xl  mt-5 text-gray-500 '>OneLot’s working capital loans allows car dealer to buy more cars and capitalize on car purchase opportunities you would otherwise have missed. We transfer the money to your account within 6 hours.</p>
            </div>
          <hr className='my-7 xl:ml-10 text-gray-500'>
          </hr>
          <div className='mt-10 xl:ml-10 '>
        
          <p className='xl:ml-10 text-xl font-bold text-gray-700 mt-4'>Interest as low as 1.5% per month with daily calculation of interest</p>

          <p className='xl:ml-10 text-xl font-bold  text-gray-700 mt-4'>Financing up to 70% of the vehicle purchase</p>

          <p className='xl:ml-10 text-xl font-bold  text-gray-600 mt-4'>Financing period up to 90 days with flexible repayment schedule at any point</p>
       
         
            <hr className='my-7 text-gray-500'>
          </hr>
           

           
            <p className=' xl:ml-10 text-2xl text-gray-500 mt-8  '>Use OneLot's financing solution today, grow the number of cars in your lot and increase your profits </p>
            <button className='xl:ml-10 bg-[#3f0473] text-white px-4 mt-4 py-2 rounded-lg'>View loans 🡢</button>
         
          </div>
        
        </div> 
      
       
   

  </div>
  )
}

export default Financing