import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaLongArrowAltRight} from 'react-icons/fa'

function AutoLayoutExample() {
  return (
    <div  style={{marginTop:"50px"}}>

    
    <Container>
      <Row>

       
     
      <Col>
       <h5>Trending</h5>
       <div style={{height:"430px", backgroundColor:"#28BEBE", width:"100%"}}>
       <img className="trend"  src={require('../img/girl1.png')} />
       </div>
      
      </Col>
     
        
   
      <Col>
        <h5 style={{float:"right"}}>View all <FaLongArrowAltRight /></h5>
        <div  style={{height:"193px", backgroundColor:"#28BEBE", width:"100%", marginTop:"38px"}}>
        {/* <img  src={require('../img/glass1.png')} style={{}} /> */}
        </div>
        <div  style={{height:"193px", backgroundColor:"#28BEBE", width:"100%", marginTop:"38px"}}>
        {/* <img  src={require('../img/glass3.png')} /> */}
        </div>
      </Col>
     
      </Row>
      
    </Container>
    </div>
  );
}

export default AutoLayoutExample;