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

        setFilms(res.data);
        // console.log(res.data);
    };

    useEffect(() => {
        getData();
    } , []);

    const searchFilms = (word) => {
        if (word === "") {
            getData();
        } else {
            const filteredFilms = films.filter((item) =>
                item._embedded.show.name
                    .toLowerCase()
                    .includes(word.toLowerCase())
            );

            setFilms(filteredFilms);
            console.log(films);
        }
    };

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
