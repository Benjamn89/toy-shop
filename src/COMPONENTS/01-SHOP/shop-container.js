import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
// Import Components
import Navbar from "./NAVBAR/navbar";
import Products from "./PRODUCTS/products";
import About from "./ABOUT/about";
import Product from "./PRODUCT/product";
import Cart from "./CART/cart";

import "./shop-container.scss";
class LogedIn extends Component {
  shouldComponentUpdate(nP, nS) {
    if (this.props.logOn.view !== nP.logOn.view) {
      return true;
    }
    return false;
  }

  render() {
    let currectView = <About />;
    if (this.props.logOn.view === "Products") {
      currectView = <Products />;
    }
    if (this.props.logOn.view === "Cart") {
      currectView = <Cart />;
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

export default connect(mapStateToProps, null)(withRouter(LogedIn));
