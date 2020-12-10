import { connect } from "react-redux";
import Form from "./Form";
import { start } from "../../data/actions";

let mapDispatchToProps = (dispatch) => {
    return {
        handleStartGame: (data) => dispatch(start(data)),
    };
};

export default connect(null, mapDispatchToProps)(Form);
