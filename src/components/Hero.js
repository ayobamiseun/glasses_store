// import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Shop from './Button'
import styled from 'styled-components';
const DivHero = styled.div`

.hero {
  height:540px;
  background-image:url("../img/wave.png");
  background:#28BEBE;
}

`;
export default function Hero() {
  return (<DivHero>
    <div className="hero" >

   <div >

 

   
  
<Container >
      <Row>
      
      <Col style={{marginTop:"190px", width:"300px", marginLeft:"5px"}} xs>
         <div style={{width:"300px"}}><h3>A personalized eyewear shopping experience</h3>
         <p>Get all your eye wears at a discounted price and also win gifts while shopping.</p>
         <Shop />
         </div>
      </Col>
      

        
        <Col style={{marginTop:"100px"}} xs>
            <div className="image-hero">
            <img style={{height:"436px", marginLeft:"90px", background:"none"}} src={require('../img/glass2.png')} />
            </div>
        </Col>
        {/* <Col xs={{ order: 1 }}>Third, but second</Col> */}
      </Row>
    </Container>
    </div>
    </div>
    </DivHero>);
}
