import React from "react";
import "./App.scss";
import LoginPage from "./COMPONENTS/00-LOGIN-PAGE/login";
import LoggedIn from "./COMPONENTS/01-SHOP/shop-container";

import { connect } from "react-redux";

function App(props) {
  console.log("App -> RENDER");
  var logged = false;
  // Retrive data from local storage
  var localS =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("shop"));
  if (localS) {
    // Retrive the current time
    let now = new Date();
    now = now.getTime();
    if (localS.time > now) {
      logged = true;
    }
  }

  return <div className="App">{logged ? <LoggedIn /> : <LoginPage />}</div>;
}

const mapStateToProps = (state) => {
  return {
    logOn: state.logOnReducer,
  };
};

export default connect(mapStateToProps, null)(App);
