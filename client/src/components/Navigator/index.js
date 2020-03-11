import React from "react";
import "./style.css";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTag } from '@fortawesome/free-solid-svg-icons'



function Navigator() {
  

  return (
      <Container>
        <Navbar variant="tabs" id="nav">
          <Navbar.Brand href="#home">
            Google Books Search <i>navigation</i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/saved">Saved Books</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">Search Books</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  );
}

export default Navigator;