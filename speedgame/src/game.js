import './game.css'
import React, { useState, useEffect } from 'react';

let thisScore = -1;
let highScore = -1;

function startGame(difficulty) {
    document.getElementById("start-game-container").style.display = "none"
    let name = document.getElementById("name-field").value;
    thisScore = -1;
    console.log(name);
    console.log(difficulty);
    gameController(difficulty);
};

function circleManager(id) {
    thisScore++;

    document.getElementById("score").innerHTML = `Score: ${thisScore}`

    if (thisScore >= highScore) {
        document.getElementById("high-score").innerHTML = `High Score: ${thisScore}`
        highScore = thisScore;
    }

    document.getElementById(id).style.display = "none";
};

// Kun käyttäjä painaa start game nappia, game controller aloittaa pelin, game controller hallitsee pelin etenemistä.
// Seuraa palloja ja että niitä painetaan tietyn aikavälin sisään ja lisää silloin scorea.
function gameController(difficulty) { 
    let circle1 = document.getElementById("circle1");
    let circle2 = document.getElementById("circle2");
    let circle3 = document.getElementById("circle3");

    let timeout = 50000;
    let circleClicked = true;

    if (difficulty === 1) {
        do {
            circle1.style.display = "block";
            circle2.style.display = "none";
            circle3.style.display = "none";
            randomPoint();
            circle1.addEventListener("click", function() { circleManager(this.id); });
            // TEE TÄSTÄ ETEENPÄIN
            // DELAY TÄHÄN
            useEffect(() => {
                var delay = setInterval(function() {
                    // Tarkista onko palloja painettu tietyn ajan jälkeen
                    isClicked()
                }, timeout);
            });
            if (!isClicked) {
                circleClicked = false; // testausta varten, poista myöhemmin
                clearInterval(delay);
            }
            console.log("jes");
            circle1.removeEventListener("click", function() { circleManager(this.id); });
        }
        while (circleClicked === true);
    } else if (difficulty === 2) {
        document.getElementById("circle1").style.display = "block";
        document.getElementById("circle2").style.display = "block";
        document.getElementById("circle3").style.display = "none";
        while (true) {
            randomPoint();
            break;
        }
    } else if (difficulty === 3) {
        document.getElementById("circle1").style.display = "block";
        document.getElementById("circle2").style.display = "block";
        document.getElementById("circle3").style.display = "block";
        while (true) {
            randomPoint();
            break;
        }
    } else {
        // ilmoittaa virheestä, difficulty voi olla vain välillä 1-3
        document.getElementById("error-message").innerHTML = "Something went wrong, the difficulty can only be between 1-3.";
        document.getElementById("error-container").style.display = "block"
    }
};

function isClicked() {

}

function randomPoint() {
    const div = document.getElementById("game-container");
    let korkeus = div.clientHeight - 50;
    let leveys = div.clientWidth - 50;

    console.log(korkeus);
    console.log(leveys);

    var x1 = Math.ceil(korkeus* Math.random());
    var y1 = Math.ceil(leveys* Math.random());
    var x2 = Math.ceil(korkeus* Math.random());
    var y2 = Math.ceil(leveys* Math.random());
    var x3 = Math.ceil(korkeus* Math.random());
    var y3 = Math.ceil(leveys* Math.random());

    let pos = {x1, y1, x2, y2, x3, y3};
    displayCircles(pos);
};

function displayCircles(pos) {
    const circle1 = document.getElementById("circle1");
    const circle2 = document.getElementById("circle2");
    const circle3 = document.getElementById("circle3");

    console.log(pos);

    circle1.style.position = "absolute";
    circle1.style.left = `${pos.y1}px`;
    circle1.style.top = `${pos.x1}px`;

    circle2.style.position = "absolute";
    circle2.style.left = `${pos.y2}px`;
    circle2.style.top = `${pos.x2}px`
    circle3.style.position = "absolute";
    circle3.style.left = `${pos.y3}px`;
    circle3.style.top = `${pos.x3}px`;
}

function Game() {
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

            <div id="error-container">
                <h3>An error ocurred! :(</h3>
                <p id='error-message'></p>
                <p>Please refresh the page and try again!</p>
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