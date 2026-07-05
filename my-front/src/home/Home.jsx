import React from 'react'
import Nav from '../components/Nav'
import Hero from './Hero'
import Feature from './Feature'
import Quality from './Quality'
import Offer from './Offer'
import Special from './Special'
import Reviews from './Reviews'
import Footer from './Footer'
const Home = () => {
  return (
    <>
    
 <section className='px-[100px] overflow-hidden'>
 <section className=''>
  {/* <Nav/> */}
  </section>
   
  
  <section className='mt-10  px-[]'>
    <Hero/>
    </section>
    <section className='px-[]'>
      <Feature/>
    </section>
    <section>
      <Quality/>
    </section>
    <section >
      <Offer/>
    </section>
    <section>
      <Special/>
    </section>
    <section>
      <Reviews/>
    </section>
   
</section>
 <section className='mt-10'>
      <Footer/>
    </section> 

    </>
  )
}

export default Home