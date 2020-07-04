import React from "react";
import { connect } from "react-redux";
import { addProduct, removeOne } from "../actions";

class ProductItem extends React.Component {
  render() {
   // console.log(this.props.info.inventory);
    const { info, addProduct, removeOne } = this.props;
    
    //Changing classes in the scss // adding extra text
    let classes = [];
    let extraText = "";
    if (info.inventory <= 3) {
      classes.push("out-of-stock");
      extraText = "Last";
    }

    return (
      <li>
        <span>
          <div className="product-title">
            <p> {info.productName}</p> <i>{info.icon}</i>
          </div>
          <div className="product-price">{info.price}€</div>
          <div className="product-inventory">
            {info.inventory > 0 ? (
              <div className={classes}>
                {extraText} {info.inventory} items left{" "}
              </div>
            ) : (
              <div className="out-of-stock">Out of stock</div>
            )}
          </div>
        </span>

        <button
          className="product-add"
          onClick={() => addProduct(info)}
          disabled={info.inventory === 0}
        >
          {info.inventory > 0 ? "Add to cart" : "Sold out"}
        </button>
        <button
          className="product-add"
          onClick={() => removeOne(info)}
          disabled={info.inventory < 0}
        >
         
          {info.inventory >= 0 ? "Delete an Item" : "Cart is empty"}
        </button>
        
      </li>
    );
  }
}

const mapStoreToProps = (store) => {};
const mapActionsToProps = {
  addProduct,
  removeOne,
};
export default connect(mapStoreToProps(), mapActionsToProps)(ProductItem);
