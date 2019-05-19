import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductsStart } from "../actions";
import ProductList from "./ProductList";

class FilteredProductList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProductsStart());
  }

  render() {
    const { products } = this.props;
    return <ProductList products={products} />;
  }
}

const getFilteredProducts = (products, query) => {
  return products.filter(product => product.name.includes(query));
};

const mapStateToProps = state => ({
  products: getFilteredProducts(state.products.items, state.productQuery)
});

export default connect(mapStateToProps)(FilteredProductList);
