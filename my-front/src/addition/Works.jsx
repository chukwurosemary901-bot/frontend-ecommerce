import React from 'react'
import { service } from '../components/constants/index.js'
import ShoeCard from '../home/ShoeCard.jsx'
import Footer from '../home/Footer.jsx'
const Works = () => {
  return (
    <>
       <section className='mt-[100px] flex flex-col items-center mb-24'>

      <h1 className='font-bold text-3xl'>How It  <span className='text-red-500'>Works</span></h1>
        <div className='flex  justify-center flex-wrap gap-9  mt-10' >

{service.map((service) => (
  <ShoeCard   key={service.id}
  num={service.id} label={service.label} text={service.text}/>
))}
    </div></section>


 <Footer/>

    </>



   

  )
}

export default Works