import React from 'react'

import { useDispatch } from 'react-redux';
import { addToCart } from "../../store/cart-slice";
// import Zoom from 'react-reveal/Zoom';
import Swal from "sweetalert2";
import {items}  from './Data'

export default function Light() {

 const  showAlert = () => {
    Swal.fire({
        title: "Success",
        timer: 1000,
        text: "Added to Cart",
        icon: "success",
        confirmButtonText: "OK",
      });
}
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
const showL = () => {
  Toast.fire({
    icon: 'success',
    title: 'Added To Cart'
  })
}

  const dispatch = useDispatch()

      return (

        <div className="App">
        <div id="wrap">
	<div id="columns" class="columns_4">
  {items.map((item) => (
   
  <figure data-aos="flip-up" data-aos-offset="300"
     data-aos-easing="ease-in-sine" key={item.image}>
  <img src={item.image}/>
	<figcaption>{item.title}</figcaption>
    <span class="price">${item.price}</span>
    <button 
  
  onClick={() => 
    
    dispatch(addToCart(item),showL())
    
    
  } 
  class="button">Add to Cart

</button>

	
	</figure>
  
  ))}	
</div>
</div>
        </div>
      );

}
