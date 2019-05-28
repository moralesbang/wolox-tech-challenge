import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductsStart } from "../actions";
import ProductList from "./ProductList";
import WithLoading from "../helpers/WithLoading";

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
    const { isFetching, products } = this.props;
    const ProductListWithLoading = WithLoading(ProductList); // Use HOC for loading message

    return (
      <ProductListWithLoading isFetching={isFetching} products={products} />
    );
  }
}

const getFilteredProducts = (products, query) => {
  return products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
};

const mapStateToProps = state => ({
  products: getFilteredProducts(state.products.items, state.productQuery),
  isFetching: state.products.isFetching
});

export default connect(mapStateToProps)(FilteredProductList);
