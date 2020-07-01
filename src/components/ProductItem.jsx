import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions";

class ProductItem extends React.Component {
  render() {
    const { info, addProduct } = this.props;
   // console.log(this.props);
    return (
      <li>
        <span>
          <div className="product-title">
           <p> {info.productName}</p> <i>{info.icon}</i>
           </div>
          <div className="product-price">{info.price}€</div>
          <div className="product-inventory">
            {info.inventory > 0
              ? `x ${info.inventory} items left`
              : <div className="out-of-stock">Out of stock</div>}
          </div>
        </span>

        
          <button className="product-add"
            onClick={() => addProduct(info)}
            disabled={info.inventory === 0}
          >
            {info.inventory > 0 ? "Add to cart" : "Sold out"}
          </button>
       

      </li>
    );
  }
}

const mapStoreToProps = (store) => {};
const mapActionsToProps = {
  addProduct,
};
export default connect(mapStoreToProps(), mapActionsToProps)(ProductItem);
