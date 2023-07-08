import { ALLMOVIE } from "../types/typeMovie";

const initialState = {
    movies: [],
    searchResults: [],
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALLMOVIE:
            return { ...state, movies: action.data };
        default:
            return state;
    }
};

export default movieReducer;
