// import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Shop from './Button';
import Swiper from './Swiper';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
const DivHero = styled.div`

.hero {
  height:540px;
  background-image:url("../img/wave.png");
  background:#28BEBE;
}


@media only screen and (max-width: 320px) {
  h3 {
    ${'' /* text-align: center; */}
    max-width: 90%;
  }
   p {
    ${'' /* text-align: center; */}
    max-width: 90%;
  }
  .shop {
    ${'' /* max-width: 40%; */}
    margin: auto;
  }
}

`;
export default function Hero() {
  return (<DivHero>
  
    <div className="hero" >

   <div >

 

   
  
<Container >
      <Row>
      
      <Col style={{marginTop:"190px", width:"300px", marginLeft:"5px"}} xs>
      <div style={{width:"300px"}}>
      {/* <Bounce top> <h2>hello</h2> </Bounce> */}
      <Fade top delay={1000}> <h3>A personalized eyewear shopping experience</h3> </Fade>
      <Fade bottom delay={2000}> <p>Get all your eye wears at a discounted price and also win gifts while shopping.</p></Fade>
      <Slide left delay={3000}> <div className="shop"> <Shop /></div> </Slide>
        
         </div>
      </Col>
      

        
        <Col style={{marginTop:"100px"}} xs>
            <div className="image-hero">
            <Swiper/>
             </div>
        </Col>
        {/* <Col xs={{ order: 1 }}>Third, but second</Col> */}
      </Row>
    </Container>
    </div>
    </div>
    </DivHero>);
}
