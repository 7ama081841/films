import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CartMovie from "./CartMovie";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/actions/movieAction";

const MoviesList = () => {
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies())
            .then(() => setIsLoading(false))
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    const dataMovies = useSelector((state) => state.movies);

    // console.log(dataMovies);

    useEffect(() => {
        setFilms(dataMovies.movies);
    }, [dataMovies, isLoading]);

    console.log({films : films});
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
