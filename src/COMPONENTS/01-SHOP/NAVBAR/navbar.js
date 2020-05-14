import React, { Component } from "react";
import "./navbar.scss";

// Import functions
import { initialBtn, productsBtn, retriveSection } from "./functions";

// Import all for redux
import { connect } from "react-redux";
import actionTypes from "../../../REDUCERS/00-LOGIN-PAGE/actionType";

class Navbar extends Component {
  shouldComponentUpdate() {
    return false;
  }

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
    // Taking care to the style inside the nav
    const classN = e.target.className;
    productsBtn(classN);
    // Retrive the section name
    const section = retriveSection(classN, this.props.logOn.view);
    setTimeout(() => {
      this.props.changeView(section);
    }, 300);
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
            <span>{this.props.cartItems.length}</span>
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
    changeView: (section) => dispatch(actionTypes.changeView(section)),
  };
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.CartReducer.items,
    logOn: state.logOnReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
