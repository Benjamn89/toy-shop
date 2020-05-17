import React, { Component } from "react";
import "./products-box.scss";

// Import fucntions
import {
  pages,
  activeSpan,
  retriveProducts,
  removeActiceSpan,
  itemBoxOut,
  itemBoxIn,
} from "./functions";

class ProductsBox extends Component {
  state = {
    pages: 1,
  };

  shouldComponentUpdate(nP, nS) {
    if (this.state.pages !== nS.pages) {
      var side = null;
      removeActiceSpan();
      if (this.state.pages > nS.pages) {
        side = "right";
      }
      activeSpan(nS.pages - 1, side);
    }
    return true;
  }

  componentDidMount() {
    // Active span on the current page
    activeSpan(this.state.pages - 1);
  }

  changePage = (e) => {
    e.persist();
    var nextPage = parseInt(e.target.innerHTML);
    var side = null;
    if (nextPage < this.state.pages) {
      side = "right";
    }
    itemBoxOut(side);
    setTimeout(() => {
      itemBoxIn(side);
      this.setState({
        pages: nextPage,
      });
    }, 300);
  };

  render() {
    console.log("ProductsBox -> REDNER!!!");
    return (
      <div className="products-box-div">
        <div className="wrap-products-items-div">
          {retriveProducts(this.state.pages).map((el) => {
            return (
              <div className="products-item-div" key={el.title}>
                <img src={el.img} alt={el.title} className="products-img" />
                <hr />
                <h1 className="products-title">{el.title}</h1>
                <p className="products-desc">{el.desc}</p>
                <hr />
                <p className="products-price">{el.price}$</p>
              </div>
            );
          })}
        </div>

        <div className="products-pages-div">
          <span className="products-start-span">{"<"}</span>
          {pages().map((el) => {
            return (
              <span
                onClick={this.changePage}
                className="products-span-for-active"
                key={el}
              >
                {el}
              </span>
            );
          })}
          <span>{">"}</span>
        </div>
      </div>
    );
  }
}
export default ProductsBox;
