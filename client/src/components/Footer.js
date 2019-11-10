import React from "react";
// import './Footer.css';

import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer() {
<<<<<<< HEAD
  return (
    <div className="footer">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/Support">Support</NavLink>
          </Nav>
          &copy;{new Date().getFullYear()}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
=======
    return (
        
      <div class="fixed-bottom">
        <div className="footer">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/contactUs">Contact Us</Nav.Link>
                <Nav.Link href="/Support">Support</Nav.Link>
              </Nav>
              <p class="text-info">&copy;{new Date().getFullYear()}</p>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
>>>>>>> cb8f3005fd4a887c881ea1170ad772564d0c245d
}
export default Footer;
