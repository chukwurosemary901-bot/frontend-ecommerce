import React from 'react'
import { useState } from 'react'
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from '../api';
import '../App.css'
const SignUp = () => {

 const navigate = useNavigate()
 const [error, setError] = useState('')
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
        ...prev, [name]:value
    }))
 };

  const handleSubmit= async(e)=>{
    e.preventDefault();
      console.log("Submitted:", user);
    try {
        const res = await api.post(
            '/users/signUp', user
        )
        console.log('registration successful', res.data);
        navigate('/')
    } catch (error) {
        const errors = error.response?.data?.error
        console.log('registration error', errors);
        setError(errors)
    }
  
 };  
 return (
   


 
  

        
            <div className='w-full overflow-hidden bg-white'>
                <div className=''>

                <img src="./wat.jpg" alt="" className='relative object-cover object-center w-full h-screen'/>
                </div>
                <div className='bg-black/70 w-full h-screen  absolute top-0 left-0'>
                    <div className='flex justify-center py-48'>
        {/* <img src="./des.jpg" alt="" className='bg-cover'/> */}
        <div className='bg-white/15 max-w-md px-10 py-0 text-center rounded-lg flex flex-col justify-center'>
            
                    <h1 className='font-bold text-3xl text-slate-200 mt-6'>Sign Up for free</h1>
                  <h3 className='mt-[30px] font-semibold text-slate-300'></h3>
         <form action="" className='grid  gap-4' onSubmit={handleSubmit}>
            <input 
        type='text' 
        placeholder='firstName'
        name='firstName'
        value={user.firstName}
        onChange={handleChange}
        className='vet rounded-lg h-9 px-2 -blue-700 bg-transparent text-red-300  outline-white outline-none border-white border-'/>
            <input 
        type='text'
        placeholder='lastName' 
        value={user.lastName}
        name='lastName'
        onChange={handleChange}
        className=' vet rounded-lg h-9 px-2 -blue-700 bg-transparent text-red-300  outline-white outline-none border-white border-'/>
        
            <input 
        type='email'
        placeholder='email'
        value={user.email}
        name='email'
        onChange={handleChange}
        className=' vet rounded-lg h-9 px-2 -blue-700 bg-transparent text-red-300  outline-white outline-none border-white border-'/>
        
            <input 
        type='tel'
        placeholder='phoneNumber'
        value={user.phoneNumber}
        name='phoneNumber'
        onChange={handleChange}
        className='vet rounded-lg h-9 px-2 -blue-700 bg-transparent text-red-300  outline-white outline-none border-white border-'/>

            <input 
        type='password'
        placeholder='password'
        value={user.password}
        name='password'
        autoComplete='new-password'
        onChange={handleChange}
        className=' vet rounded-lg h-9 px-2 -blue-700 bg-transparent text-red-300  outline-white outline-none border-white border-'/>
        
        {error && <p className='text-red-500'> {error}</p>}
    <button disabled={!user.lastName || !user.firstName || !user.email || !user.password|| !user.phoneNumber} type='submit' className='bg-red-500 px-28 cursor-pointer mt-2 mb-2 rounded-xl text-white h-8 font-bold  hover:bg-red-600 hover:text-white disabled:bg-gray-700  '>SignUp</button>

         </form>
  
  <div className='flex gap-10 mt-'>



  </div>
<div className='flex items-center gap-2 mb-4 justify-center '>

    <p className='text-white '>Already Have an Account, <NavLink to='/login'>
         <span className='font-bold'>Sign in</span>
        </NavLink>
</p>

  
        </div>
        </div>
        
        
        </div></div>
            </div>

       
  )
}


  


export default SignUp