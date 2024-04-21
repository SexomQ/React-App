import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Happy from "./CinemaMovies/Happy.js";


function Movies() {
    return (
        <div className="Movies mt-5 bg-body-tertiary text-body-emphasis">
            <Container>
                <h3 className="pt-5 mx-auto" style={{textAlign: "center"}}>Latest Movies</h3>
                <Happy />
            </Container>
        </div>
    );
}

export default Movies;