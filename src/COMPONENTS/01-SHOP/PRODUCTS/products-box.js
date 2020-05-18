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
  searchToy,
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
    var nextPage;
    if (e.target.innerHTML === "&lt;") {
      nextPage = this.state.pages - 1;
    } else if (e.target.innerHTML === "&gt;") {
      nextPage = this.state.pages + 1;
    } else {
      nextPage = parseInt(e.target.innerHTML);
    }
    // Examine if the page bigger than tha acatual pages or less then
    if (nextPage > 3) {
      nextPage = 1;
    }
    if (nextPage < 1) {
      nextPage = 3;
    }
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

  searchToy = (e) => {
    const res = searchToy(e.target.value);
    if (res && res.length > 0) {
      this.setState({
        pages: res,
      });
    }
  };

  render() {
    console.log("ProductsBox -> REDNER!!!");
    return (
      <div className="products-box-div">
        <div className="products-search-div">
          <input
            type="text"
            placeholder="Search a toy..."
            onChange={this.searchToy}
          />
          <div className="search-circle-div">
            <div className="search-circle-line"></div>
            <div className="search-line-div"></div>
          </div>
        </div>
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
          <span onClick={this.changePage} className="products-start-span">
            {"<"}
          </span>
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
          <span onClick={this.changePage}>{">"}</span>
        </div>
      </div>
    );
  }
}
export default ProductsBox;
