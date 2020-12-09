import Player1 from "./components/PlayerScore/PlayerScore1";
import Player2 from "./components/PlayerScore/PlayerScore2";
import Header from "./components/Header";
import Winner from "./components/Winner";
import Reset from "./components/Reset";
import Form from "./components/Form";

const App = () => (
    <>
        <Header title="PING PONG" />

        <Form />

        <div className="row mb-4">
            <Player1 />

            <Player2 />
        </div>
        <Winner />

        <hr />

        <Reset />
    </>
);

export default App;
