import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
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

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand
          href="#home"
          style={{
            fontFamily: "Yeon Sung, cursive",
            fontWeight: "bold"
          }}
        >
          <h1>FreeBieConnect</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
           <h3> <Nav.Link href="/home">Home</Nav.Link></h3>
            {isAuthenticated && (
              <>
                <Nav.Link href="/offer">Offer an Item</Nav.Link>
                <Nav.Link href="/request">Request an Item</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            <ButtonToolbar>
              {!isAuthenticated && (
                <Button
                  variant="info"
                  size="lg"
                  onClick={() => loginWithRedirect({})}
                >
                  Log In/Sign Up
                </Button>
              )}
              {isAuthenticated && (
                <Button variant="info" size="lg" onClick={() => logout()}>
                  Log out
                </Button>
              )}
            </ButtonToolbar>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
