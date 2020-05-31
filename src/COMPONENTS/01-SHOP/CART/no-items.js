import React, { Component } from "react";
import "./no-items.scss";
// Import media
import EmptyCart from "../../../media/no-items.svg";
// Import functions
import { waitForImage } from "./functions";
class NoItems extends Component {
  componentDidMount() {
    waitForImage();
  }

  render() {
    console.log("NoItems -> REDNER!!!");
    return (
      <div className="no-items-wrapper-div">
        <div className="sk-circle">
          <div className="sk-circle1 sk-child"></div>
          <div className="sk-circle2 sk-child"></div>
          <div className="sk-circle3 sk-child"></div>
          <div className="sk-circle4 sk-child"></div>
          <div className="sk-circle5 sk-child"></div>
          <div className="sk-circle6 sk-child"></div>
          <div className="sk-circle7 sk-child"></div>
          <div className="sk-circle8 sk-child"></div>
          <div className="sk-circle9 sk-child"></div>
          <div className="sk-circle10 sk-child"></div>
          <div className="sk-circle11 sk-child"></div>
          <div className="sk-circle12 sk-child"></div>
        </div>

        <div className="cart-no-items-div">
          <img
            src={EmptyCart}
            className="cart-no-items-img"
            alt="emtpy-cart-img"
          />
          <h1 className="">Your cart is empty</h1>
          <div
            className="cart-no-items-back-div"
            onClick={this.props.moveToProducts}
          >
            <p className="cart-no-items-back-btn">Back To Products</p>
          </div>
        </div>
      </div>
    );
  }
}
export default NoItems;
