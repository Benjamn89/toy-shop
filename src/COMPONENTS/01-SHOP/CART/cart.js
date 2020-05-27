import React, { Component } from "react";
import "./cart.scss";
import { connect } from "react-redux";
import actionTypes from "../../../REDUCERS/01-CART/actionTypes";
import logOnActionTypes from "../../../REDUCERS/00-LOGIN-PAGE/actionType";
// Import components
import Payment from "./payment";
// Import functions
import { sumPrice, removeItem, toPayment } from "./functions";
import { retriveSection, productsBtn } from "../NAVBAR/functions";

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

  render() {
    console.log("Cart -> REDNER!!!");
    const totalPrice = sumPrice(this.props.thisState.items);
    return (
      <section id="Cart" className="section-in">
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
        <Payment />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (items) =>
      dispatch(actionTypes.removeItemFromCart(items)),
    moveToProducts: (section) => dispatch(logOnActionTypes.changeView(section)),
  };
};

const mapStateToProps = (state) => {
  return {
    thisState: state.CartReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
