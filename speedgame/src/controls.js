import './controls.css'

function Controls() {
    const newGame = () => {
        document.getElementById("start-game-container").style.display = "grid"
    }

    return (
        <div className="controls" id="controls-container">
            <button onClick={newGame} className='noselect'>New Game</button>
            <div className='score' id='score-container'>
                <h2 className='score-text noselect' id='score'>Score: 0</h2>
                <h2 className='score-text noselect' id='high-score'>High Score: 0</h2>
            </div>
        </div>
    );
};

export default Controls;