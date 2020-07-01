import React, { Component } from "react";
import Header from "./components/header/Header";
import ProductList from "./components/ProductList";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
        />
        <div className="container">
          <h1>All Products</h1>
          <ProductList/>
        </div>
      </React.Fragment>
    );
  }
}
