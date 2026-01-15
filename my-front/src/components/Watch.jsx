import React, { useEffect, useState } from 'react'
import { card, p, watch } from './constants'
import Buttons from './buttons.jsx'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../store/cart.js'


const Watch = (props) => {
 const [search, setSearch] = useState([])

 const [wat, setWat] = useState("")
//  const {slug} = props.data
 useEffect(()=> {
  fetch("src/components/Card.json")
  .then(res => res.json())
  .then(data => setSearch(data))
 }, [])


// useEffect(() => {
//   count
// })
 const filteredCards = search.filter(watch => 
  watch.name.toLowerCase().includes(wat.toLowerCase())
 )
const carts = useSelector(store => store.cart.items)
// console.log(carts);
const dispatch = useDispatch()

const handleAddToCart = (card)=>{
dispatch(addToCart({
  productID: card.id,
  quantity: 1
}))
}



  return (
    <>
    <div className=''>
      <div>

         <div className='w-full flex flex-col justify-center items-center mt-[100px] gap-5 relative' >
<h1 className='font-bold text-2xl'>Find the  <span className='text-red-500'>Watch</span> that suits your taste</h1>
    <input type="text"
    placeholder='Search for your favourite watch  '
    value={wat}
    onChange={e => setWat(e.target.value)}
    className=' focus:outline-red-500 bg-white shadow- shadow-xl w-[500px] h-[40px] flex justify-between '
    
   
   />
  <div className='bg-red-400 flex items-center px-3  py-1 rounded-sm absolute right-[450px] top-14'>
      Search Here
    </div>
    </div>
      </div>
      
    
    <div className='gap-[100px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-[100px] md:px-[50px] sm:gap-[100px] md:gap-[50px] mt-20 '>
    
        {filteredCards.map(card => (
            <div key={card.id} className='bg-white shadow-xl min-w-[250px] md:min-w-[200px] '>
                <div className=' w-full h-[300px] '>
                 <NavLink to={card.slug}>
                   <img src={card.watch} alt="" className='object-cover object-center w-full h-full'/>
                  </NavLink>  
                    </div>
            <h1 className='mt-[10px] font-bold'>{card.name}</h1>
            <p className='card text-re'>$ {card.price}</p>
          <div className='flex justify-center mb-5'>
            
           
        <button className='bg-red-500 rounded-full py-3 px-7 flex gap-2'onClick= {()=>handleAddToCart(card)}>

<div className='text-white font-bold'>
  {<i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</i>}
</div>
<p className='text- font-semibold'>Add to Cart</p>
        </button>
            </div>  
            </div>)
        )}
    </div>
   {filteredCards.length === 0 && <p>No Cards found</p> }
    </div>
   
    
    
    
    
    </>
  )
}

export default Watch