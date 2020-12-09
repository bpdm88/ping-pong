import { connect } from "react-redux";
import Reset from "./Reset";
import { reset } from "../../data/actions";

let mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => dispatch(reset()),
    };
};

export default connect(null, mapDispatchToProps)(Reset);
