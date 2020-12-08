const Winner = ({ winner }) =>
    winner === 0 ? null : (
        <h2 className="alert alert-success">Player {winner} wins!</h2>
    );

export default Winner;
