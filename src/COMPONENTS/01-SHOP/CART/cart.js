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
        <h1 className="">Building...</h1>
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
