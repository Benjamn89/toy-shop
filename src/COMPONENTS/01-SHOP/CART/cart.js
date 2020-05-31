import React, { Component } from "react";
import "./cart.scss";
import "./payment-success.scss";
import { connect } from "react-redux";
import actionTypes from "../../../REDUCERS/01-CART/actionTypes";
import logOnActionTypes from "../../../REDUCERS/00-LOGIN-PAGE/actionType";
// Import components
import Payment from "./payment";
import NoItems from "./no-items";
// Import functions
import { sumPrice, removeItem, toPayment, enterPayment } from "./functions";
import { retriveSection, productsBtn, disableBtns } from "../NAVBAR/functions";
// Import media
import PaymentSuccess from "../../../media/checkbox.png";
import Greatful from "../../../media/greatful.png";

class Cart extends Component {
  removeItem = (e) => {
    const indexItem = parseInt(e.target.getAttribute("item-index"));
    // Copy of the item index
    let copyState = JSON.parse(JSON.stringify(this.props.thisState.items));
    copyState.splice(indexItem, 1);
    // Dom
    removeItem(indexItem);
    setTimeout(() => {
      this.props.removeItemFromCart(copyState);
    }, 400);
  };

  moveToProducts = () => {
    productsBtn("products");
    retriveSection("products", "Cart");
    setTimeout(() => {
      this.props.moveToProducts("Products");
    }, 300);
  };

  toPayment = () => {
    toPayment();
  };

  clickOnPayment = () => {
    enterPayment();
    setTimeout(() => {
      disableBtns();
      this.props.paymentApproved();
    }, 1700);
  };

  toProducts = () => {
    productsBtn("about");
    retriveSection("about", "Cart");
    disableBtns();
    setTimeout(() => {
      this.props.moveToProducts("About");
      this.props.resetState();
    }, 300);
  };

  render() {
    console.log("Cart -> REDNER!!!");
    const totalPrice = sumPrice(this.props.thisState.items);
    let itemsInsideTheCart = <NoItems moveToProducts={this.moveToProducts} />;
    if (this.props.thisState.items.length > 0) {
      itemsInsideTheCart = (
        <React.Fragment>
          {this.props.thisState.items.map((el, ind) => {
            return (
              <div className="cart-item-div" key={el.title + ind}>
                <img
                  src={el.img}
                  alt="cart-item-img"
                  className="cart-item-img"
                />
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
                <div
                  item-index={ind}
                  className="cart-remove-btn-div"
                  onClick={this.removeItem}
                >
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
              <div className="c-i-sb-1" onClick={this.toPayment}>
                <p className="c-i-sb-p1">Payment</p>
              </div>
              <div className="c-i-sb-2" onClick={this.moveToProducts}>
                <p className="c-i-sb-p2">Continue Shopping</p>
              </div>
            </div>
          </div>
          <Payment totalPrice={totalPrice} payment={this.clickOnPayment} />
        </React.Fragment>
      );
    }
    if (this.props.thisState.payment) {
      itemsInsideTheCart = (
        <div className="payment-success-wrapper-div">
          <div className="payment-success-inside1">
            <img src={PaymentSuccess} alt="payment-success" className="" />
            <h1 className="payment-success-inside1-h1">
              Your payment has been successfully approved
            </h1>
          </div>
          <div className="payment-success-inside2">
            <img src={Greatful} alt="greatful" className="" />
            <h1 className="paymant-success-inside2-h1">
              Thank you for choosing our services <br />
              We hope to see you again soon
            </h1>
            <div className="payment-success-inside2-btn-div">
              <p onClick={this.toProducts}>Return To Home Page</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <section id="Cart" className="section-in">
        {itemsInsideTheCart}
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (items) =>
      dispatch(actionTypes.removeItemFromCart(items)),
    moveToProducts: (section) => dispatch(logOnActionTypes.changeView(section)),
    paymentApproved: () => dispatch(actionTypes.paymentApproved()),
    resetState: () => dispatch(actionTypes.resetState()),
  };
};

const mapStateToProps = (state) => {
  return {
    thisState: state.CartReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
