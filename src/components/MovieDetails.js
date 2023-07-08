import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import image from "../images/Film-App-Logo.png";
import { Col, Row } from "react-bootstrap";

const MovieDetails = () => {
    const prams = useParams();

    const [dataDetails, setDataDetails] = useState();

    const getDetails = async () => {
        try {
            const res = await axios.get(
                `https://api.tvmaze.com/episodes/${prams.id}`
            );
            getHref(res.data._links.show.href);
        } catch (errer) {
            console.log(errer);
        }
    };

    const getHref = async (details) => {
        try {
            const res = await axios.get(details);
            setDataDetails(res.data);
        } catch (errer) {
            console.log(errer);
        }
    };

    useEffect(() => {
        getDetails();
    }, []);

    console.log(dataDetails?.officialSite);

    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4">
                    <div className=" card-details d-flex align-items-center ">
                        {dataDetails?.image.original !== undefined ? (
                            <img
                                className="img-details w-30 "
                                src={dataDetails.image.original}
                                alt="image"
                            />
                        ) : (
                            <img
                                className="img-details w-30 "
                                src={image}
                                alt="image"
                            />
                        )}

                        <div className=" justify-content-center text-center mx-auto ">
                            <p className="card-text-details border-bottom ">
                                nom du film : {dataDetails?.name}
                            </p>
                            <p className="card-text-details border-bottom ">
                                langage de film : {dataDetails?.language}
                            </p>
                            <p className="card-text-details border-bottom ">
                                Genre :{" "}
                                {dataDetails && dataDetails.genres
                                    ? dataDetails.genres.join(" / ")
                                    : "..."}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    sm="12"
                    xs="12"
                    className="d-flex justify-content-center mt-2 "
                >
                    <Link to="/">
                        <button className="btn btn-primary mx-2">
                            Revenez au menu principal
                        </button>
                    </Link>
                    <a href={dataDetails?.officialSite} target="_blank">
                        <button className="btn btn-primary mx-2">
                            Aller sur le site officiel
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    );
};

export default MovieDetails;

// dataDetails?.image.original !== undefined
//                                     ? dataDetails.image.original
//                                     : image