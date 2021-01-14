import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//REDUX SETUP
//APPLY MIDDLEWARE and COMPOSE - LETS YOU IMPORT THUNK WITHIN CREATE STORE
import { createStore, applyMiddleware, compose } from "redux";
//add root reducer for store
import rootReducer from "./reducers/index";
//connects redux to react
import { Provider } from "react-redux";
//thunk
import thunk from "redux-thunk";
//react router
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//setup store, only can pass one reducer, so you have to combine them all, don't forget to add devtools
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    {/* Set Provider to pass all the reducers to the whole app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
