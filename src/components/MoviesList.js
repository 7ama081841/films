import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CartMovie from "./CartMovie";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/actions/movieAction";

const MoviesList = () => {
    const [films, setFilms] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies()).catch((error) => {
            console.log(error);
        });
    }, []);

    const dataMovies = useSelector((state) => state.movies);

    useEffect(() => {
        setFilms(dataMovies.movies);
    }, [dataMovies]);

    return (
        <Row className=" d-flex ">
            {films.length > 0 ? (
                films.map((items, index) => (
                    <CartMovie key={index} items={items} />
                ))
            ) : (
                <div>Il n'y a pas de films</div>
            )}
        </Row>
    );
};

export default MoviesList;
