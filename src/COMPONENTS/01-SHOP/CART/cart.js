import React, { Component } from "react";
import "./cart.scss";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    console.log("Cart -> REDNER!!!");
    console.log(this.props.thisState);
    return (
      <section id="Cart">
        <h1 className="CLASSNAME">Page under bulding...</h1>
        {this.props.thisState.items.map((el) => {
          return (
            <div className="cart-item-div">
              <img src={el.img} alt="cart-item-img" className="cart-item-img" />
              <div className="cart-inside-item-div">
                <h1 className="cart-inside-item-h1">{el.title}</h1>
                <p className="cart-inside-item-p">
                  <span>Quantity:</span> {el.quantity}
                </p>
              </div>
              <div className="cart-inside2-item-h1">
                <h1 className="cart-inside2-h1">Price</h1>
                <p className="cart-inside2-p">{el.price * el.quantity}$</p>
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
            Sub total: <span>--$</span>
          </h1>
          <div className="cart-inside-subtotal-div">
            <p>Payment</p>
            <p>Keep Shoping</p>
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
