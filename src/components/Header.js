import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Shop from './Button'
import Navbar from 'react-bootstrap/Navbar';
import { BiSearchAlt2 } from 'react-icons/bi';
import {BsFillCartCheckFill} from 'react-icons/bs';
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <Navbar fixed="top"  collapseOnSelect expand="lg" bg="#28BEBE" style={{backgroundColor:"#28BEBE", color:"black"}} variant="dak">
      <Container className="header">
        <Navbar.Brand href="#home"><img style={{height:"50px"}} src={require('../img/fp.jpg')} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto link">
            <Nav.Link className="link" href="#features"><Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link></Nav.Link>
            <Nav.Link className="link" href="#pricing"><Link to="/about" style={{textDecoration:"none",color:"black"}}>About</Link></Nav.Link>
            <Nav.Link className="link" href="#pricing">Shop</Nav.Link>
            <Nav.Link className="link" href="#pricing">Contact</Nav.Link>
            
          </Nav>
          <Nav >
            <Nav.Link className="me-auto link" href="#deets"><BiSearchAlt2 /></Nav.Link>
            <Nav.Link className="link" eventKey={2} href="#memes">
              <BsFillCartCheckFill/>
            </Nav.Link>
            <Nav.Link className="link" eventKey={2} href="#memes">
              <Shop/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;