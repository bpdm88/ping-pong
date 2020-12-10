import Header from "../Header";
import Form from "../Form";
import Game from "../Game";

const App = ({ gameStarted }) => (
    <>
        <Header title="PING PONG" />

        {!gameStarted ? <Form /> : <Game />}
    </>
);

export default App;
