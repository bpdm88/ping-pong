import { connect } from "react-redux";
import App from "./App";

let mapStateToProps = (state) => {
    return {
        gameStarted: state.gameStarted,
    };
};

export default connect(mapStateToProps)(App);
