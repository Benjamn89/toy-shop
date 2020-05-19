import React, { Component } from "react";
import "./filter.scss";

// Import functions
import { showFilterBox, inputLabels } from "./filter-functions";

class Filter extends Component {
  showFilter = () => {
    showFilterBox();
  };

  render() {
    const inputs = inputLabels.map((el) => {
      return (
        <div className="input-filter-divs" key={el}>
          <p className="input-inside-label">{el}</p>
          <input type="checkBox" className="input-filter-input" />
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

export default Filter;
