import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigation.css';
import logo from '../../img/logo.png'
import {NavLink} from 'react-router-dom';
import { useState } from 'react';
function BasicExample() {

  const [nav, setActivNav] = useState(false);
  
  const activeNav = () => {
    if (window.scrollY >= 80) {
      setActivNav(true)
    } else {
      setActivNav(false)
    }
  }

  window.addEventListener('scroll' , activeNav)





  return (
    <Navbar className={ nav ? 'navActive ranz' : 'nav' }  expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}> <img src= {logo} alt='sora'/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav_links">
            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={"/About"}>About</Nav.Link>
            <Nav.Link as={NavLink} to={"/COLLECTION"}>COLLECTION</Nav.Link>
            <Nav.Link as={NavLink} to={"/Blog"}>Blog</Nav.Link>
            <Nav.Link as={NavLink} to={"/Contact"}>Contact</Nav.Link>        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;