import Player1 from "./components/PlayerScore/PlayerScore1";
import Player2 from "./components/PlayerScore/PlayerScore2";
import Header from "./components/Header";
import Winner from "./components/Winner";
import Reset from "./components/Reset";

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
            <Player1 handleIncrement={handleIncrement1} />

            <Player2 handleIncrement={handleIncrement2} />
        </div>
        <Winner />

        <hr />

        <Reset handleReset={handleReset} />
    </>
);

export default App;
