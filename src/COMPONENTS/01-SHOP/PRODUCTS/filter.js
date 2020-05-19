import React, { Component } from "react";
import "./filter.scss";
// Import redux
import { connect } from "react-redux";
// Import functions
import { showFilterBox, inputLabels, filtersObj } from "./filter-functions";
import actionTypes from "../../../REDUCERS/02-PRODUCTS-BOX/actionTypes";

class Filter extends Component {
  shouldComponentUpdate() {
    return false;
  }

  showFilter = () => {
    showFilterBox();
  };

  toggleFilter = (e) => {
    const eTarget = parseInt(e.target.getAttribute("index"));
    if (eTarget === 0) {
      filtersObj.marvel = !filtersObj.marvel;
    }
    if (eTarget === 1) {
      filtersObj.toyStory = !filtersObj.toyStory;
    }
    if (eTarget === 2) {
      filtersObj.max6 = !filtersObj.max6;
    }
    if (eTarget === 3) {
      filtersObj.min6 = !filtersObj.min6;
    }
    this.props.toggleFilter();
  };

  render() {
    const inputs = inputLabels.map((el, ind) => {
      return (
        <div className="input-filter-divs" key={el}>
          <p className="input-inside-label">{el}</p>
          <input
            type="checkBox"
            className="input-filter-input"
            onChange={this.toggleFilter}
            index={ind}
          />
        </div>
      );
    });

    console.log("Filter -> RENDER!!!");
    return (
      <div className="filter-div">
        <div className="filter-inside-content">
          <h1 className="inside-filter-title">Filter</h1>
          {inputs}
        </div>
        <div className="filter-box-div"></div>
        <div className="filter-arrow-wrap" onClick={this.showFilter}>
          <div className="inside-arrow-straight"></div>
          <div className="inside-arrow-top-wing"></div>
          <div className="inside-arrow-bottom-wing"></div>
        </div>
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
    toggleFilter: () => dispatch(actionTypes.toggleFilter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
