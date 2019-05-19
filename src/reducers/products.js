const products = (state = { items: [], isFetching: false }, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
      return Object.assign({}, state, { isFetching: true });
    case "FETCH_PRODUCTS_SUCCESSFUL":
      return Object.assign({}, state, {
        items: action.payload,
        isFetching: false
      });
    case "FETCH_PRODUCTS_FAILED":
      return Object.assign({}, state, { productsError: action.payload });
    default:
      return state;
  }
};

export default products;
