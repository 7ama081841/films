import axios from "axios";
import { ALLMOVIE, SEARCHMOVIE } from "../types/typeMovie";

export const getAllMovies = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get("https://api.tvmaze.com/schedule/full");
            dispatch({ type: ALLMOVIE, data: res.data });
            // console.log({ getAllMovies: res.data });  
        } catch (errer) {
            console.log(errer);
        }
    };
};

export const searchMovies = (keyword) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(
                `https://api.tvmaze.com/schedule/full?q=${keyword}`
            );
            dispatch({ type: SEARCHMOVIE, data: res });  
            console.log({ searchMovies : res });
        } catch (error) {
            console.log(error);
        }
    };
};

