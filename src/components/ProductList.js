import React from "react";
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

export default ProductList;
