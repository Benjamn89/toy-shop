import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
// Import Components
import Navbar from "./NAVBAR/navbar";
import Products from "./PRODUCTS/products";
import About from "./ABOUT/about";
import Product from "./PRODUCT/product";

import "./shop-container.scss";
class LogedIn extends Component {
  render() {
    let currectView = <About />;
    if (this.props.logOn.view === "Products") {
      currectView = <Products />;
    }

    console.log("ShopContainer -> REDNER!!!");
    return (
      <div className="loged-in-div">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => currectView} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
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
