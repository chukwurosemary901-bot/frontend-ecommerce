import React from 'react'
import { useState } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom';
const SignUp = () => {

 
 const [user, setUser] = useState({
  firstName:"",
  lastName:"",
  email:"",
  phoneNumber:"",
  password:''
 })
 const handleChange=(e)=>{
    const {name, value, type, checked}= e.target;
    setUser(prev =>({
        ...prev, [name]:type ==="checkbox"? checked:value
    }))
 };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Submitted:", formData);
 };  
 return (
   


 
  

        
            <div className='w-full overflow-hidden'>
                <img src="./wat.jpg" alt="" className='relative object-cover object-center w-full h-screen'/>
                <div className='bg-black/50 w-full h-screen  absolute top-0 left-0'>
                    <div className='flex justify-center py-48'>
        {/* <img src="./des.jpg" alt="" className='bg-cover'/> */}
        <div className='bg-white/15 max-w-md px-10 py-0 text-center rounded-lg flex flex-col justify-center'>
            
                    <h1 className='font-bold text-2xl text-slate-200'>Sign Up for free</h1>
                  <h3 className='mt-[30px] font-semibold text-slate-300'></h3>
         <form action="" className='grid  -reverse gap-4' onSubmit={handleSubmit}>
            <input 
        type='text' 
        placeholder='firstName'
        name='firstName'
        value={user.firstName}
        onChange={handleChange}
        className='-w-60  rounded-xl h-9 px-2 focus:outline-blue-700'/>
            <input 
        type='text'
        placeholder='lastName' 
        value={user.lastName}
        name='lastName'
        onChange={handleChange}
        className='-w-60 rounded-xl h-9 px-2 text-black focus:outline-blue-700'
        />
            <input 
        type='email'
        placeholder='email'
        value={user.email}
        name='email'
        onChange={handleChange}
        className='-w-60 rounded-xl h-9 px-2  focus:outline-blue-700'
        />
            <input 
        type='tel'
        placeholder='phoneNumber'
        value={user.phoneNumber}
        name='phoneNumber'
        onChange={handleChange}
        className='-w-60 rounded-xl h-9 px-2  focus:outline-blue-700'
        />
            <input 
        type='password'
        placeholder='password'
        value={user.password}
        name='password'
        onChange={handleChange}
        className='-w-60 rounded-xl h-9 px-2  focus:outline-blue-700'
        />
         </form>
  <button type='submit' 
  className='bg-gray-100 px-16 mt-2 mb-2 rounded-xl h-8 font-bold 22' ><NavLink to='/login'>SIGN IN</NavLink></button>
  <div className='flex gap-10 mt-'>



  </div>
<div className='flex items-center gap-2 justify-center '>
    <div className='h-[1px] w-28 bg-black'></div>
    <p>or</p>
    <div className='h-[1px] w-28 bg-black'></div>

  
        </div>
   <NavLink to='/'>   <button disabled={!user.lastName || !user.firstName || !user.email || !user.password|| !user.phoneNumber}  className='bg-gray-100 px-28 mt-2 mb-2 rounded-xl h-8 font-bold  hover:bg-green-600 disabled:bg-gray-700  '>SignUp</button></NavLink>
        </div>
        
        
        </div></div>
            </div>

       
  )
}


  


export default SignUp