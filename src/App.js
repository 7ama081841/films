import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    const [films, setFilms] = useState([]);

    // get data
    const getData = async () => {
        const res = await axios.get("https://api.tvmaze.com/schedule/full");
        // const res = await axios.get("https://api.tvmaze.com/episodes/2525519");
        // setFilms(res.data.map((items) => items._embedded.show));
        setFilms(res.data);
        // console.log(res.data)
        // console.log(res.data.map( item => item.id ))
    };

    const searchFilms = async (word) => {
        if (word === "") {
            getData();
        } else {
            const res = await axios.get(
                `https://api.tvmaze.com/search/shows?q=${word}`
            );

            // setFilms(res.data.map((items) => items.show));
            // setFilms(res.data);
            // console.log(res.data);
        }
    };

    useEffect(() => {
        getData();
    });

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar
                    films={films}
                    setFilms={setFilms}
                    searchFilms={searchFilms}
                />
                <Container>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<MoviesList films={films} />}
                        />
                        <Route
                            exact
                            path="/movei/:id"
                            element={<MovieDetails />}
                        />
                    </Routes>
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
