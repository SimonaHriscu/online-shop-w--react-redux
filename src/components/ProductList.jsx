import React from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

class ProductList extends React.Component {
  render() {
    const { items } = this.props;

    const allItems = items.map((item) => {
      return <ProductItem key={item.id} info={item} />;
    });

    return (
      <React.Fragment>
        <ul>{allItems}</ul>
      </React.Fragment>
    );
  }
}

const mapStoreToProps = (store) => ({
  items: Object.values(store.products),
});

export default connect(mapStoreToProps)(ProductList);

