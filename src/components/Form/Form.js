import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player1: "",
            player2: "",
            points: 21,
            alternate: 5,
        };

        this.handleChangePlayer1 = this.handleChangePlayer1.bind(this);
        this.handleChangePlayer2 = this.handleChangePlayer2.bind(this);
        this.handleChangePoints = this.handleChangePoints.bind(this);
        this.handleChangeAlternate = this.handleChangeAlternate.bind(this);
        this.handleStartGame = this.handleStartGame.bind(this);
    }

    handleChangePlayer1(event) {
        this.setState({ player1: event.currentTarget.value });
    }

    handleChangePlayer2(event) {
        this.setState({ player2: event.currentTarget.value });
    }

    handleChangePoints(event) {
        this.setState({ points: event.currentTarget.value });
    }

    handleChangeAlternate(event) {
        this.setState({ alternate: event.currentTarget.value });
    }

    handleStartGame(event) {
        event.preventDefault();
    }

    render() {
        let { player1, player2, points, alternate } = this.state;

        return (
            <form className="form-group" onSubmit={this.handleStartGame}>
                <label htmlFor="player-name">Player 1</label>
                <input
                    className="form-control"
                    id="player-name"
                    onChange={this.handleChangePlayer1}
                    value={player1}
                />

                <label htmlFor="player-name">Player 2</label>
                <input
                    className="form-control"
                    id="player-name"
                    onChange={this.handleChangePlayer2}
                    value={player2}
                />

                <label htmlFor="points">Winning Score</label>
                <input
                    className="form-control"
                    id="points"
                    type="number"
                    onChange={this.handleChangePoints}
                    value={points}
                />

                <label htmlFor="serve-alternate">Alternate Every</label>
                <input
                    className="form-control"
                    id="serve-alternate"
                    type="number"
                    onChange={this.handleChangeAlternate}
                    value={alternate}
                />

                <button className="btn btn-success mt-3">Start Game</button>
            </form>
        );
    }
}

export default Form;
