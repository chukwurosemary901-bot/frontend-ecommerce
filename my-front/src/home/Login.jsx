import React, { useState } from 'react'
import './Login.css'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from '../api';
const Login = () => {
 const [error, setError] = useState('')
 const [user, setUser] = useState({
  email:"",
  password:""
 })
 const handleChange=(e)=>{
    const {name, value, type, checked}= e.target;
    setUser(prev =>({
       ...prev, [name]: value
    }))
 };
 const navigate = useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault();
      console.log("Submitted:", user);

    try {
        
const res = await api.post(
    '/users/login', user
)
const userData = res.data.user
localStorage.setItem(user, JSON.stringify(userData))
console.log('Login Success2', res.data.user);
console.log('Login Success', res.data);
setError('')
navigate('/')
    } catch (err) {
        const errorMessage =  err.response?.data?.error || 'Something went wrong'
        console.log('Login error',  errorMessage);
        
        setError(errorMessage)
    }
  }
 
  return (

        <div className=' h-screen overflow-hidden'>
            <div className='w-full h-screen'>
                <img src="./wat.jpg" alt="" className='relative object-cover object-center w-full h-screen'/>
                <div className='bg-black/70 w-full h-screen  absolute top-0 left-0'>
                    <div className='flex justify-center py-48'>
        {/* <img src="./des.jpg" alt="" className='bg-cover'/> */}
        <div className='bg-white/15 max-w-md px-10 py-0 text-center rounded-lg flex flex-col justify-center'>
            
                    <h1 className='font-bold text-3xl text-white'>Login</h1>
                  <h3 className='mt-[10px] font-semibold text-slate-300'>Have an Account</h3>
         <form action="" className='grid gap- mt-6' onSubmit={handleSubmit}>
            <input 
        type='email' 
        placeholder='Email'
        name='email'
        value={user.email}
        autoComplete='email'
        onChange={handleChange}
        className='vet rounded-lg mb-5 h-9 px-2 -blue-700 bg-transparent text-red-300  outline-white outline-none border-white border-'/>
            <input 
        type='password'
        placeholder='Password'
        value={user.password}
        name='password'
        onChange={handleChange}
        autoComplete='current-password'
        className='vet rounded-lg mt-15 h-9 px-2 -blue-700 bg-transparent text-red-300  outline-white outline-none border-white border-'/>
        
        {error && <p className='text-red-500'> {error}</p>}
        <button type='submit'  
           className='bg-black/70 px-28 mt-5 cursor-pointer  mb-1 rounded-xl text-white h-8 font-bold  hover:bg-red-500 hover:text-white disabled:bg-gray-700 
'>SIGN IN</button>
        
         </form>

  <div className='flex gap-10 mt-1 mb-3 mt-'>
    <div className='flex gap-2  '>
       <input type='checkbox'
     />
    <button><h1 className='font-semibold text-gray-300  shadow-[250px]'>Remeber Me</h1></button> </div>
    <button><p className='Forget font-semibold text-gray-300'>Forgot Password</p></button>

  </div>
<div className='flex items-center mt-5 gap-2 justify-center '>

    <p className='text-white'>Dont Have an Account </p>
  

  
        </div>
    <NavLink to='/signUp'>  <button className='bg-gray-100 px-28 mt-2 mb-2 rounded-xl h-8 font-bold btn-success bg-black/70
 text-white
 hover:bg-red-600 hover:text-white'>SignUp</button></NavLink>
        </div>
        
        
        </div></div>
            </div>

        </div>
  )
}

export default Login