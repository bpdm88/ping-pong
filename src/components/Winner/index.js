import { connect } from "react-redux";
import Winner from "./Winner.js";

let mapStateToProps = (state) => {
    return {
        winner: state.winner,
    };
};

export default connect(mapStateToProps)(Winner);
