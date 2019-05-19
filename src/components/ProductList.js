import React from "react";

function ProductList({ products }) {
  return (
    <div>
      <ul>
        {products.map(product => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
