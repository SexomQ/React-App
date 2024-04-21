import React from "react";
import { Card, Button, CardFooter } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './Happy.css';

const HappyCard = ({ item }) => {
    return (
        <div className="mt-5 d-flex justify-content-between w-100 cards">
            {
                item.map((movie, index) => {
                    return (
                        <>
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
                        </>
                    );
                })
            }
        </div>
    );
}

export default HappyCard;