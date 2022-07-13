import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  products: productReducer,
});

export default rootReducer;
