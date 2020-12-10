export const reset = () => {
    return {
        type: "RESET",
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

export const start = (data) => {
    return {
        type: "START_GAME",
        playerName1: data.playerName1,
        playerName2: data.playerName2,
        points: data.points,
        alternate: data.alternate,
    };
};
