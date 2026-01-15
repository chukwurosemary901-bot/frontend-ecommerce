import { NavLink } from "react-router-dom"
import '../../App.css'
import { wat } from "../constants"
import { useState, useEffect } from "react"
import { addToCart } from "../../store/cart"
import { useSelector } from "react-redux"
const Nav = () => {
 
 
 
 
 
 const [count, setCount] = useState(0)
 const carts = useSelector(store => store.cart.items)
 useEffect(() => {
let total = 0
carts.forEach(items => total += items.quantity)
setCount(total)
}, [carts])
 
  return (
    <>
    <header className=" sticky bg-slate-500 top-0">
      <nav className='flex justify-between px-[100px] fixed py-4 top-0  bg-red-300 -100 w-full'>
        <p className="logo">Timeless Co.</p>

        <div className='flex max-md:hidden'>
<ul className='flex gap-10 text-white'>
  <li className="text-white">


  <NavLink to='/' className="link">
Home 
<i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</i>
</NavLink>



  </li>
  <li>
    
    <NavLink to='/aboutUs' className="link">
      About Us
       <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
</i>
    </NavLink> 
    
    </li>

  <li>



      <NavLink to='/products' className="link">
    Products
    <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
</i>
    </NavLink >

    
    </li>
  <li>
    
         <NavLink to='/contact' className="link">

Contact Us
<i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</i>
    </NavLink>
   
 
    


  </li>
</ul>
        </div>
        <div>
          <i className="hidden max-md:block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</i>
        </div>
        <div className="relative ">
         <NavLink to='/cart'>
          <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</i>
          </NavLink> 
<div className="w-[20px] h-[20px] absolute rounded-full bg-red-500 text-yellow-50 right-[18px] top-[20px] flex justify-center items-center">{count}</div>
        </div>
        <div>
          <NavLink to='/login'>
            Login
          </NavLink>
          </div>
      </nav>
    </header>
    
    
    </>
  )
}

export default Nav