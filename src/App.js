import React, { Component } from "react";
import Data from "./data.json";
import Header from './components/header/Header'
import ProductList from "./components/ProductList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: Data,
      filteredData: [],
    };
  }
  changeHandle = (e) => {
   // console.log(e.target.value.trim())
    this.setState({
      userInput: e.target.value.trim(),
    });
  };

  submitHandle = (e) => {
    e.preventDefault();
    const userText = this.state.userInput.toLocaleLowerCase();
    let newArr = this.state.data.filter(
      (item) => item.productName === userText
    );
    this.setState({
      filteredData: newArr,
    });
  };


  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className='container'>
        <h1>Welcome to our online store</h1>
        <form onSubmit={this.submitHandle}>
          <input
            type="text"
            onChange={this.changeHandle}
            value={this.state.userInput}
          />
          <input type="submit" value="Search" />
        </form>
        <ProductList
          data={
            this.state.userInput ? this.state.filteredData : this.state.data
          }
        />
        </div>
      </React.Fragment>
    );
  }
}