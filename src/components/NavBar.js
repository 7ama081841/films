import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/Film-App-Logo.png";

const NavBar = ({ searchFilms }) => {
    const onSearch = (word) => {
        searchFilms(word);
    };

    return (
        <div className="nav-style w-100">
            <Container>
                <Row className="pt-2">
                    <Col xs="2" lg="1">
                        <img className="logo" src={logo} alt="logo" />
                    </Col>
                    <Col xs="10" lg="11" className="d-flex align-items-center">
                        <div className="search w-100 relative ">
                            <i className="fa fa-search mx-2 d-flex align-items-center justify-content-center "></i>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="search"
                                onChange={(e) => onSearch(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavBar;
