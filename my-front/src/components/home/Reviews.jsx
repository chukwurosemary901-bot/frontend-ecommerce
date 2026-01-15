import React from 'react'
import { reviews } from '../constants'
import '../../App.css'
const Reviews = () => {
  return (
    <>
    
<div className='flex flex-col items-center mt-[80px]'>
   
    <h1 className='text-3xl font-bold'>What Our <span className='text-red-500'>Customers</span> Says ?</h1>
<div className='text-center max-w-[450px]'>  
              <p>Hear genuine Stories from our satisfied customers about their exceptional experiences with Us</p>
        </div>
        <div className='flex flex-wrap gap-[50px] px-[200px] justify-center '>
                    {reviews.map((review) => (
<div key={review.id} className='w-[200px] flex justify-center flex-col items-center text-center bg-white shadow-lg mt-6 rounded-lg '>
<div className='rounded-full bg-red-500 w-[60px] overflow-hidden h-[60px]'>
<img src={review.img} alt="" className='object-cover w-full' />
</div>
<p className='rev'>{review.text}</p>
<p className='text-red-500 mt-2'>{review.rate}</p>
<p className='font-bold mt-5'>{review.name}</p>
</div>

        ))}
        </div>



</div>

    </>
  )
}

export default Reviews