// import React from 'react'
import axios from "axios";
import React, {useState, useEffect} from "react";
import './blue.css'
import { useDispatch } from 'react-redux';
import { addToCart } from "../../store/cart-slice";
const options = {
  method: 'GET',
  url: 'https://fakestoreapi.com/products/',
  
};
export default function Kids() {
  const dispatch = useDispatch()
  const [items, setItems] = useState([]);
  useEffect(() => {
    
      axios.request(options).then(function (response) {
           console.log(response.data);
          setItems(response.data);
      }).catch(function (error) {
          console.error(error);
      });
   
  },[])
  return (
    <div>
     
        <div id="wrap">
       
	<div id="columns" class="columns_4">
  {items.map((item) => (
  <figure>
  <img src={item.image}/>
	<figcaption>{item.title}</figcaption>
    <span class="price">${item.price}</span>
    {/* <a class="button" href="#">Buy Now</a> */}
        <button 
  
  onClick={() => 
    
    dispatch(addToCart(item))

  } class="button">Add to Cart

</button>
	</figure>))}
	
</div> 
    </div>
    </div>
  );
}
