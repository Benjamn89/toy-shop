import React, { Component } from "react";
// Import Components
import Navbar from "./NAVBAR/navbar";
import Products from "./PRODUCTS/products";

import "./shop-container.scss";
class LogedIn extends Component {
  render() {
    console.log("UserLogedContainer -> REDNER!!!");
    return (
      <div className="loged-in-div">
        <Navbar />
        <Products />
      </div>
    );
  }
}
export default LogedIn;
