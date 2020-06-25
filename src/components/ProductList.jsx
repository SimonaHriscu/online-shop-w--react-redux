import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  
  const items = props.data.map((item, i) => {
    return <ProductItem key = {i} info={item} />;
  });
  
  return (
    <React.Fragment>
      <ul>{items}</ul>
     
    </React.Fragment>
  );
};

export default ProductList;
