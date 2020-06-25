import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    //console.log(this.props.data[1].price);
    const newArr = [];
    this.props.data.forEach((item) => {
      newArr.push(item.price);
    });
   console.log(newArr);
  
    this.submitFilter = (e) => {
      e.preventDefault();
      const newArr = [];
    this.props.data.forEach((item) => {
      newArr.push(item.price);
    });
   console.log(newArr);
  
      const newArray = newArr.filter((item) => item >= 10);
      console.log(newArray);
   const sortArr = newArray.forEach(item =>
        console.log(item.id))
      this.setState({
        filteredData1: sortArr ,
      })
   }
  }
  
  render() {
    return (
      <nav>
        <div className="logo">
          <p>Swish</p>
        </div>

        <div className="filters-box">
          <div className="title">Filters</div>
          <div className="filters">
            <div className="title">#0-10 $</div>
            <button type="submit" name="name" onClick={this.submitFilter}>
              {" "}
              #over 10 $
            </button>
            <div className="filter3">Glutenfree</div>
          </div>
        </div>

        <div className="cart">
          <i className="fas fa-concierge-bell"></i>
          <div className="order-status">ORDER STATUS</div>
          <div className="items-no">0</div>
        </div>
      </nav>
    );
  }
}
