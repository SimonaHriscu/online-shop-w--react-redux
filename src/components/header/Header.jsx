import React from "react";

const Header = ({submitFilter}) => {
  return (
    <nav>
      <div className="logo">
        <p>Swish</p>
      </div>

      <div className="filters-box">
        <div className="title">Filters</div>
        <div className="filters">
          <div className="filter1">#0-10 $</div>
          <div className="filter2">#over 10 $</div>
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
};

export default Header