import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";

const initialState = {
  isLoading: false,
  userDetail: {},
  errorMessage: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        isLoading: false,
        errorMessage: "",
        userDetail: action.payload,
      };
    case LOGIN_FAIL:
      return {
        isLoading: false,
        errorMessage: action.payload,
        userDetail: {},
      };
    default:
      return state;
  }
};

export default loginReducer;
