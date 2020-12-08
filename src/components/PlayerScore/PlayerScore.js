const PlayerScore = ({ player, serving, handleIncrement, name, disabled }) => (
    <div className="col-md-6 mt-4">
        <div
            className={
                "card text-center " + (serving ? "bg-dark text-white" : "")
            }
        >
            <h5 className="card-header">{name}</h5>
            <div className="card-body">
                <p className="card-text display-1">{player}</p>
            </div>
            <div className="card-footer">
                <button
                    disabled={disabled}
                    onClick={handleIncrement}
                    className="form-control btn btn-success"
                >
                    +
                </button>
            </div>
        </div>
    </div>
);
export default PlayerScore;
