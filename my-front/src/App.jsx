
import { Route, Routes } from 'react-router-dom'

import Login from './home/Login'
import Home from './home/Home'
import Watch from './components/Watch'
import Nav from './components/Nav'
import AboutUs from './home/AboutUs'
import ContactUs from './home/ContactUs'
import Pay from './addition/Pay'
import Private from './addition/Private'
import Works from './addition/Works'
import Detail from './components/Detail'
import Cart from './components/Cart'
import SignUp from './home/SignUp'
import { useSelector } from 'react-redux'
// import
function App() {
  
// const [user, setUser] = useState(null)
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
  <Route path='/products/:slug' element={<Detail/>}/>
  <Route path='/cart' element={<Cart/> }/>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signUp' element={<SignUp/>}/>
</Routes>

     </div>
  )
}

export default App
