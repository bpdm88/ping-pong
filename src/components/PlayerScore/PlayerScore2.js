import { connect } from "react-redux";
import PlayerScore from "./PlayerScore";

let mapStateToProps = (state) => {
    return {
        player: state.player2,
        serving: state.server === 2,
        name: "Player 2",
        disabled: state.winner > 0,
    };
};

export default connect(mapStateToProps)(PlayerScore);
