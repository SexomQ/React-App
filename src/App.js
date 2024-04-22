import React from 'react';
import NavbarBar from './components/Navbar.js';
import Movies from './components/Movies.js';


import { ThemeContext } from './components/ThemeContext.js'; // Import ThemeContext

function App() {

    const { theme } = React.useContext(ThemeContext); // Use the context hook to access the context

    return (
        <div data-bs-theme={`${theme}`}>
            <NavbarBar />
            <Movies />
        </div>
    );
}

export default App;