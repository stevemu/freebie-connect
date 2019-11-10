import React from "react";
// import './Footer.css';

import {Navbar, Nav} from "react-bootstrap";

function Footer() {
    return (
      //   <div className="fixed-bottom">
      <div
        className="footer"
        style={{
          fontFamily: "Jomolhari, serif",
          fontWeight: "bold"
        }}
      >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/contactUs">Contact Us</Nav.Link>
              <Nav.Link href="/Support">Support</Nav.Link>
            </Nav>
            <p className="text-info">&copy;{new Date().getFullYear()}</p>
          </Navbar.Collapse>
        </Navbar>
      </div>
      //   </div>
    );
}
export default Footer;
