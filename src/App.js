import React from 'react';
import NavbarBar from './components/Navbar.js';
import Movies from './components/Movies.js';


import { ThemeContext } from './components/ThemeContext.js'; // Import ThemeContext

function App() {

    const { theme } = React.useContext(ThemeContext); // Use the context hook to access the context

    const [cart, setCart] = React.useState([]);

    const handleAdd = (item) => {
        if (!cart.includes(item)) {
            setCart([...cart, item]);
            
        }
    }

    return (
        <div data-bs-theme={`${theme}`}>
            <NavbarBar cart_items={cart} setCart={setCart}/>
            <Movies handleAdd={handleAdd}/>
        </div>
    );
}

export default App;