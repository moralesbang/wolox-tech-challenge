import { call, put, takeEvery } from "redux-saga/effects";
import { requestProducts } from "./api";
import * as actions from "./actions";

function* fetchProducts() {
  try {
    const products = yield call(requestProducts);
    yield put(actions.fetchProductsSuccessful(products.data));
  } catch (error) {
    yield put(actions.fetchProductsFailed(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery("FETCH_PRODUCTS_START", fetchProducts);
}
