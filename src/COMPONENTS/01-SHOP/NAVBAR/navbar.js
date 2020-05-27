import React, { Component } from "react";
import "./navbar.scss";
import { withRouter } from "react-router-dom";

// Import functions
import {
  initialBtn,
  productsBtn,
  retriveSection,
  circleDomMani,
  sectionArr,
  productSectionOut,
} from "./functions";

// Import all for redux
import { connect } from "react-redux";
import actionTypes from "../../../REDUCERS/00-LOGIN-PAGE/actionType";

class Navbar extends Component {
  shouldComponentUpdate(nP, nS) {
    if (nP.cartItems.length !== this.props.cartItems.length) {
      return true;
    }
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
    const classN = e.target.getAttribute("keyname");
    const section = retriveSection(classN, this.props.logOn.view);
    productsBtn(classN);
    if (this.props.location.pathname.length > 1) {
      this.props.changeView(section);
      productSectionOut();
      setTimeout(() => {
        this.props.history.push("/");
      }, 300);
    } else {
      setTimeout(() => {
        this.props.changeView(section);
      }, 300);
    }
  };

  expandSqueeze = () => {
    circleDomMani();
  };

  render() {
    console.log("Navbar -> REDNER!!!");

    return (
      <div className="navbar-div">
        {sectionArr.map((el) => {
          return (
            <div
              key={el.name}
              className={el.regularClass}
              onClick={el.methodName ? this.moveToSection : this.logOut}
              keyname={el.name.toLowerCase()}
            >
              <button className={el.regularClass + "-btn"}>{el.name}</button>
              {el.additionalEl ? (
                <React.Fragment>
                  <div className="cart-logo"></div>
                  <div className="cart-logo1"></div>
                  <div className="cart-logo1-black"></div>
                  <div className="cart-logo2"></div>
                  <div className="cart-wheel1"></div>
                  <div className="cart-wheel2"></div>
                  <div className="cart-circle-div">
                    <span>{this.props.cartItems.length}</span>
                  </div>
                </React.Fragment>
              ) : null}
            </div>
          );
        })}
        <div className="squeeze-circle-div" onClick={this.expandSqueeze}>
          <div className="circle-line-div1"></div>
          <div className="circle-line-div2"></div>
          <div className="circle-line-div3"></div>
        </div>
        <div className="expand-div-click">
          {sectionArr.map((el) => {
            return (
              <p
                className={el.squeezeClass}
                key={el.name}
                onClick={el.methodName ? this.moveToSection : this.logOut}
                keyname={el.name.toLowerCase()}
              >
                {el.name}
              </p>
            );
          })}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
