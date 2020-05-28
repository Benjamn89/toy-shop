import React, { Component } from "react";
import "./no-items.scss";
// Import media
import EmptyCart from "../../../media/no-items.svg";
class NoItems extends Component {
  render() {
    console.log("NoItems -> REDNER!!!");
    return (
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
    );
  }
}
export default NoItems;
