import React from 'react';

const Header =()=>{
    return(
    <nav>
    <div class="logo">
      <p>Swhish</p>
    </div>

    <div class="filters-box">
      <div class="title">Filters</div>
      <div class="filters">
        <div class="filter1">#0-10 $</div>
        <div class="filter2">#over 10 $</div>
        <div class="filter3">Glutenfree</div>
      </div>
    </div>

    <div class="cart">
      <i class="fas fa-concierge-bell"></i>
      <div class="order-status">ORDER STATUS</div>
      <div class="items-no">0</div>
    </div>
  </nav>
    )
}

export default Header;