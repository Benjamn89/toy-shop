import React, { Component } from "react";
import "./products.scss";

// Import Components
import ProductsBox from "./products-box";
import Filter from "./filter";

class Products extends Component {
  componentDidMount() {
    // Should be removed when I start building this section
    document.querySelector("#Products").classList.add("section-in");
    window.scrollTo(0, 0);
    console.log("CDM CALLING");
  }

  render() {
    console.log("Products -> REDNER!!!");
    return (
      <section id="Products">
        <div className="prod-background-circle-1"></div>
        <div className="prod-background-circle-2"></div>
        <ProductsBox />
        <Filter />
      </section>
    );
  }
}
export default Products;
