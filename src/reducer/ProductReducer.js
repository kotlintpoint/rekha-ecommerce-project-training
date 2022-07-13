const initialState = {
  isLoading: false,
  products: undefined,
  errorMessage: "",
};

const productReducer = (state = initialState, action) => {
  switch (
    action.type
    // 1. 2. 3 case
    // on  success payload will get product array
    // on fail error in payload
  ) {
  }
};

export default productReducer;
