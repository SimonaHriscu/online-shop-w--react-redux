import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./App.js";
//  step 3.
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
// products data
import products from "./data.json";
//console.log(allReducers)
//console.log(products)
const store = createStore(
  allReducers,
  {
    products: products,
    cart: {},
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
