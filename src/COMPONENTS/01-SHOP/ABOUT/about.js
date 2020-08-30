import React, { Component } from "react";
import "./about.scss";
// Import Media
import ToyLogo from "../../../media/toy-logo.svg";
import ToyLogo2 from "../../../media/toy-logo2.svg";
// Import Functions
import { scrollPosition, sectionIn, scrollToBottom } from "./functions";
import { retriveSection, productsBtn } from "../NAVBAR/functions";
// Import all about redux
import { connect } from "react-redux";
import actionTypes from "../../../REDUCERS/00-LOGIN-PAGE/actionType";

class About extends Component {
  componentDidMount() {
    sectionIn();
    scrollPosition();
    scrollToBottom();
  }

  moveToShop = () => {
    // Some css effect
    retriveSection("Products", "About");
    productsBtn("products");
    setTimeout(() => {
      this.props.moveToShop();
    }, 300);
  };

  render() {
    console.log("About -> RENDER!!!");
    const localS =
      typeof window !== "undefined" && JSON.parse(localStorage.getItem("shop"));
    const username = localS.user;

    return (
      <section id="About">
        <div className="about-section-div">
          <div className="about-inside-first">
            <img className="toy-logo-img" src={ToyLogo} alt="Toy-Logo" />
          </div>
          <div className="about-inside-second">
            <h1 className="about-second-h1">Hello {username}</h1>
            <p className="about-second-p">
              Welcome to <span>ToyShop</span>
            </p>
            <p className="about-second-p2">
              We are selling used toys at fair prices. <br />
              With brand new technologies in just few clicks!
            </p>
          </div>
        </div>
        <div className="about-section-div2">
          <div className="about-inside2-first">
            <h1 className="about2-first-h1">A little more</h1>
            <p className="about2-fist-p">
              On every day we add new toys, <br />
              Our costumer service is available 24/7, <br />
              The toy has not arrived? You get a full refund of your money
              immediately!
            </p>
            <h1 className="about2-first-h2">Sound Intersting?</h1>
            <p className="about2-first-btn" onClick={this.moveToShop}>
              Get Started!
            </p>
          </div>
          <div className="about-inside2-second">
            <img src={ToyLogo2} alt="TOY-LOGO" className="toy-logo-img2" />
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveToShop: () => dispatch(actionTypes.changeView("Products")),
  };
};

export default connect(null, mapDispatchToProps)(About);
