export const fetchProductsStart = () => ({ type: "FETCH_PRODUCTS_START" });

export const fetchProductsSuccessful = products => ({
  type: "FETCH_PRODUCTS_SUCCESSFUL",
  payload: products
});

export const fetchProductsFailed = errorMsg => ({
  type: "FETCH_PRODUCTS_FAILED",
  payload: errorMsg
});

export const setProductQuery = query => ({
  type: "SET_PRODUCT_QUERY",
  payload: query
});
