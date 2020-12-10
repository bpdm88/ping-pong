import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import store from "../src/data/store";
import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
