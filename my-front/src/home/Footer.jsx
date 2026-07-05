import React, { useEffect, useState } from 'react'
import { Foot, footer, Fott, tube, twitt, watts } from '../components/constants'
import '../App.css'
import { NavLink } from "react-router-dom"
import { facee } from '../components/constants/index.js'
const Footer = () => {
//     import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// const [ product, setProduct] = useState([])
console.log(window.location.protocol
);

  return (
    <div className='bg-black p-16'>
      <div className='flex justify-between flex-wrap max-md:flex-col'>
        <div className='max-w-[300px] text-white lg:max-w-[300px] max-md:max-w-[200px] '>
  <h1>Follow Us for more updates, remarks, trends and new products</h1>
  <div className='grid grid-cols-4 w-full '>
    <img src={facee} alt="" width={60}/>
    <img src={watts} alt="" width={60}/>
    <img src={tube} alt="" width={60}/>
    <img src={twitt} alt="" width={60}/>
  </div>
  
</div>
        {/* <i><FontAwesomeIcon icon={byPrefixAndName.fab['facebook']} /></i> */}
        <div className='flex gap-[50px]'>
            {footer.map((foot) => (
<div key={foot.id} className='text-white'>
<p className=' topics'>{foot.name}</p>
<div className='flex flex-col gap-1 mt-2'>
 <p className='tab'>{foot.p1}</p>
 <p className='tab'>{foot.p2}</p>
 <p className='tab'>{foot.p3}</p>
 <p className='tab'>{foot.p4}</p>
 <p className='tab'>{foot.p5}</p>


 </div>

</div>
            ))}
        

            {Fott.map((foot) => (
<div key={foot.id} className='text-white'>
<p className=' topics'>{foot.name}</p>
<div className='flex flex-col gap-1 mt-2'>
 <p className='tab'><NavLink to='aboutUs'>{foot.p1}</NavLink> </p>
 <p className='tab'><NavLink to='howitWorks'>{foot.p2}</NavLink></p>
 <p className='tab'><NavLink to='privacyPolicy'>{foot.p3}</NavLink></p>
 <p className='tab'><NavLink to='paymentPolicy'>{foot.p4}</NavLink></p>



 </div>

</div>
            ))}

            {Foot.map((foot) => (
<div key={foot.id} className='text-white'>
<p className=' topics'>{foot.name}</p>
<div className='flex flex-col gap-1 mt-2'>
 <p className='tab'> <NavLink to='contact'>{foot.p1}</NavLink> </p>
 <p className='tab'> <NavLink to='contact'>{foot.p2}</NavLink> </p>



 </div>

</div>
            ))}
            </div>
      </div>

<div className='flex justify-between text-white mt-10 '>
   <p className='right'>Copyright. All rights reserved.</p>
        <p className='right'>Terms and conditions</p>
</div>
       
    </div>
  )
}

export default Footer