import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName1: "",
            playerName2: "",
            points: 21,
            alternate: 5,
        };

        this.handleChangePlayerName1 = this.handleChangePlayerName1.bind(this);
        this.handleChangePlayerName2 = this.handleChangePlayerName2.bind(this);
        this.handleChangePoints = this.handleChangePoints.bind(this);
        this.handleChangeAlternate = this.handleChangeAlternate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePlayerName1(event) {
        this.setState({ playerName1: event.currentTarget.value });
    }

    handleChangePlayerName2(event) {
        this.setState({ playerName2: event.currentTarget.value });
    }

    handleChangePoints(event) {
        this.setState({ points: event.currentTarget.value });
    }

    handleChangeAlternate(event) {
        this.setState({ alternate: event.currentTarget.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleStartGame({ ...this.state });
    }

    render() {
        let { playerName1, playerName2, points, alternate } = this.state;

        return (
            <form className="form-group" onSubmit={this.handleSubmit}>
                <label htmlFor="player-name">Player 1</label>
                <input
                    className="form-control"
                    id="player-name"
                    onChange={this.handleChangePlayerName1}
                    value={playerName1}
                />

                <label htmlFor="player-name">Player 2</label>
                <input
                    className="form-control"
                    id="player-name"
                    onChange={this.handleChangePlayerName2}
                    value={playerName2}
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
