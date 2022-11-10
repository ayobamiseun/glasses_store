import React, {useEffect} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Trending from './components/Trending';
import Feature from './components/Feature';
import Fft from './components/Fft'
import All from './components/images/All'
import Shoes from './components/images/Shoes'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'
//redux
import { useSelector } from 'react-redux';


export default function Home() {
   useEffect(() => {
    AOS.init();
  }, [])
//   const navigate = useNavigate()
//    const cart = useSelector((state) => state.cart)

// const getTotalQuantity = () => {

//   let total = 0

//   cart.forEach(item => {

//     total += item.quantity

//   })

//   return total

// }
    return (
       <div>
        <Header/>
        <Hero> 
      
        </Hero>
        {/* <Text /> */}
        <Trending />
        <Fft/>
        {/* <All /> */}
        {/* <Shoes/> */}
        <Contact/>
        <Footer/>
        {/* <About /> */}
        {/* <div className='shopping-cart' onClick={() => navigate('/cart')}>

<ShoppingCart id='cartIcon'/>

<p>{getTotalQuantity() || 0}</p>

</div> */}
       </div>
    )
  }
