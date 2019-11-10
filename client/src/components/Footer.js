import React from "react";
// import './Footer.css';

import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer() {
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
}
export default Footer;
