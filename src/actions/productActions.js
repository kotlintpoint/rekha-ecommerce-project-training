import { PRODUCT_REQUEST } from "../constants";

export const getProducts = (token) => {
  return async (dispatch) => {
    dispatch({
      type: PRODUCT_REQUEST,
    });
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}products`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // handle respose
    } catch (error) {}
  };
};
