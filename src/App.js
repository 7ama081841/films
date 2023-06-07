import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";

function App() {
    const [films, setFilms] = useState([]);

    // get data
    const getData = async () => {
        const res = await axios.get("https://api.tvmaze.com/schedule/full");
        setFilms(res.data.map((items) => items._embedded.show));
        // console.log(res.data.map((items) => items.show));
    };

    const searchFilms = async (word) => {
        if (word === "") {
            getData();
        } else {
            const res = await axios.get(
                `https://api.tvmaze.com/search/shows?q=${word}`
            );

            setFilms(res.data.map((items) => items.show));
        }
    };

    useEffect(() => {
        getData();
        // console.log(films);
    });

    return (
        <div className="App">
            <NavBar
                films={films}
                setFilms={setFilms}
                searchFilms={searchFilms}
            />
            <Container className=" ">
                <MoviesList films={films} />
            </Container>
        </div>
    );
}

export default App;
