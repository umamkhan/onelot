import React, { useState } from 'react';
import { questionsData } from "../constants/constant";
import QuestionItem from './QuestionItem';

const Question = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if(open === index) {
      return setOpen(null)
    }

    setOpen(index)
  }
  return (
    <div >
      <div className='flex justify-center items-center  '>
        <h1 className='font-bold lg:text-5xl mt-16 font-philosopher md:text-2xl sm:text-xl '>Frequently Asked Questions</h1>
      </div>
      <section className=' mt-20 grid place-items-center'>
      <div className='px-[40px] max-w-[800px]'>
       {questionsData.map((data, index) =>  {
        return <QuestionItem
         key={index}
          open={index === open}
           question={data.question}
            answer={data.answer}
             toggle={()=>toggle(index)} />
       }
       )
       }
       
      </div>
      <button className='bg-[#3f0473] text-white px-6 mt-10 py-2 rounded-lg'>See All 🡢</button>
      </section>
     
    </div>
  )
}

export default Question