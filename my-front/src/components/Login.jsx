import React, { useState } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom';
const Login = () => {
 
 const [user, setUser] = useState({
  username:"",
  password:""
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

        <div>
            <div className='w-full'>
                <img src="./wat.jpg" alt="" className='relative object-cover object-center w-full h-screen'/>
                <div className='bg-black/50 w-full h-screen  absolute top-0 left-0'>
                    <div className='flex justify-center py-48'>
        {/* <img src="./des.jpg" alt="" className='bg-cover'/> */}
        <div className='bg-white/15 max-w-md px-10 py-0 text-center rounded-lg flex flex-col justify-center'>
            
                    <h1 className='font-bold text-2xl text-slate-200'>Login</h1>
                  <h3 className='mt-[30px] font-semibold text-slate-300'>Have an Account</h3>
         <form action="" className='flex flex-col-reverse gap-2 ' onSubmit={handleSubmit}>
            <input 
        type='email' 
        placeholder='Username'
        name='username'
        value={user.username}
        onChange={handleChange}
        className='-w-60 rounded-xl h-8 px-2 focus:outline-blue-700'/>
            <input 
        type='password'
        placeholder='Password'
        value={user.password}
        name='password'
        onChange={handleChange}
        className='-w-60 rounded-xl h-8 px-2  focus:outline-blue-700'
        />
         </form>
 <NavLink to='/'> <button type='submit' disabled={!user.password || !user.username} 
  className='bg-green-500 px-28 mt-2 mb-2 rounded-xl h-8 font-bold 22 hover:bg-green-600 disabled:bg-gray-700' >SIGN IN</button></NavLink>
  <div className='flex gap-10 mt-'>
    <div className='flex gap-2 '>
       <input type='checkbox'
     />
    <button><h1 className='font-semibold text-gray-300  shadow-[250px]'>Remeber Me</h1></button> </div>
    <button><p className='Forget font-semibold text-gray-300'>Forgot Password</p></button>

  </div>
<div className='flex items-center gap-2 justify-center '>
    <div className='h-[1px] w-28 bg-black'></div>
    <p>or</p>
    <div className='h-[1px] w-28 bg-black'></div>

  
        </div>
    <NavLink to='/signUp'>  <button className='bg-gray-100 px-28 mt-2 mb-2 rounded-xl h-8 font-bold animate-bounce '>SignUp</button></NavLink>
        </div>
        
        
        </div></div>
            </div>

        </div>
  )
}

export default Login