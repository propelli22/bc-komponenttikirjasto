import './game.css'
import { useState } from 'react';

function Game() {
    const startGame = () => {
        document.getElementById("start-game-container").style.display = "none"
        let name = document.getElementById("name-field").value;
        console.log(name);
        console.log(difficulty);
        gameController(difficulty);
    }

    // Kun käyttäjä painaa start game nappia, game controller aloittaa pelin, game controller hallitsee pelin etenemistä.
    // Seuraa palloja ja että niitä painetaan tietyn aikavälin sisään ja lisää silloin scorea.
    const gameController = (difficulty) => { 
        if (difficulty === 1) {
            while (true) {
                randomPoint()
                break;
            }
        } else if (difficulty === 2) {

        } else if (difficulty === 3) {

        } else {
            // ilmoita virheestä, difficulty voi olla vain välillä 0-3
        }
    }

    const randomPoint = () => {
        const div = document.getElementById("game-container");
        let korkeus = div.clientHeight;
        let leveys = div.clientWidth;
        var x1 = Math.ceil(korkeus* Math.random());
        var y1 = Math.ceil(leveys* Math.random());
        var x2 = Math.ceil(korkeus* Math.random());
        var y2 = Math.ceil(leveys* Math.random());
        var x3 = Math.ceil(korkeus* Math.random());
        var y3 = Math.ceil(leveys* Math.random());

        let pos = {x1, y1, x2, y2, x3, y3};
        displayCircles(pos);
    }

    const displayCircles = (pos) => {
        const circle1 = document.getElementById("circle1");
        const circle2 = document.getElementById("circle2");
        const circle3 = document.getElementById("circle3");

        console.log(pos.x1);

        circle1.style.position = "absolute";
        circle1.style.left = `${pos.y1}px`;
        circle1.style.top = `${pos.x1}px`;

        circle2.style.position = "absolute";
        circle2.style.left = `${pos.y2}px`;
        circle2.style.top = `${pos.x2}px`;

        circle3.style.position = "absolute";
        circle3.style.left = `${pos.y3}px`;
        circle3.style.top = `${pos.x3}px`;
    }

    const [difficulty, setDifficulty] = useState(1);

    if (difficulty > 3) {
        setDifficulty(difficulty - 1)
    };

    if (difficulty < 1) {
        setDifficulty(difficulty + 1)
    };

    return (
        <div className="game" id="game-container">
            <div id="start-game-container">
                <h3>Start a new game!</h3>
                <p>Name</p>
                <input type="text" id="name-field"></input>
                <p>Difficulty level</p>
                <div id="difficulty-container">
                    <button id="add" className="difficulty-button" onClick={() => setDifficulty(difficulty + 1)}>+</button>
                    <p id="difficulty-level">{difficulty}</p>
                    <button id="reduce" className="difficulty-button" onClick={() => setDifficulty(difficulty - 1)}>-</button>
                </div>
                <button onClick={startGame}>Start game!</button>
            </div>

            <div className="circle" id='circle1'>

            </div>

            <div className="circle" id='circle2'>

            </div>

            <div className="circle" id='circle3'>

            </div>
        </div>
    );
};

export default Game;