import React, { Component } from "react";
import "./product.scss";
import { connect } from "react-redux";

// Import media
import CartLogo from "../../../media/cart-logo.png";
import actionTypes from "../../../REDUCERS/03-SINGLE PRODUCT/actionTypes";
// Import functions
import { productSectionOut } from "../NAVBAR/functions";
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

  pickQuantity = (e) => {
    let intTarget = parseInt(e.target.value);
    if (isNaN(intTarget)) {
      intTarget = 1;
    }
    this.props.changeQuantity(intTarget);
  };

  goToProducts = () => {
    productSectionOut();
    setTimeout(() => {
      this.props.history.goBack();
    }, 300);
  };

  render() {
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
              <input
                type="number"
                value={this.props.thisState.quantity}
                onChange={this.pickQuantity}
              />
              <div className="p-i-w-l-i">
                <img
                  src={CartLogo}
                  alt="cart-logo"
                  className="product-cart-icon"
                />
                <p className="i-p-d-i-d-p">Add to Cart</p>
              </div>
              <p className="product-inside-total-price">${displayPrice}</p>
              <p
                className="product-back-to-products"
                onClick={this.goToProducts}
              >
                Back to Products
              </p>
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
  };
};

const mapStateToProps = (state) => {
  return {
    thisState: state.SingleProduct,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
