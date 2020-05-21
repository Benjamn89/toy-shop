import React, { Component } from "react";
import "./product.scss";
class Product extends Component {
  render() {
    console.log("Product(Single) -> REDNER!!!");
    console.log(this.props);
    return (
      <div className="product-single-div">
        <img src={this.props.location.state.img} alt="new" />
      </div>
    );
  }
}
export default Product;
