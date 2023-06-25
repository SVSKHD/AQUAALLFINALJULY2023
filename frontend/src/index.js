import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import {createStore} from "redux"
import rootReducer from "./Store/index";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Store = createStore(rootReducer)
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
