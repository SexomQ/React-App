import React, {useState} from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Happy from "./CinemaMovies/Happy.js";
import Cineplex from "./CinemaMovies/Cineplex.js";
import DataHappy from "./CinemaMovies/DataHappy.js";
import DataCineplex from "./CinemaMovies/DataCineplex.js";


function Movies( {handleAdd}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDataHappy, setFilteredDataHappy] = useState(DataHappy);
    const [filteredDataCineplex, setFilteredDataCineplex] = useState(DataCineplex);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filteredHappy = DataHappy.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm) || movie.category.toLowerCase().includes(searchTerm)
        );
        setFilteredDataHappy(filteredHappy);

        const filteredCineplex = DataCineplex.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm) || movie.category.toLowerCase().includes(searchTerm)
        );
        setFilteredDataCineplex(filteredCineplex);
    };

    return (
        <div className="Movies mt-5 bg-body-tertiary text-body-emphasis">
            <Container>
                <h3 className="pt-5 mx-auto" style={{textAlign: "center"}}>Latest Movies</h3>
                <div className="Filter mt-3">
                    <label className="me-3">Search:</label>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <Happy items={filteredDataHappy} handleAdd={handleAdd}/>
                <Cineplex items={filteredDataCineplex} handleAdd={handleAdd}/>
            </Container>
        </div>
    );
}

export default Movies;