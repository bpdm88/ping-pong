import { connect } from "react-redux";
import PlayerScore from "./PlayerScore";
import { increment1 } from "../../data/actions";

let mapStateToProps = (state) => {
    return {
        player: state.player1,
        serving: state.server === 1,
        name: state.playerName1,
        disabled: state.winner > 0,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch(increment1()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScore);
