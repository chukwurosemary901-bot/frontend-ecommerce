import '.././App.css'
import { footer, hublot, Richard, zenith } from './constants/index.js'
import { facee, watts, tube, twitt } from './constants/index.js'
import React from 'react'

const AboutUs = () => {
  return (
    <>

     <div className='mt-[100px]'>
      <h1 className='text-center font-bold text-5xl'><span className='text-red-500'>About</span> Us</h1>
            <div className='flex justify-center px-[50px] max-lg:flex-wrap gap-5 mt-10'>
                <div className='w-[300px] max-lg:h-[300px] max-lg:w-[600px]'>
                    <img src={hublot} alt="" className='w-full h-full object-cover object-center'/>
                </div>
<div className='max-w-[500px] max-md:max-w-full  pol'>
             <p>Fashion wrist watch is a full service branding.  and fashion watch that surport both emerging and established ventures . based in <span className='text-red-400 font-semibold'>Sunny Los Angels</span>, our agency is innatively creative to its core. we belive in the power of leveraging digital marketing and pr with the perfect balance of business and creative to elevate and grow brands.   </p>
            <p>We have the best brands in the world each to its category</p> 

    <div >
      <p className='pol'>
  Welcome to Timeless Watch Co., where style meets precision.

At Timeless Watch Co., we believe a watch is more than just a timepiece — it’s a statement of identity, confidence, and craftsmanship. Our mission is to provide high-quality watches that combine elegant design, durability, and affordability for every lifestyle.

Founded with a passion for excellence, we carefully curate and design our collections to suit both classic and modern tastes. Whether you’re dressing for a business meeting, a casual outing, or a special occasion, our watches are made to complement every moment of your life.

What We Offer

Premium Quality Watches crafted with attention to detail

Modern & Classic Designs for men and women

Affordable Prices without compromising quality

Secure Online Shopping and reliable delivery

Excellent Customer Support you can trust

Our Vision

Our vision is to become a trusted global watch brand, known for quality, innovation, and customer satisfaction. We aim to make stylish and reliable watches accessible to everyone.

Why Choose Us?

We are committed to:

Quality craftsmanship

Customer-first service

Transparency and trust

Continuous improvement

Thank you for choosing Timeless Watch Co. We’re honored to be part of your journey — one second at a time
</p>
      </div>       


</div>


            </div>
            
  
           
        </div>

        <div className='bg-black p-10 mt-20'>
      <div className='flex justify-between'>
        <div className='max-w-[300px] text-white'>
  <h1>Follow Us for more updates, remarks, trends and new products</h1>
  <div className='flex'>
    <img src={facee} alt="" width={60}/>
    <img src={watts} alt="" width={60}/>
    <img src={tube} alt="" width={60}/>
    <img src={twitt} alt="" width={60}/>
  </div>
  
</div>
        {/* <i><FontAwesomeIcon icon={byPrefixAndName.fab['facebook']} /></i> */}
        <div className='flex gap-[100px]'>
            {footer.map((foot) => (
<div key={foot.id} className='text-white'>
<p className=' topics'>{foot.name}</p>
<div className='flex flex-col gap-1 mt-2'>
 <a href=""><p className='tab'>{foot.p1}</p></a>
 <a href=""><p className='tab'>{foot.p2}</p></a>
 <a href=""><p className='tab'>{foot.p3}</p></a>
 <a href=""><p className='tab'>{foot.p4}</p></a>
 <a href=""><p className='tab'>{foot.p5}</p></a>


 </div>

</div>
            ))}
        </div>
      </div>

<div className='flex justify-between text-white mt-10'>
   <p className='right'>Copyright. All rights reserved.</p>
        <p className='right'>Terms and conditions</p>
</div>
       
    </div>
    
    </>
  )
}

export default AboutUs