import React, { Component } from "react";
import "./navbar.scss";

// Import functions
import { initialBtn, productsBtn } from "./functions";

// Import all for redux
import { connect } from "react-redux";
import actionTypes from "../../../REDUCERS/00-LOGIN-PAGE/actionType";

class Navbar extends Component {
  componentDidMount() {
    // Set active buttons on the div and button
    initialBtn();
  }

  logOut = () => {
    // Log the user out
    typeof window !== "undefined" && localStorage.removeItem("shop");
    // Fade out the page
    document
      .querySelector(".loged-in-div")
      .classList.add("loged-in-div-logout");
    // Change the state after animation complete
    setTimeout(() => {
      this.props.logOut();
    }, 300);
  };

  moveToSection = (e) => {
    if (e.target.className === "products-div") {
      productsBtn();
    }
  };

  render() {
    console.log("Navbar -> REDNER!!!");

    return (
      <div className="navbar-div">
        <div className="cart-div">
          <button className="crat-btn">Cart</button>
          <div className="cart-logo"></div>
          <div className="cart-logo1"></div>
          <div className="cart-logo1-black"></div>
          <div className="cart-logo2"></div>
          <div className="cart-wheel1"></div>
          <div className="cart-wheel2"></div>
        </div>
        <div className="products-div" onClick={this.moveToSection}>
          <button className="products-btn">Products</button>
        </div>
        <div className="about-div">
          <button className="about-btn">About</button>
        </div>
        <div className="logout-div" onClick={this.logOut}>
          <button className="logout-btn">LogOut</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(actionTypes.loginSucess()),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
