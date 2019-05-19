import { combineReducers } from "redux";
import products from "./products";
import productQuery from "./productQuery";

export default combineReducers({ productQuery, products });
