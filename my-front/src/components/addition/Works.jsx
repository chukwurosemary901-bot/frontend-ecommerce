import React from 'react'
import { service } from '../constants/index.js'
import ShoeCard from '../ShoeCard.jsx'
const Works = () => {
  return (
   <section className='mt-[100px] flex flex-col items-center'>

      <h1 className='font-bold text-3xl'>How It  <span className='text-red-500'>Works</span></h1>
        <div className='flex  justify-center flex-wrap gap-9 ' >

{service.map((service) => (
  <ShoeCard   key={service.id}
  img={service.img} label={service.label} text={service.text}/>
))}
    </div>
</section>
  )
}

export default Works