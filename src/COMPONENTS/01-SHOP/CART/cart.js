import React, { Component } from "react";
import "./cart.scss";
import { connect } from "react-redux";
// Import functions
import { sumPrice } from "./functions";

class Cart extends Component {
  render() {
    console.log("Cart -> REDNER!!!");
    const totalPrice = sumPrice(this.props.thisState.items);
    return (
      <section id="Cart">
        {this.props.thisState.items.map((el, ind) => {
          return (
            <div className="cart-item-div" key={el.title + ind}>
              <img src={el.img} alt="cart-item-img" className="cart-item-img" />
              <div className="cart-inside-item-div">
                <h1 className="cart-inside-item-h1">{el.title}</h1>
                <p className="cart-inside-item-p">
                  <span>Quantity:</span> {el.quantity}
                </p>
              </div>
              <div className="cart-inside2-item-h1">
                <h1 className="cart-inside2-h1">Price</h1>
                <p className="cart-inside2-p">{el.totalPrice}$</p>
              </div>
              <div className="cart-remove-btn-div">
                <div></div>
                <div></div>
              </div>
            </div>
          );
        })}
        <div className="cart-subtotal-div">
          <h1 className="cart-subtotal-h1">
            Sub total: <span>{totalPrice}$</span>
          </h1>
          <div className="cart-inside-subtotal-div">
            <div className="c-i-sb-1">
              <p className="c-i-sb-p1">Payment</p>
            </div>
            <div className="c-i-sb-2">
              <p className="c-i-sb-p2">Continue Shopping</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    thisState: state.CartReducer,
  };
};

export default connect(mapStateToProps, null)(Cart);
