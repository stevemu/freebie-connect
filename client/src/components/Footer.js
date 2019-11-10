import React from "react";
// import './Footer.css';

import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer() {
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
}
export default Footer;
