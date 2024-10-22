import './controls.css'

function Controls() {
    const newGame = () => {
        document.getElementById("start-game-container").style.display = "grid"
    }

    const currentScore = 0;
    const highScore = 0;

    return (
        <div className="controls" id="controls-container">
            <button onClick={newGame}>New Game</button>
            <div className='score' id='score-container'>
                <h2 className='score-text'>Score: {currentScore}</h2>
                <h2 className='score-text'>High Score: {highScore}</h2>
            </div>
        </div>
    );
};

export default Controls;