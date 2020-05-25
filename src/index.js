import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Import All about redux
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Import Reucers
import logOnReducer from "./REDUCERS/00-LOGIN-PAGE/reducer";
import CartReducer from "./REDUCERS/01-CART/reducer";
import ProductsBox from "./REDUCERS/02-PRODUCTS-BOX/reducer";
import SingleProduct from "./REDUCERS/03-SINGLE PRODUCT/reducer";

// combined reducers
const rootReducer = combineReducers({
  logOnReducer,
  CartReducer,
  ProductsBox,
  SingleProduct,
});

// create logger for thunk
const logger = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      return result;
    };
  };
};

// Adding the redux devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store - redux
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
