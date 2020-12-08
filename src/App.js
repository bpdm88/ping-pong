import PlayerScore from "../src/components/PlayerScore";
import Header from "../src/components/Header";
import Winner from "../src/components/Winner";
import Reset from "../src/components/Reset";

const App = ({
    player1,
    player2,
    serving,
    winner,
    handleIncrement1,
    handleIncrement2,
    handleReset,
}) => (
    <>
        <Header title="PING PONG" />

        <div className="row mb-4">
            <PlayerScore
                player={player1}
                serving={serving === 1}
                handleIncrement={handleIncrement1}
                name="Player 1"
            />

            <PlayerScore
                player={player2}
                serving={serving === 2}
                handleIncrement={handleIncrement2}
                name="Player 2"
            />
        </div>
        <Winner winner={winner} />

        <hr />

        <Reset handleReset={handleReset} />
    </>
);

export default App;
