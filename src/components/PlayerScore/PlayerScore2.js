import { connect } from "react-redux";
import PlayerScore from "./PlayerScore";
import { increment2 } from "../../data/actions";

let mapStateToProps = (state) => {
    return {
        player: state.player2,
        serving: state.server === 2,
        name: state.playerName2,
        disabled: state.winner > 0,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch(increment2()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScore);
