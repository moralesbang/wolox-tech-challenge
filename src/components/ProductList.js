import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import styles from "../assets/styles/ProductList.module.scss";

function ProductList({ products }) {
  return (
    <div>
      <div className={styles.wrapper}>
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sku: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      imageURL: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default ProductList;
