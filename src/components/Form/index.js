import { connect } from "react-redux";
import Form from "./Form";
import { postGame } from "../../action/api";

let mapDispatchToProps = (dispatch) => {
    return {
        handleStartGame: (data) => dispatch(postGame(data)),
    };
};

export default connect(null, mapDispatchToProps)(Form);
