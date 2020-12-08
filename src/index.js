import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

// initial state

const initial = {
    player1: 0,
    player2: 0,
    server: 1,
    winner: 0,
};

// reducer

const player1 = (state) => ({
    ...state,
    player1: state.player1 + 1,
});
const player2 = (state) => ({
    ...state,
    player2: state.player2 + 1,
});
const server = (state) => ({
    ...state,
    server: (Math.floor((state.player1 + state.player2) / 5) % 2) + 1,
});

const winner = (state) => ({
    ...state,
    winner: winningScore(state) ? whoWon(state) : 0,
});

const winningScore = (state) => state.player1 >= 21 || state.player2 >= 21;

const whoWon = (state) => (state.player1 > state.player2 ? 1 : 2);

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT1":
            return winner(server(player1(state)));
        case "INCREMENT2":
            return winner(server(player2(state)));
        case "RESET":
            return initial;
        default:
            return state;
    }
};

// store & render

const store = createStore(reducer, initial);

const render = () => {
    let state = store.getState();

    ReactDOM.render(
        <React.StrictMode>
            <App
                player1={state.player1}
                player2={state.player2}
                serving={state.server}
                winner={state.winner}
                handleIncrement1={() => store.dispatch({ type: "INCREMENT1" })}
                handleIncrement2={() => store.dispatch({ type: "INCREMENT2" })}
                handleReset={() => store.dispatch({ type: "RESET" })}
            />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

store.subscribe(render);
render();

// render
