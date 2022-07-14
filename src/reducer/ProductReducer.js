import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAIL } from "../constants";

const initialState = {
  isLoading: false,
  products: null,
  errorMessage: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };
    case PRODUCT_SUCCESS:
      return {
        isLoading: false,
        errorMessage: "",
        products: action.payload,
      };
    case PRODUCT_FAIL:
      return {
        isLoading: false,
        errorMessage: action.payload,
        products: null,
      };
    default:
      return state;
  }
};

export default productReducer;
