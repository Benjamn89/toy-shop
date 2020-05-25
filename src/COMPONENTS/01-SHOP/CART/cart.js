import React, { Component } from "react";
import "./cart.scss";
import { connect } from "react-redux";
// Import media
import TestImg from "../../../media/buz.jpg";
import TestImg2 from "../../../media/batman.jpg";
class Cart extends Component {
  render() {
    console.log("Cart -> REDNER!!!");
    console.log(this.props.thisState);
    return (
      <section id="Cart">
        <div className="cart-item-div">
          <img src={TestImg} alt="test-img" className="test-image" />
          <div className="cart-inside-item-div">
            <h1 className="cart-inside-item-h1">Buz(Toy Story)</h1>
            <p className="cart-inside-item-p">
              <span>Quantity:</span> 2
            </p>
          </div>
          <div className="cart-inside2-item-h1">
            <h1 className="cart-inside2-h1">Price</h1>
            <p className="cart-inside2-p">12$</p>
          </div>
          <div className="cart-remove-btn-div">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="cart-item-div">
          <img src={TestImg2} alt="test-img" className="test-image" />
        </div>
        <div className="cart-item-div"></div>
        <div className="cart-subtotal-div">
          <h1 className="cart-subtotal-h1">Sub total: 32$</h1>
          <div className="cart-inside-subtotal-div">
            <p>CheckOut</p>
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
