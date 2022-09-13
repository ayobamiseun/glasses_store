import axios from "axios";
import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Stack from 'react-bootstrap/Stack';
// import {itemData} from './Data'

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
          </div>
        </div>
         
          
          
               
         
        </Col>
        ))}
      </Row>
    
    
    </Container>
  );
}