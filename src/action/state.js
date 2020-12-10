export const start = (data) => {
    return {
        type: "START_GAME",
        playerName1: data.player_1.name,
        playerName2: data.player_2.name,
        points: data.wining_score,
        alternate: data.change_serve,
    };
};

export const increment1 = () => {
    return {
        type: "INCREMENT1",
    };
};

export const increment2 = () => {
    return {
        type: "INCREMENT2",
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};
