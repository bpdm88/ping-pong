import initial from "../data/initial";

const reducer = (state, action) => {
    switch (action.type) {
        case "START_GAME":
            return startGame(state, action);
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

// Start Game Logic

const startGame = (state, action) => ({
    ...state,
    playerName1: action.playerName1,
    playerName2: action.playerName2,
    points: action.points,
    alternate: action.alternate,
});

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
    server:
        (Math.floor((state.player1 + state.player2) / state.alternate) % 2) + 1,
});

// Winner Logic

const winner = (state) => ({
    ...state,
    winner: winningScore(state) && twoPoints(state) ? whoWon(state) : 0,
});

const winningScore = (state) =>
    state.player1 >= state.points || state.player2 >= state.points;

const twoPoints = (state) => Math.abs(state.player1 - state.player2) >= 2;

const whoWon = (state) => (state.player1 > state.player2 ? 1 : 2);
