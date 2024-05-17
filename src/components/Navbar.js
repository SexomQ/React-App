import React, { useContext } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ThemeContext } from './ThemeContext.js'; // Import ThemeContext

import './Navbar.css';
import Cart from './Cart.js';

function NavbarBar({cart_items, handleDeleteDB, handleTokenGeneration, token}){
    
    const { theme, toggleTheme } = useContext(ThemeContext); // Use the context hook to access the context

    const [isAdmin, setIsAdmin] = React.useState(false);

    const handleAdmin = () => {
        if (!isAdmin) {
            handleTokenGeneration();
        }
        setIsAdmin(!isAdmin);
    }

    return (
        <Navbar expand="lg" className='navbar' fixed="top" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home" ><b>MovieJoy</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-end"  />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ms-auto">
                  {/* TODO add delete database to button */}
                  {isAdmin ? <Nav.Link onClick={handleDeleteDB} >Fuck DB</Nav.Link> : <div></div>}
                    <Nav.Link onClick={handleAdmin}>Get Admin</Nav.Link>
                    <Nav.Link href="/">All Movies</Nav.Link>
                    <Cart cart_items={cart_items}/>
                </Nav>
                {/* add a button to toggle the dark theme */}
                <Nav className="justify-content-end">
                    <Nav.Link onClick={toggleTheme} >
                    {theme === 'light' ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                  </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                    </svg>}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default NavbarBar;