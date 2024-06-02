import React from 'react'
import Card from './Card'
import { data } from '../constants/constant'

const Whynot = () => {
  return (
    <div className='mx-auto text-center mt-10'>
        <h1 className='text-3xl font-bold text-black'>
        Why oneLot?
        </h1>
      <div className='flex flex-wrap justify-center mt-10 gap-6'>

     
        { data.map(carddata =>(
           <Card key={carddata.id} carddata={carddata}/>
        ))
         
        }
         </div>
    </div>
  )
}

export default Whynot