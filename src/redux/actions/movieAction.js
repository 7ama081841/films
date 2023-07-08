import axios from "axios";
import { ALLMOVIE } from "../types/typeMovie";

export const getAllMovies = () => async (dispatch) => {
    try {
        const res = await axios.get("https://api.tvmaze.com/schedule/full");
        dispatch({ type: ALLMOVIE, data: res.data });
    } catch (errer) {
        console.log(errer);
    }
};

export const searchMovies = (keyword) => async (dispatch) => {
    try {
        const res = await axios.get(
            `https://api.tvmaze.com/schedule?q=${keyword}`
        );
        dispatch({ type: ALLMOVIE, data: res.data.map((item) => item.show) });
        console.log({ searchMovies: res.data.map((item) => item.show) });
    } catch (error) {
        console.log("mathamech data ");
    }
};
