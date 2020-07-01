import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./data.json";
import Header from "./components/header/Header";
import ProductList from "./components/ProductList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: Data,
      searchData: [],
      filteredData1: [],
    };
  }
  // submitFilter = (e) => {
  //   e.preventDefault();
  //   const newArr = [];
  //   this.props.data.forEach((item) => {
  //     if (item.price >= 20) {
  //       newArr.push(item);
  //       console.log(newArr);
  //     }
  //   });
  //   this.setState({
  //   filteredData1: newArr ,
  // })
  //}

  changeHandle = (e) => {
    // console.log(e.target.value.trim())
    this.setState({
      userInput: e.target.value.trim(),
    });
  };

  submitHandle = (e) => {
    e.preventDefault();
    const userText = this.state.userInput.toLocaleLowerCase();
    let newArr = this.state.data.filter((item) => {
      if (item.productName.toLocaleLowerCase().includes(userText)) {
        return item;
      }
    });
    this.setState({
      searchData: newArr,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          data={Data}
          submitFilter={(e) =>
            this.setState({ filteredData1: this.submitFilter })
          }
        />
        <div className="container">
          <h1>Welcome to our online store</h1>
          <form onKeyUp={this.submitHandle}>
            <input
              type="text"
              onChange={this.changeHandle}
              value={this.state.userInput}
            />
            <input type="submit" value="Search" />
          </form>
          <ProductList
            data={
              this.state.userInput ? this.state.searchData : this.state.data
            }
          />
        </div>
      </React.Fragment>
    );
  }
}
