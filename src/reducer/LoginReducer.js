import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";

const initialState = {
  isLoading: false,
  userDetail: null,
  errorMessage: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: ""
      };
    case LOGIN_SUCCESS:
      return {
        isLoading: false,
        errorMessage: "",
        userDetail: action.payload
      };
    case LOGIN_FAIL:
      return {
        isLoading: false,
        errorMessage: action.payload,
        userDetail: null
      };
    default:
      return state;
  }
};

export default loginReducer;
