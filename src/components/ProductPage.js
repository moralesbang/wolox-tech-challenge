import React from "react";
import Searchbox from "./Searchbox";
import FilteredProductList from "./FilteredProductList";

function ProductPage() {
  return (
    <React.Fragment>
      <Searchbox />
      <FilteredProductList />
    </React.Fragment>
  );
}

export default ProductPage;
