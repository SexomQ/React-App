import React from 'react';
import NavbarBar from './components/Navbar.js';
import Movies from './components/Movies.js';


import { ThemeContext } from './components/ThemeContext.js'; // Import ThemeContext
import { useEffect } from 'react';

function App() {

    const { theme } = React.useContext(ThemeContext); // Use the context hook to access the context

    // const [cart, setCart] = React.useState([]);
    const [cineplex, setCineplex] = React.useState([]);
    const [happy, setHappy] = React.useState([]);
    const [token, setToken] = React.useState(''); // token for the user

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

    const handleTokenGeneration = () => {
        fetch('http://127.0.0.1:5000/api/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
        .then(data => {
            console.log('Data:', data);
            setToken(data.access_token);
        });
    }

    const handleDeleteDB = () => {
        fetch('http://127.0.0.1:5000/api/clear-cineplex', {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'X-Delete-Password': '1234'
            },
        }).then(response => response.json())
        .then(data => {
            setCineplex(data);
        });
        fetch('http://127.0.0.1:5000/api/clear-happy', {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'X-Delete-Password': '1234'
            },
        }).then(response => response.json())
        .then(data => {
            setHappy(data);
        });
    }

    useEffect(() => {
        // refresh the movies in the database
        fetch('http://127.0.0.1:5000/api/update_movies/cineplex', {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        });
        fetch('http://127.0.0.1:5000/api/update_movies/happy', {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        });

        // get the movies from the database
        fetch('http://127.0.0.1:5000/api/cineplex-movies', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
        .then(data => {
            console.log('Data:', data);
            console.log('sdfs', data);
            setCineplex(data);
        });

        fetch('http://127.0.0.1:5000/api/happy-movies', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
        .then(data => {
            console.log('Data:', data);
            setHappy(data);
        })
    }, []);

    useEffect(() => {
        console.log('Cineplex updated:', cineplex);
    }, [cineplex]);  // This will log every time `cineplex` changes

    useEffect(() => {
        console.log('Happy updated:', happy);
    }, [happy]);  // This will log every time `happy` changes

    useEffect(() => {
        console.log('Token:', token);
    }, [token]);  // This will log every time `token` changes

    return (
        <div data-bs-theme={`${theme}`}>
            <NavbarBar cart_items={cart} handleDeleteDB={handleDeleteDB} handleTokenGeneration={handleTokenGeneration} token={token}/>
            <Movies handleAdd={handleAdd} cineplexMovies={cineplex} happyMovies={happy}/>
        </div>
    );
}

export default App;