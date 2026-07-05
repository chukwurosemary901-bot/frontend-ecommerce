import React from 'react'
import { services } from '../components/constants/index.js'
import ShoeCard from './ShoeCard.jsx'

const Offer = () => {
  return (
    <>
  
<section className='mt-[80px] flex flex-col items-center'>

      <h1 className='font-bold text-3xl'>Our <span className='text-red-500'>Services</span></h1>
        <div className='flex  justify-center flex-wrap gap-9 ' >

{services.map((service) => (
  <ShoeCard   key={service.id}
  num={service.id} label={service.label} text={service.text}/>
))}
    </div>
</section>

    </>
  )
}

export default Offer