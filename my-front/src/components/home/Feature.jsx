import React, { useEffect, useState } from 'react'
import { watch } from '../constants'
import '../../App.css'
import Buttons from '../buttons'
import { addToCart } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
const Feature = () => {
// const [data, setData] =useState([])
// useEffect(()=> {
//   fetch()
// })

const carts = useSelector(store => store.cart.items)
console.log(carts);

  const dispatch = useDispatch()
  const handleAddToCart = (watch) =>{
    dispatch(addToCart({
      productID: watch.id,
      quantity: 1
    }))
  }
  return (
    <>
    <div className=''>
        <h1 className='text-4xl font-bold'>Our <span className='text-red-500 '>Popular</span> Products</h1>
        <p className='max-w-[450px] mt-5  text-sm ' >Experience top notch quality products just for you, one of a kind.Checkout our world of comfort and value and confidence </p>
   <div className='grid lg:grid-cols-4 lg:gap-[60px]  sm:grid-cols-2 grid-cols-1  sm:gap-[60px] gap-[60px] pr-[20px] mt-10 '>
    {watch.map((watch) => (
    <div key={watch.id} className=' min-w-[230px] lg:min-w-[200px]   border-none overflow-hidden gap-[px]  '>
<div className='h-[230px] w-full bg-green-300  rounded-lg'><img src={watch.watch} alt="" width={150} className='object-cover object-center w-full h-full -lg'/></div>
<p className='text-slate-500 font-semibold px-1 mt-3'>  <span className='text-red-500'>★</span>{watch.rate}</p>
<h1 className=' under'>{watch.name}</h1>
<h3 className='px-1 text-red-500 font-semibold font-mono'>{watch.price}</h3>
<div className='flex justify-center'>
 <button className='bg-red-500 rounded-full py-3 px-7 flex gap-2'onClick= {()=>handleAddToCart(watch)}>
   {<i className='text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
  </svg>
  </i>}
 
  <p className='text- font-semibold'>Add to Cart</p> 
  </button>
</div>
    </div> 
  
  ))}

    </div>

 
   
    </div>

    </>
  )
}

export default Feature

  // padiing-r{
  // sm:pr-16 pr-8}

  // padding-t{
  // sm:pt-24 pt-12}

  // padding-b{
// sm:pb-24 pb-12
  // }
  // padding-x{
// sm:px-16 px-8
  // }
  // padding{
// sm:px-16 px-8 sm:py-24 py-12
  // }