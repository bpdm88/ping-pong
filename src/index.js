import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "../src/data/store";
import { Provider } from "react-redux";

const render = () => {
    let state = store.getState();

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App
                    player1={state.player1}
                    player2={state.player2}
                    serving={state.server}
                    winner={state.winner}
                    handleIncrement1={() =>
                        store.dispatch({ type: "INCREMENT1" })
                    }
                    handleIncrement2={() =>
                        store.dispatch({ type: "INCREMENT2" })
                    }
                    handleReset={() => store.dispatch({ type: "RESET" })}
                />
            </Provider>
        </React.StrictMode>,
        document.getElementById("root")
    );
};

render();
store.subscribe(render);
