import React from 'react';
import NavbarBar from './components/Navbar.js';
import Movies from './components/Movies.js';


import { ThemeContext } from './components/ThemeContext.js'; // Import ThemeContext

function App() {

    const { theme } = React.useContext(ThemeContext); // Use the context hook to access the context

    // const [cart, setCart] = React.useState([]);

    const cart = JSON.parse(localStorage.getItem('cart'));

    const handleAdd = (item) => {
        // if (!cart.includes(item)) {
        //     setCart([...cart, item]);
            
        // }
        const cart = JSON.parse(localStorage.getItem('cart')) ;
        if (!cart.some(cartItem => cartItem.id === item.id)) {
            const newCart = [...cart, item];
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
        console.log(cart);
        
    }

    return (
        <div data-bs-theme={`${theme}`}>
            <NavbarBar cart_items={cart}/>
            <Movies handleAdd={handleAdd}/>
        </div>
    );
}

export default App;