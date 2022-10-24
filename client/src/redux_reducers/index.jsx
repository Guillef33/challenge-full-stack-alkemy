import { combineReducers } from "redux";
import memeReducer from "./memeReducer";

export const rootReducer = combineReducers({
    meme: memeReducer
});

export default rootReducer;