import React from "react";

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArray: [],
    };
  }

  render() {
    const { id, productName, icon, price, inventory } = this.props.info;

    const handleClick = (e) => {
      e.preventDefault();

      this.setState({
        productArray: price,
      });
      console.log(this.state.productArray);
    };

    return (
      <React.Fragment>
        <li key={id}>
          <p>{productName} <i>{icon}</i></p>
          <h5>{price}<span> $</span></h5>
          <button onClick={handleClick} disabled={inventory === 0}>
            {inventory > 0 ? "Add to cart" : "Sold out"}
          </button>
        </li>
      </React.Fragment>
    );
  }
}
