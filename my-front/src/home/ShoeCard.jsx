import React from 'react'
import Offer from '../home/Offer'
const ShoeCard = ({img, label, text, num}) => {
  return (
<>


<div className='max-w-52 bg-white shadow-md rounded-lg border-  px-5 py-3'>
<div className='rounded-full w-5 h-5 flex justify-center items-center  bg-red-500 mt-2 '>
  <p className=' font-bold text-white
  '>{num}</p></div>
  <p className='mt-[10px] font-bold'>{label}</p>
  <p className='mt-[6px] '>{text}</p>
</div>




</>
  )
}

export default ShoeCard