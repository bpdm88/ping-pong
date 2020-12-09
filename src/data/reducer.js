import initial from "../data/initial";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT1":
            return winner(server(player1(state)));
        case "INCREMENT2":
            return winner(server(player2(state)));
        case "RESET":
            return initial;
        default:
            return state;
    }
};

export default reducer;

// Player & Server Logic

const player1 = (state) => ({
    ...state,
    player1: state.player1 + 1,
});
const player2 = (state) => ({
    ...state,
    player2: state.player2 + 1,
});
const server = (state) => ({
    ...state,
    server: (Math.floor((state.player1 + state.player2) / 5) % 2) + 1,
});

// Winner Logic

const winner = (state) => ({
    ...state,
    winner: winningScore(state) && twoPoints(state) ? whoWon(state) : 0,
});

const winningScore = (state) => state.player1 >= 21 || state.player2 >= 21;

const twoPoints = (state) => Math.abs(state.player1 - state.player2) >= 2;

const whoWon = (state) => (state.player1 > state.player2 ? 1 : 2);
