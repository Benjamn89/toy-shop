import React, { Component } from "react";
import "./payment.scss";
// Import media
import CartLogo from "../../../media/toy-logo.png";
import CardBlue from "../../../media/card-blue.png";
import Password from "../../../media/password.png";
import Calendar from "../../../media/calendar.png";
// Import functions
import { exitPayment } from "./functions";
class Payment extends Component {
  cardNumder = () => {
    console.log("onChane must");
  };
  exitPayment = () => {
    exitPayment();
  };
  render() {
    console.log("Payment -> REDNER!!!");
    return (
      <div className="cart-payment">
        <div className="cart-payment-inside-div">
          <div className="cart-payment-exit-div" onClick={this.exitPayment}>
            <div></div>
            <div></div>
          </div>
          <div className="cart-payment-inside-header">
            <div className="cart-payment-img-wrapper">
              <img src={CartLogo} alt="cart-logo" />
            </div>
            <h1 className="cart-payment-header-title">
              React Toy <span>Shop</span>
            </h1>
          </div>
          <hr className="payment-hr" />
          <div className="cart-payment-inside-center">
            <input
              type="type"
              pattern="[0-9]"
              value="4242 4242 4242 4242"
              onChange={this.cardNumder}
            />
            <input type="text" value="04 / 24" onChange={this.cardNumder} />
            <input type="text" value="424" onChange={this.cardNumder} />
            <img
              src={CardBlue}
              alt="visa-logo"
              className="payment-img-visa-blue"
            />
            <img
              src={Password}
              alt="password-logo"
              className="payment-img-code"
            />
            <img
              src={Calendar}
              alt="calendar-logo"
              className="payment-img-calendar"
            />
          </div>
          <div className="cart-payment-inside-remember-div">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <div className="cart-payment-inside-btn" onClick={this.props.payment}>
            <p className="cart-payment-btn-p">Pay {this.props.totalPrice}$</p>
            <div className="sk-chase">
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Payment;
