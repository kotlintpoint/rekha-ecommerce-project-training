import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constants";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT:
      const remainingProducts = state.products.filter(
        (theProduct) => theProduct.id !== action.payload.id
      );
      return {
        products: remainingProducts,
      };
    default:
      return state;
  }
};

export default cartReducer;
