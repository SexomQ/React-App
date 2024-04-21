import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ThemeContext } from './ThemeContext.js'; // Import ThemeContext


function NavbarBar(){
    
    const { theme, toggleTheme } = useContext(ThemeContext); // Use the context hook to access the context

    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top" >
          <Container>
            <Navbar.Brand href="#home"><b>MovieJoy</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-end" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ms-auto">
                    <Nav.Link href="#Movies">All Movies</Nav.Link>
                    <Nav.Link href="#Recommend">Recommended</Nav.Link>
                </Nav>
                {/* add a button to toggle the dark theme */}
                <Nav className="justify-content-end">
                    <Nav.Link onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default NavbarBar;