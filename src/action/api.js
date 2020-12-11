import axios from "../axios";
import { start } from "./state";
import { increment } from "./state";

export const postGame = (state) => {
    return (dispatch) => {
        axios
            .post("/games", {
                player_1: state.playerName1,
                player_2: state.playerName2,
                winning_score: state.points,
                change_serve: state.alternate,
            })
            .then(({ data }) => dispatch(start(data.data)));
    };
};

export const patchScore = (player) => {
    return (dispatch, getState) => {
        let { id } = getState();

        axios
            .patch(`/games/${id}/score`, {
                player: player,
            })
            .then(({ data }) => dispatch(increment(player)));
    };
};
