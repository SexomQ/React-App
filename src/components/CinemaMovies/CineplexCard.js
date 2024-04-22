import React from "react";
import { Card, Button, CardFooter } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './cards.css';

const CineplexCard = ({ items_ }) => {
    return (
        <div className="mt-4 d-flex flex-wrap justify-content-start w-100 cards">
            {
                items_.map((movie, index) => {
                    return (
                        <>
                            <div className="card_container">
                                <Card className="card_content" key={index}>
                                    <Card.Img variant="top" src={movie.img} key={index} />
                                    <Card.Body>
                                        <Card.Title>{movie.title}</Card.Title>
                                        <Card.Text>{movie.category}</Card.Text>
                                    </Card.Body>
                                    <CardFooter movie={movie}>
                                        <center>
                                            <Button className="card_button" href={movie.url}>See on webpage</Button>
                                        </center>
                                    </CardFooter>
                                </Card>
                            </div>
                        </>
                    );
                })
            }
        </div>
    );
}

export default CineplexCard;