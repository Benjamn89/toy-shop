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
    const classN = e.target.className;
    productsBtn(classN);
  };

  render() {
    console.log("Navbar -> REDNER!!!");

    return (
      <div className="navbar-div">
        <div className="cart-div" onClick={this.moveToSection}>
          <button className="cart-div-btn">Cart</button>
          <div className="cart-logo"></div>
          <div className="cart-logo1"></div>
          <div className="cart-logo1-black"></div>
          <div className="cart-logo2"></div>
          <div className="cart-wheel1"></div>
          <div className="cart-wheel2"></div>
          <div className="cart-circle-div">
            <span>1</span>
          </div>
        </div>
        <div className="products-div" onClick={this.moveToSection}>
          <button className="products-div-btn">Products</button>
        </div>
        <div className="about-div" onClick={this.moveToSection}>
          <button className="about-div-btn">About</button>
        </div>
        <div className="logout-div" onClick={this.logOut}>
          <button className="logout-div-btn">LogOut</button>
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
