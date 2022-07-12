import axios from "axios";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";

export const loginRequest = (username, password) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}login`,
        {
          username,
          password,
        }
      );
      if (response.status === 200) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
      } else {
        console.log(response);
        dispatch({
          type: LOGIN_FAIL,
          payload: response.data.message,
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error,
      });
    }
  };
};
