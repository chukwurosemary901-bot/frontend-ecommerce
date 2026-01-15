import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './components/Login'
import Home from './components/home/Home'
import Watch from './components/Watch'
import Nav from './components/home/Nav'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Pay from './components/addition/Pay'
import Private from './components/addition/Private'
import Works from './components/addition/Works'
import Detail from './components/Detail'
import Cart from './components/Cart'
import SignUp from './components/SignUp'

function App() {
  

  return (
    <div>

<Nav/>


<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/products' element={<Watch/>}/>
  <Route path='/contact' element={<ContactUs/>}/>
  <Route path='/aboutUs' element={<AboutUs/>}/>
  <Route path='/howitWorks' element={<Works/>}/>
  <Route path='/privacyPolicy' element={<Private/>}/>
  <Route path='/paymentPolicy' element={<Pay/>}/>
  <Route path='/:slug' element={<Detail/>}/>
  <Route path='/cart' element={<Cart/> }/>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signUp' element={<SignUp/>}/>
</Routes>

     </div>
  )
}

export default App
