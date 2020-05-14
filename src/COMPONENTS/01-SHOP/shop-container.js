import React, { Component } from "react";
import { connect } from "react-redux";
// Import Components
import Navbar from "./NAVBAR/navbar";
import Products from "./PRODUCTS/products";
import About from "./ABOUT/about";

import "./shop-container.scss";
class LogedIn extends Component {
  render() {
    let currectView = <About />;
    if (this.props.logOn.view === "Products") {
      currectView = <Products />;
    }

    console.log("UserLogedContainer -> REDNER!!!");
    return (
      <div className="loged-in-div">
        <Navbar />
        {currectView}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logOn: state.logOnReducer,
  };
};

export default connect(mapStateToProps, null)(LogedIn);
