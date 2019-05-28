import React from "react";
import PropTypes from "prop-types";
import styles from "../assets/styles/Product.module.scss";

function Product(props) {
  function truncate(str, length) {
    if (str.length > length) {
      return str.substring(0, length - 3) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className={styles.wrapper}>
      <img src={props.imageURL} alt={props.name} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.price}>${props.price}</div>
        <hr className={styles.divider} />
        <p className={styles.description}>{truncate(props.description, 62)}</p>
      </div>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number,
  sku: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  imageURL: PropTypes.string,
  description: PropTypes.string
};

export default Product;
