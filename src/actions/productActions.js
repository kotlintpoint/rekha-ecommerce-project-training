import axios from "axios";
import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../constants";

export const productRequest = (token) => {
  return async (dispatch) => {
    dispatch({
      type: PRODUCT_REQUEST,
    });
    try {
      console.log("token", token);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}products`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch({
          type: PRODUCT_SUCCESS,
          payload: response.data.products,
        });
      } else {
        console.log(response);
        dispatch({
          type: PRODUCT_FAIL,
          payload: response.data.message,
        });
      }
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: PRODUCT_FAIL,
        payload: error,
      });
    }
  };
};
