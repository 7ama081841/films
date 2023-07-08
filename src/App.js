import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";

import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllMovies } from "./redux/actions/movieAction";

function App() {
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

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Container>
                    <Routes>
                        <Route exact path="/" element={<MoviesList />} />
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
