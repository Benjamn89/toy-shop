import React, { Component } from "react";
import "./product.scss";
import { connect } from "react-redux";

// Import media
import CartLogo from "../../../media/cart-logo.png";
// Import action types
import actionTypes from "../../../REDUCERS/03-SINGLE PRODUCT/actionTypes";
import cartActionTypes from "../../../REDUCERS/01-CART/actionTypes";
import productsActionTypes from "../../../REDUCERS/02-PRODUCTS-BOX/actionTypes";
import logActionTypes from "../../../REDUCERS/00-LOGIN-PAGE/actionType";

// Import functions
import { productSectionOut, productsBtn } from "../NAVBAR/functions";
import { addCart } from "./duct-functions";
class Product extends Component {
  shouldComponentUpdate(nP, nS) {
    const thiState = this.props.thisState;
    if (
      thiState.price !== nP.thisState.price ||
      thiState.quantity !== nP.thisState.quantity
    ) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    // Change quietly the price state
    this.props.priceUpdate(this.props.location.state.price);
  }

  goToProducts = () => {
    productSectionOut();
    setTimeout(() => {
      this.props.history.goBack();
    }, 300);
  };

  addToCart = () => {
    // Dom effects
    addCart();
    // Copy of cart items
    var cartState = JSON.parse(JSON.stringify(this.props.cartState.items));
    // Copy of the product obj
    var product = JSON.parse(JSON.stringify(this.props.location.state));
    product.quantity = this.props.thisState.quantity;
    product.totalPrice = product.quantity * product.price;
    // Push the item the the cart array
    cartState.push(product);
    // Change State
    this.props.cartAddItem(cartState);
    this.props.resetFromProduct();
  };

  moveToCheckout = () => {
    this.props.changeView("Cart");
    productsBtn("cart");
    productSectionOut();
    setTimeout(() => {
      this.props.history.goBack();
    }, 300);
  };

  changeQuantity = (calc) => {
    let itemQuantity = parseInt(
      document.querySelector(".i-p-number").innerHTML
    );
    if (calc === "down") {
      itemQuantity--;
    } else {
      itemQuantity++;
    }

    if (itemQuantity < 1) {
      return null;
    }
    this.props.changeQuantity(itemQuantity);
  };

  render() {
    if (this.props.history.action === "POP") {
      this.props.history.push("/");
      return null;
    }
    console.log("Product(Single) -> REDNER!!!");
    let displayPrice =
      this.props.thisState.price * this.props.thisState.quantity;
    return (
      <div className="product-single-div">
        <div className="product-img-desc-div">
          <div className="inside-product-wrap-div">
            <img src={this.props.location.state.img} alt="new" />
          </div>

          <div className="inside-product-div">
            <h1 className="inside-product-title">
              {this.props.location.state.title}
            </h1>
            <p className="inside-product-desc">
              Product description lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className="inside-product-desc-input-div">
              <div className="inside-product-input-div">
                <span
                  className="i-p-arrow-down"
                  onClick={() => this.changeQuantity("down")}
                ></span>
                <span className="i-p-number">
                  {this.props.thisState.quantity}
                </span>
                <span
                  className="i-p-arrow-up"
                  onClick={() => this.changeQuantity("up")}
                ></span>
              </div>
              <div className="p-i-w-l-i" onClick={this.addToCart}>
                <img
                  src={CartLogo}
                  alt="cart-logo"
                  className="product-cart-icon"
                />
                <p className="i-p-d-i-d-p" onClick={this.addToCart}>
                  Add to Cart
                </p>
                <div className="product-loading-spinner">
                  <div className="loading-spinner-inside">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <p className="product-inside-total-price">${displayPrice}</p>
              <p
                className="product-back-to-products"
                onClick={this.goToProducts}
              >
                Back to Products
              </p>
              <div className="product-checkout-box">
                <p className="product-checkout-p">
                  <span>{this.props.location.state.title}</span> has been added
                  successfully to your cart
                </p>
                <div
                  className="product-checkout-btn-div"
                  onClick={this.moveToCheckout}
                >
                  <p className="product-checkout-btn-p">CheckOut</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeQuantity: (val) => dispatch(actionTypes.changeQuantity(val)),
    priceUpdate: (price) =>
      dispatch({
        type: "priceUpdate",
        val: price,
      }),
    cartAddItem: (cartArr) => dispatch(cartActionTypes.cartAddItem(cartArr)),
    resetFromProduct: () => dispatch(productsActionTypes.resetFromProduct()),
    changeView: (section) => dispatch(logActionTypes.changeView(section)),
  };
};

const mapStateToProps = (state) => {
  return {
    thisState: state.SingleProduct,
    cartState: state.CartReducer,
    productsState: state.ProductsBox,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
