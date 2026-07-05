
import Buttons from '../components/buttons.jsx'
import { rate } from '../components/data/data.js'
import { watch } from '../components/constants/index.js'
import { watc } from '../components/constants/index.js'
// import '../App.css'
import { NavLink } from 'react-router-dom'
import Card from './Card.jsx'
import { useState } from 'react'
const Hero = () => {

const [bigWatch, setbigWatch] = useState(watc)
  return (
   <div className='flex  max-lg:flex-col max-lg:justify-center  mt-[120px]'>
    
    <div className=' flex flex-col '>
<p className='vet mb-5 '>Our Summer Collections</p>
<p className='font-extrabold text-6xl  max-sm:text-[50px]'>The New Arrival <span> <br /><span className='text-red-500'> Fashion </span>Wrist-Watches</span></p>

<p className='mt-3 mb-7 max-w-[350px] bg-red-'>Discover stylish Fashion quality Wrist Watches, comfortable and innovative for your active life</p>
   
   <NavLink to='products'>
    <Buttons label = "Shop Now" className='mt-5'/>
    </NavLink>


   <div className='flex mt-16 gap-10'>

    {rate.map((rate) => (
        <div key={rate.id} >
            <h1 className='font-extrabold text-4xl max-md:text-[28px]'> {rate.rate}</h1>
            <p>{rate.label}</p>
        </div>
    )
        
        
    )}
   </div>
   
    </div>
    <div className=' flex flex-1 items-center justify-center mb-10 xl:min-h-screen sm:min-w-[500px]'  >
    <img src={bigWatch} alt=""   className='object-contain object-center w-full mb-10  '/>
   </div>
   <div className='flex absolute bottom-0 left-10 '>
    {watch.map((watch)=>(
        <div key={watch.id}>
            <Card img= {watch} 
            changeWatch = {(watch) => setbigWatch(watch)}
            bigWatch={bigWatch}
            />
        </div>
    ))
    }
   </div>
    </div> 
    
    
    
    
  
  )
}

export default Hero

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