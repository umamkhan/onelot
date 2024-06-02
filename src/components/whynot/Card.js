import React from 'react';
import dmsicon from "../../assets/dmsicon.webp"

const Card = ({carddata}) => {
  return (
    <div className="w-[250px] h-[250px] rounded-lg overflow-hidden shadow-lg border ml-10">
    <img className="w-[50px] mx-auto mt-4" src={dmsicon} alt="Sunset in the mountains"/>
    <div className="px-6 py-4 mt-5">
      <div className="font-bold text-xl mb-2">{carddata.title}</div>
      <p className="text-gray-700 text-base">
        {carddata.content}
      </p>
    </div>
   
  </div>
  )
}

export default Card