import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

// initial state

const initial = {
    player1: 0,
    player2: 0,
};

// reducer

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// store

const store = createStore(reducer, initial);

const render = () => {
    let state = store.getState();

    ReactDOM.render(
        <React.StrictMode>
            <App player1={state.player1} player2={state.player2} />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

store.subscribe(render);
render();

// render
