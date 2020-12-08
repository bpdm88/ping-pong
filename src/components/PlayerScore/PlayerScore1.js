import { connect } from "react-redux";
import PlayerScore from "./PlayerScore";

let mapStateToProps = (state) => {
    return {
        player: state.player1,
        serving: state.server === 1,
        name: "Player 1",
        disabled: state.winner > 0,
    };
};

export default connect(mapStateToProps)(PlayerScore);
