import React from 'react'
import Offer from './home/Offer'
const ShoeCard = ({img, label, text, num}) => {
  return (
<>


<div className='max-w-52 shadow-3xl shadow-black bg-white rounded-lg border- '>
<div className='rounded-full bg-red-500 mt-2 '>
  <p className='text-white
  '>{num}</p></div>
  <p className='mt-[10px] font-bold'>{label}</p>
  <p className='mt-[6px] '>{text}</p>
</div>




</>
  )
}

export default ShoeCard