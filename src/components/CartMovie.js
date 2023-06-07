import React from "react";
import { Col } from "react-bootstrap";
import image from "../images/Film-App-Logo.png";

const CartMovie = ({ items }) => {

    return (
        <Col xs="6" sm="6" md="4" lg="3" className="my-1">
            <div className="card">
                <img
                    src={items.image !== null ? items.image.original : image}
                    className="card-image"
                    alt="image"
                />
                <div className="card-overlay d-flex flex-column justify-content-center ">
                    <p>title : {items.name} </p>
                    <p>language : {items.language} </p>
                    <p>premiered : {items.premiered} </p>
                    <a href={items.officialSite} target="_blanks">
                        site official
                    </a>
                </div>
            </div>
        </Col>
    );
};

export default CartMovie;
