import React from 'react'
import { Collapse } from 'react-collapse';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const QuestionItem = ({open, toggle, question, answer}) => {
  return (
    <div className='pt-[10px]'>
      <div className=' py-[25px] px-[50px] flex justify-between items-center cursor-pointer rounded shadow-lg lg:w-[650px] md:w-[550px] sm:w-[350px]'
      onClick={toggle}>
       <p className='xl:text-xl lg:text-xl  font-philosopher md:text-xl sm:text-lg text-gray-600'>{question}</p>
       <div className='text=[30px]'>

        {open ? <IoIosArrowDown className='h-5 w-5'/> : <IoIosArrowUp className='h-5 w-5'/>}
       </div>
      </div>

<Collapse  isOpened={open}>
  <div className='bg-white px-[50px] pb-[20px] xl:text-xl lg:text-2xl font-philosopher lg:w-[650px] md:w-[550px] sm:w-[350px] md:text-xl sm:text-lg text-gray-600'>{answer}</div>
</Collapse>

    </div>
  )
}

export default QuestionItem