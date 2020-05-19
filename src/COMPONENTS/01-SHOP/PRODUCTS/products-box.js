import React, { Component } from "react";
import "./products-box.scss";
// All about redux
import { connect } from "react-redux";
import actionTypes from "../../../REDUCERS/02-PRODUCTS-BOX/actionTypes";
// Import pure fucntions
import { pages, retriveProducts, searchToy, changePage } from "./functions";
// import dom manipulation functions
import { activeSpan, removeActiceSpan, itemBoxOut, itemBoxIn } from "./box-bom";

class ProductsBox extends Component {
  shouldComponentUpdate(nP, nS) {
    if (this.props.productsState.pages !== nP.productsState.pages) {
      removeActiceSpan();
    }
    return true;
  }

  componentDidUpdate(pP, pS) {
    var side = null;
    if (pP.productsState.pages > this.props.productsState.pages) {
      side = "right";
    }
    activeSpan(this.props.productsState.pages - 1, side);
  }

  componentDidMount() {
    // Active span on the current page
    activeSpan(this.props.productsState.pages - 1);
  }

  changePage = (e) => {
    e.persist();
    var res = changePage(
      e.target.innerHTML,
      this.props.productsState.pages,
      this.props.productsState.productsLength
    );
    if (!res) {
      return null;
    }
    itemBoxOut(res.side);
    setTimeout(() => {
      itemBoxIn(res.side);
      this.props.productsBoxChangePage(res.nextPage);
    }, 300);
  };

  searchToy = (e) => {
    const res = searchToy(e.target.value);
    var obj = {
      pages: 1,
      products: [],
    };
    if (res && res.length > 0) {
      if (res.length === this.props.productsState.products.length) {
        return null;
      }
      obj = {
        products: res,
        pages: 0,
      };
    }
    if (obj.products.length === this.props.productsState.products.length) {
      return null;
    }
    this.props.productsSearch(obj);
  };

  render() {
    console.log("ProductsBox -> REDNER!!!");
    var retriveFrom;
    if (this.props.productsState.pages > 0) {
      retriveFrom = retriveProducts(this.props.productsState.pages);
    } else {
      retriveFrom = JSON.parse(
        JSON.stringify(this.props.productsState.products)
      );
    }

    const actualProducts = retriveFrom.map((el) => {
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
    });

    var showPages = null;
    if (this.props.productsState.pages > 0) {
      showPages = (
        <div className="products-pages-div">
          <span onClick={this.changePage} className="products-start-span">
            {"<"}
          </span>
          {pages(this.props.productsState.productsLength).map((el) => {
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
      );
    }

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
        <div className="wrap-products-items-div">{actualProducts}</div>

        {showPages}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsState: state.ProductsBox,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productsBoxChangePage: (nextPage) =>
      dispatch(actionTypes.productsBoxChangePage(nextPage)),
    productsSearch: (obj) => dispatch(actionTypes.productsSearch(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsBox);
