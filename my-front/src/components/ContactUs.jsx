import React from 'react'
import { facee, tube, twitt, watts, zenith } from './constants'
import '../App.css'
import Buttons from './buttons'
const ContactUs = () => {
  return (
    <>
   
    
        <div className='flex p-[50px] justify-evenly max-lg:flex-wrap mt-[70px]'>
<div className='h-[500px] w-[350px] max-lg:h-[250px] max-lg:w-[500px]'>
<img src={zenith} alt="" className='object-cover object-center w-full h-full'/>
</div>
<div>
   <div>
    <h1 className=' text-[60px] font-bold max-md:text-[40px]
'><span className='text-red-500'>Contact</span> Us</h1>

</div>
<div className='flex gap-16'>
    
    <div className='flex flex-col gap-5 justify-start'>
       <div>
        <p className='font-semibold text-lg max-md:text-[15px]'>Full Name</p>
        <div className='w- mt-3  border-2 border-black'>

            <input type="text"   />
        </div>
        </div> 
       <div>
        <p className='font-semibold text-lg max-md:text-[15px]'>E-mail</p>
         <div className='border-2 border-black  mt-3'>

            <input type="text"   />
         </div>
        </div> 
       <div>
        <p className='font-semibold text-lg max-md:text-[15px]'>Message</p>
         <div className='border-2 border-black  mt-3'>

            <input type="text"   />
         </div>

         
        </div> 
<Buttons label="Contact Us"/>
    </div>

    <div className='max-w-[150px] '>
        <h1 className='font-semibold text-2xl max-md:text-[21px]'>Contact</h1>
        <p>watch@gmail.com</p>
        <h1 className='mt-10 font-semibold text-2xl max-md:text-[21px] '>Based in</h1>
        <p>San Fransisco, California</p>
        <div className='grid grid-cols-4 '>
            <img src={watts} alt="" width={50} />
            <img src={tube} alt="" width={50} />
            <img src={twitt} alt="" width={50} />
            <img src={facee} alt="" width={50} />
        </div>
    </div>
</div> 
</div>


    
    </div>
    </>
  )
}

export default ContactUs