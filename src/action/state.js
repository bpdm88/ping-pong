export const start = (data) => {
    return {
        type: "START_GAME",
        playerName1: data.player_1.name,
        playerName2: data.player_2.name,
        points: data.winning_score,
        alternate: data.change_serve,
        id: data.id,
    };
};

export const increment = (player) => {
    return {
        type: player === 1 ? "INCREMENT1" : "INCREMENT2",
    };
};

// export const increment2 = () => {
//     return {
//         type: "INCREMENT2",
//     };
// };

export const reset = () => {
    return {
        type: "RESET",
    };
};
