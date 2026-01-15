import React from 'react'
import { wat } from '../constants'
import Buttons from '../buttons'
import { TUDOR } from '../constants'
const Quality = () => {
  return (
    <>
   
    <div className='flex mt-[60px] justify-between items-center max-lg:flex-col gap-10'>
        <div className='max-w-[500px]'>
            <h2 className='font-bold text-4xl'>
            We provide You Super <span className='text-red-500'>Quality</span> Watches
            </h2>
<p className='mt-4  '>Ensuring premium comfort and style, our meticuolously crafted wrist watch is designed to elevate your experience, provding yo unmatched quality, innovation, and a touch of elegance.</p>
<p className='mt-6 mb-5'>
    Our dedication to detail excellence ensures your Satisfaction and comfort
</p>
     <Buttons label="View Details" />
        </div>
        <div className='h-[350px] max-lg:w-[500px]'>
            <img src={"https://i.pinimg.com/736x/d3/2b/b5/d32bb53023a8c35167ea78f2eba2c010.jpg"} alt="" className='object-cover object-center w-full h-full'/>
        </div>
   <div></div>
    </div>
    </>
    
  )
}

export default Quality