import React from "react";
import { Row } from "react-bootstrap";
import CartMovie from "./CartMovie";

const MoviesList = ({ films }) => {

    // console.log(films.id)

    return (
        <Row className=" d-flex ">
            {films.length > 0 ? (
                films.map((items , index ) => <CartMovie key={index}  items={items} />)
            ) : (
                <div>Il n'y a pas de films</div>
            )}
        </Row>
    );
};

export default MoviesList;
