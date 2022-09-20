import axios from "axios";
import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ShoppingCart } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
//redux for carting
import { useDispatch } from 'react-redux';
import { addToCart } from "../../store/cart-slice";

const options = {
  method: 'GET',
  url: 'https://fakestoreapi.com/products/',
  
};


  
 
export default function All() {
 
  

  const [items, setItems] = useState([]);
  useEffect(() => {
    
      axios.request(options).then(function (response) {
           console.log(response.data);
          setItems(response.data);
      }).catch(function (error) {
          console.error(error);
      });
   
  },[])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  return (
      <Container>
      
        
            <Row>
            {items.map((item) => (
                
        <Col className="col-sm-3" key={item.img}>
        <div style={{maxWidth:"80%", margin:"auto"}}>
        <img
            src={`${item.image}?w=298&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=1 2x`}
            alt={item.title}
            loading="lazy"
            style={{height:"200px", width:"200px"}}
          />
          <div style={{display:"flex",}}>
          <p style={{}}>{item.title}</p>
          
          </div>
          <div>
            <p style={{textAlign: "center", fontWeight:"700"}}>$${item.price}</p>
            <button 
  
  onClick={() => 
    
    dispatch(addToCart(item))

  }>Add to Cart

</button>
          </div>
         
        </div>
         
          
          
               
         
        </Col>
        ))}
      </Row>
    
    
    </Container>
  );
}