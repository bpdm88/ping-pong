import Header from "../Header";
import Form from "../Form";
import Game from "../Game";

const App = ({ gameStarted }) => (
    <>
        <Header title="Ping Pong" />

        {!gameStarted ? <Form /> : <Game />}
    </>
);

export default App;
