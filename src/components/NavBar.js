import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/Film-App-Logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllMovies, searchMovies } from "../redux/actions/movieAction";

const NavBar = () => {
    const dispatch = useDispatch();

    const search_Movies = (keyword) => {
        if (keyword === "") {
            dispatch(getAllMovies());
            console.log("getAllMovies");
        } else {
            dispatch(searchMovies(keyword));
            console.log("searchMovies");
        } 
    };

    return (
        <div className="nav-style w-100">
            <Container>
                <Row className="pt-2">
                    <Col xs="2" lg="1">
                        <Link to="/">
                            <img className="logo" src={logo} alt="logo" />
                        </Link>
                    </Col>
                    <Col xs="10" lg="11" className="d-flex align-items-center">
                        <div className="search w-100 relative ">
                            <i className="fa fa-search mx-2 d-flex align-items-center justify-content-center "></i>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="search"
                                onChange={(e) => search_Movies(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavBar;
