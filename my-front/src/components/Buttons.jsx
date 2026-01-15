import React from 'react'

const Buttons = ({label, img}) => {
  return (
    <div>
        <button className='bg-red-500 rounded-full py-3 px-7 flex gap-2'>

<div className='text-white font-bold'>
  {img}
</div>
<p className='text- font-semibold'>{label}</p>
        </button>


    </div>
  )
}

export default Buttons