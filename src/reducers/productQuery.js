const productQuery = (state = "", action) => {
  switch (action.type) {
    case "SET_PRODUCT_QUERY":
      return action.payload;
    default:
      return state;
  }
};

export default productQuery;
