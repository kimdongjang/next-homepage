import { combineReducers } from "redux";
import productsSlice from "./productReducer";

// const rootReducer = combineReducers(productsSlice.reducer);
const rootReducer = productsSlice.reducer;

export default rootReducer;