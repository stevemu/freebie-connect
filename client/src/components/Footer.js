import React from "react";
// import './Footer.css';

import {Navbar, Nav} from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/contactUs">Contact Us</Nav.Link>
            <Nav.Link href="/Support">Support</Nav.Link>
          </Nav>
                  &copy;{new Date().getFullYear()}
                  
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Footer;
