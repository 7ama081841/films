import React from "react";
import { Col } from "react-bootstrap";
import image from "../images/Film-App-Logo.png";
import { Link } from "react-router-dom";

const CartMovie = ({ items }) => {

    return items._embedded ? (
        <Col xs="6" sm="6" md="4" lg="3" className="my-1">
            <Link to={`/movei/${items.id}`}>
                <div className="card">
                    <img
                        src={
                            items._embedded.show.image !== null
                                ? items._embedded.show.image.original
                                : image
                        }
                        className="card-image"
                        alt="image"
                    />
                    <div className="card-overlay d-flex flex-column justify-content-center ">
                        <p>title : {items._embedded.show.name} </p>
                        <p>language : {items._embedded.show.language} </p>
                        <p>premiered : {items._embedded.show.premiered} </p>
                    </div>
                </div>
            </Link>
        </Col>
    ) : (
        <Col xs="6" sm="6" md="4" lg="3" className="my-1">
            <Link to={`/movei/${items.id}`}>
                <div className="card">
                    <img
                        src={
                            items.image !== null
                                ? items.image.original
                                : image
                        }
                        className="card-image"
                        alt="image"
                    />
                    <div className="card-overlay d-flex flex-column justify-content-center ">
                        <p>title : {items.name} </p>
                        <p>language : {items.language} </p>
                        <p>premiered : {items.premiered} </p>
                    </div>
                </div>
            </Link>
        </Col>
    );
};

export default CartMovie;
