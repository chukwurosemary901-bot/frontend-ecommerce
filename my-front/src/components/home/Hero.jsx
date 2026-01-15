
import Buttons from '../buttons'
import { rate } from '../data'
import { wat} from '../../components/constants/index.js'
// import { r} from '../../assets/images/r.jpg'
import { watch } from '../constants/index.js'
import { watc } from '../constants/index.js'

import ShoeCard from '../ShoeCard.jsx'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <>
   <div className='flex  max-lg:flex-col max-lg:justify-center  mt-[120px]'>
    
    <div className=' flex flex-col '>
<p className='mb-5'>Our Summer Collections</p>
<p className='font-extrabold text-6xl  max-sm:text-[50px]'>The New Arrival <span> <br /><span className='text-red-500'> Fashion </span>Wrist-Watches</span></p>

<p className='mt-3 mb-7 max-w-[350px] bg-red-'>Discover stylish Fashion quality Wrist Watches, comfortable and innovative for your active life</p>
   
   <NavLink to='products'>
    <Buttons label = "Shop Now" className='mt-5'/>
    </NavLink>


   <div className='flex mt-16 gap-10'>

    {rate.map((rate) => (
        <div key={rate.id} >
            <h1 className='font-extrabold text-4xl'> {rate.rate}</h1>
            <p>{rate.label}</p>
        </div>
    )
        
        
    )}
   </div>
   
    </div>
    <div className='w-[500px] flex flex-1 items-center justify-center mb-10 xl:min-h-screen max-lg:max-w-[6000px]'  >
    <img src={watc} alt=""   className='object-contain object-center w-full mb-10  '/>
   </div>
   <div>
    {/* {watch.map((shoe)=>(
        <div key={shoe.id}>
            <ShoeCard img= {shoe.watch} 
            changeWatch = {() => {}}
            bigWatch=''
            />
        </div>
    ))
    } */}
   </div>
    </div> 
    
    
    
    
    </>
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