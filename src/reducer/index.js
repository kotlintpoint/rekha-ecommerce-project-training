import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import loginReducer from "./LoginReducer";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
