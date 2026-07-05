
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Buttons from '../components/buttons.jsx'
import { NavLink } from 'react-router-dom'
import '../App.css'
import { changeQuantity, deleteCart } from '../store/cart.js'
// import CartItem from '../cartItem'
const Cart = () => {
//  const carts = useSelector(store => store.cart.items)
const carts = useSelector(store => store.cart.items)

  const [search, setSearch] = useState([])
   useEffect(()=> {
    fetch("src/components/data/Card.json")
    .then(res => res.json())
    .then(data => setSearch(data))
   }, [])

const dispatch = useDispatch()

const handleDeleteCart = (product) =>{
dispatch(deleteCart({
  productID: product.id
}))
}
const DelProd = (product) =>{
dispatch(changeQuantity({
  productID: product.id,
  quantity: product.quantity -1
}))
}
const AddProd = (product) =>{
dispatch(changeQuantity({
  productID: product.id,
  quantity: product.quantity + 1
}))
}

   const getProduct = (id) => search.find(p => p.id === id);

  if (carts.length === 0) {return(
    <div className='flex items-center justify-center h-screen'>
       Cart is empty
       <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</i>
<div>
  <NavLink to='/products'>

    <Buttons label='Shop Now'/>
  </NavLink>
  
</div>

</div>)
  }
  if (search.length === 0) return <p>Loading products...</p>
    return (
      <div className='px-[100px]'>

         <div className=' text-black mt-[100px] bg-red-100 outline-red-500  shadow-2xl w-full px- grid  '>
<div className='flex items-center'>
  <h2 className='p-5 text-black font-bold text-3xl'> Shopping Cart</h2>
         <i ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</i>
</div>
<div>
{carts.map((items) => {
  const product = getProduct(items.productID);
  console.log(product);
  
        return (
          <div>

             <div key={product.id}  className="flex justify-between items-center p-2 border-b">
           <div className='w-[80px] h-[80px] rounded-full overflow-hidden '>
            <img src={product.watch} alt={product.name} className="w-full h-full object-cover object-center" /> 
            </div>  
           <div className='flex flex-col gap-5'>
            <div className='flex gap-24 red'><h2>{product.name}</h2>
            <h2>${product.price}</h2>
            <h2>Qty: {items.quantity}</h2>
            <h2>Total: ${(product.price * items.quantity)}</h2>
            
              </div> 
              <div className='flex justify-center gap-5'>
                
              {/* <button className='bg-red-800 text-white px-3 ' onClick={() => AddProd(product)}>Add</button>
              <button className='bg-red-800 text-white px-3 ' onClick={() => DelProd(product)}>Remove</button> */}
              </div>
            </div> 
         <button className='bg-red-400 px-2 py-2' onClick={() => handleDeleteCart(product)}>Remove Product</button> </div>
          
          </div>
         
        );
}

)}
</div>
<div className='grid grid-cols-2 px-[300px] gap-3 mb-9 mt-10 '>
   
   <NavLink to='/products'>
    <button className='bg-black text-white px-28 py-3 h-full'>
        CLOSE
    </button>
    </NavLink> 
    <NavLink>

     <button className='bg-black px-28 py-3 h-full text-white'>
        CHECKOUT
    </button> 
    </NavLink>
    

</div>
    </div>   
      </div>

  )
}

export default Cart
// grid-rows-[60px_1fr_60px]