import React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom/client";
import { applyMiddleware, compose, createStore } from "redux";
import {thunk} from "redux-thunk";
import Reducers from "../src/reducers";
import App from "./App";
import "./index.css";


const store = createStore(Reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
