import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

const Header = () =>{
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">excel2json</Navbar.Brand>
            <Nav className="">
              <Nav.Link href="https://github.com/jnorberto23/excel2json" target="_blank">About</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
}

export default Header;

