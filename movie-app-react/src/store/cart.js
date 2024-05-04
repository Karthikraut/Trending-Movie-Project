import {configureStore} from "@reduxjs/toolkit"; 
import movieReducer from "./movieSlice";
import tvReducer from "./tvSlice";
import personReducer from "./personSlice";

const cart = configureStore({
    reducer: {
        movie: movieReducer,
        tv: tvReducer,
        person: personReducer
    }
})

export default cart;