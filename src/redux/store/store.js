import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "../reducer/movieReducer";

const rootReducer = combineReducers({
    movies: movieReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
