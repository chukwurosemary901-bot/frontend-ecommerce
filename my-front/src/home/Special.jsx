import React from 'react'
import { watc } from '../components/constants'
// import {Buttons} from ''
import { TUDOR } from '../components/constants'
import Buttons from '../components/buttons'

const Special = () => {
  return (
    <>
    <div className='mt-[60px] flex items-center justify-centermax-lg:flex-wrap max-lg:flex-col-reverse  gap-[100px] max-lg:gap-[50px] '>
<div className='h-[350px]  max-lg:w-[500px] bg-gray-600'>
    <img src={TUDOR} alt="" className='object-center object-cover w-full h-full'/>
</div>
    <div className='max-w-[500px]'>
       <h1 className='font-bold text-4xl'>We Provide You <span className='text-red-500'>Super Quality </span> Watches</h1>
    <p className='mt-6'>Ensuring premium comfort and style, our meticulously crafted watcges is designed to elevate your experience, providing you unmtched quality innovaion, and a touch of elegance</p>
    <p className='mt-8 mb-5'>Our dedication to detail and excellence ensurres your satisfaction</p> 
 <Buttons label="Visew Details"/>  
  </div>
    
   </div> </>
  )
}

export default Special