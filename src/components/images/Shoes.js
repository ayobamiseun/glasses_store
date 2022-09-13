import axios from "axios";
import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const DivShoes = styled.div`
.item {
  ${'' /* position: absolute; */}
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 340px;
  background: #fff;
  -webkit-box-shadow: 0 5px 15px rgba(0,0,0,0.25);
  box-shadow: 0 5px 15px rgba(0,0,0,0.25);
  border-radius: 5px;
  overflow: hidden;
  transition: 1s;
}

.item .img-box {
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  transition: 1s;
}

.item .img-box img {
  display: block;
  width: 100%;
  margin: 0 auto 0;
  transition: 1s;
}

.details {
  position: absolute;
  bottom: -135px;
  width: 100%;
  background: #fff;
  padding: 10px;
  padding-top: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 0 0 rgba(0,0,0,0);
  box-shadow: 0 0 0 rgba(0,0,0,0);
  transition: 1s;
}



.details h2 {
  margin: 0;
  padding: 0;
  padding-bottom: 25px;
  width: 100%;
  font-size: 16px;
}

.details h2 span {
  font-size: 12px;
  color: #bbb;
  font-weight: normal;
}

.details .price {
  position: absolute;
  top: 0;
  right: 25px;
  font-weight: bold;
  font-size: 20px;
}

label {
  display: block;
  margin-top: 5px;
  font-weight: bold;
  font-size: 14px;
}

ul {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  margin: 0;
  padding: 0;
}

ul li {
  list-style: none;
  margin: 5px 5px 0;
  font-size: 12px;
  font-weight: normal;
  color: #bbb;
  transition: 0.7s;
}

ul li:hover {
  cursor: pointer;
  color: #333;
  transition: 0.7s;
}

ul li:first-child {
  margin-left: 0;
}

ul.colors li {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
}

ul.colors li:hover {
  box-shadow: 1px 1px 1px rgba(0,0,0,0.5);
}

ul.colors li:nth-child(1) {
  background: #9F8A42;
}

ul.colors li:nth-child(2) {
  background: #ACAEA9;
}

ul.colors li:nth-child(3) {
  background: #cd7f32;
}

a {
  display: block;
  padding: 5px;
  color: #fff;
  margin: 15px 0 0;
  background: #333;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  transition: 1s;
}

a:hover {
  background: #666;
  transition: 1s;
}


.item:hover .details {
  overflow: visible;
  bottom: 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.25);
  transition: 1s;
}

.item:hover .img-box {
  position: absolute;
  bottom: 60px;
  transition: 3s;
}

.item:hover h2, .item:hover .price {
  padding-top: 20px;
  padding-bottom: 0;
}

`;

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
  return (<DivShoes>
      <Container>
      
        
            <Row>
            {items.map((item) => (
                
        <Col className="col-sm-3" key={item.img}>
        <div class="item">
    <div class="img-box">
      <img src={item.image} alt="Awesome Sunglasses"/>
    </div>
    <div class="details">
      <h2>Awesome Sunglasses<br/><span>Men's Collection</span></h2>
      <div class="price">{item.price}$</div>
      <label>{item.price}$</label>
      <ul>
        <li>{item.count}</li>
        <li>58-14</li>
        <li>62-14</li>
      </ul>
      <label>Color</label>
      <ul class="colors">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <a href="#">Add to cart</a>
    </div>
  </div>
        {/* <div style={{maxWidth:"80%", margin:"auto"}}>
        <img
            src={`${item.image}?w=298&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=1 2x`}
            alt={item.title}
            loading="lazy"
            style={{height:"200px", width:"200px"}}
          />
        </div>
         
          
          <div style={{display:"flex"}}>
          <p style={{}}>{item.title}</p>
          <p style={{textAlign: "unset", fontWeight:"700"}}>${item.price}</p>
          </div> */}
               
         
        </Col>
        ))}
      </Row>
    
    
    </Container>
    </DivShoes>);
}