import React, {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavLink from 'react-bootstrap/NavLink';

import {
  Navbar,
  Nav,
  Container,
  Form,
  NavDropdown,
  Button,
  FormControl,
  ButtonToolbar,
  
} from 'react-bootstrap';

// import freebiesImage from '../images/test.jpg';


function Home() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          
        {/* <Col xs={6} md={4}>
            <img src={freebiesImage} style={{ width: 100, height: 30 }} />
          </Col> */}
        <Navbar.Brand href="#home">FreeBieConnect</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#post">Post</Nav.Link>
            <Nav.Link href="#request">Request</Nav.Link>
          </Nav>
          <Nav>
            <ButtonToolbar>
              <Button variant="info" size="lg">SingUp</Button>
              <Button variant="info" size="lg">Login</Button>
            </ButtonToolbar>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      

    </div>
  );
    
  
}

export default Home;




