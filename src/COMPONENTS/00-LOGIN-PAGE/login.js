import React, { Component } from "react";
import "./login.scss";
// Import media
import Password from "../../media/password.png";
import Username from "../../media/username.png";
// Import all about redux
import actionTypes from "../../REDUCERS/00-LOGIN-PAGE/actionType";
import { connect } from "react-redux";

class LoginPage extends Component {
  changeView = () => {
    document.querySelector(".actual-reg-div").classList.toggle("flip-reg");
    document.querySelector(".actual-log-div").classList.toggle("flip-log");
  };

  focusInOne = () => {
    document.querySelector(".u-span").classList.add("span-focus");
  };
  focusOutOne = () => {
    if (document.querySelector(".log-first-input").value.length < 1) {
      document.querySelector(".u-span").classList.remove("span-focus");
    }
  };
  focusInTwo = () => {
    document.querySelector(".p-span").classList.add("span-focus");
  };
  focusOutTwo = () => {
    if (document.querySelector(".log-second-input").value.length < 1) {
      document.querySelector(".p-span").classList.remove("span-focus");
    }
  };

  typeFirst = () => {
    const input = document.querySelector(".log-first-input");
    if (input.classList.contains("input-err")) {
      input.classList.remove("input-err");
    }
  };
  typeSecond = (e) => {
    if (e.type === "keydown" && e.keyCode === 13) {
      return this.logInStore();
    }
    const input = document.querySelector(".log-second-input");
    if (input.classList.contains("input-err")) {
      input.classList.remove("input-err");
    }
  };

  logInStore = () => {
    var firstInput = document.querySelector(".log-first-input");
    var secondInput = document.querySelector(".log-second-input");
    if (firstInput.value.length < 1) {
      firstInput.classList.add("input-err");
    }
    if (secondInput.value.length < 1) {
      secondInput.classList.add("input-err");
    }
    if (firstInput.value.length < 1 || secondInput.value.length < 1) {
      return console.log(
        "fix the errors and then u will be directed to the shop store"
      );
    } else {
      const now = new Date();
      const data = {
        user: firstInput.value,
        time: now.getTime() + 3600000,
      };
      // Store data in local storage
      typeof window !== "undefined" &&
        localStorage.setItem("shop", JSON.stringify(data));
      // Transform out the login page
      document
        .querySelector(".login-page-div")
        .classList.add("login-page-div-forward");
      setTimeout(() => {
        this.props.loginSucess(firstInput.value);
      }, 300);
    }
  };

  render() {
    console.log("LoginPage -> REDNER!!!");

    return (
      <div className="login-page-div">
        <div className="login-nav-div">
          <span>Logo</span>
        </div>
        <div className="inside-login-page">
          <div className="actual-log-div">
            <h1 className="log-in-title">Log-In</h1>
            <form>
              <input
                className="log-first-input"
                type="email"
                maxLength="17"
                onFocus={this.focusInOne}
                onBlur={this.focusOutOne}
                onChange={this.typeFirst}
              />
              <img className="u-icon" src={Username} alt="u-icon" />
              <span className="u-span">Username</span>
              <input
                className="log-second-input"
                type="password"
                maxLength="17"
                onFocus={this.focusInTwo}
                onBlur={this.focusOutTwo}
                onKeyDown={this.typeSecond}
              />
              <img className="p-icon" src={Password} alt="p-icon" />
              <span className="p-span">Password</span>
            </form>
            <p className="inside-log-already">
              Don't have an account?
              <span onClick={this.changeView}>Sign Up</span>
            </p>
            <p className="inside-login-p" onClick={this.logInStore}>
              Log-In
            </p>
          </div>
          <div className="actual-reg-div">
            <h1 className="log-title">
              I skipped the register page to make it easier for employers as
              they watch the project - So just type in a random email and
              password and log on to the site.
            </h1>
            <span>
              (You can view a register feature in my social media project)
            </span>

            <p onClick={this.changeView} className="reg-log-btn">
              Sign-In
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSucess: () => dispatch(actionTypes.loginSucess()),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
