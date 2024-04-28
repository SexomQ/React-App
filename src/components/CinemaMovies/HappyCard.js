import React from "react";
import { Card, Button, CardFooter } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './cards.css';

const HappyCard = ({items_, handleAdd}) => {

    return (
        <div className="mt-4 d-flex flex-wrap justify-content-start w-100 cards">
            {
                items_.map((movie, index) => {
                    return (
                        <>
                            <div className="card_container">
                                <Card className="card_content" key={index}>
                                    <Card.Img variant="top" src={movie.img} key={index} />
                                    <Button className="card_button add_button" onClick={() => handleAdd(movie)} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-floppy-fill" viewBox="0 0 16 16">
                                            <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5z"/>
                                            <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM9 1h2v4H9z"/>
                                        </svg>
                                    </Button>
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

export default HappyCard;