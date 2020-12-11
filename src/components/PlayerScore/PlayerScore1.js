import { connect } from "react-redux";
import PlayerScore from "./PlayerScore";
import { patchScore } from "../../action/api";

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
        handleIncrement: () => dispatch(patchScore(1)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScore);
