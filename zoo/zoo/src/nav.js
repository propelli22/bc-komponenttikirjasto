import './nav.css'

function Nav() {
    const vaihdaSivu = (id) => {
        let home = document.getElementById("home").style.display = "none";
        let animals = document.getElementById("animals").style.display = "none";
        let birds = document.getElementById("birds").style.display = "none";
        let about = document.getElementById("about").style.display = "none";

        if (id == "home-b") {
            home = document.getElementById("home").style.display = "flex";
        } else if (id == "animals-b") {
            animals = document.getElementById("animals").style.display = "flex";
        } else if (id == "birds-b") {
            birds = document.getElementById("birds").style.display = "flex";
        } else if (id = "about-b") {
            about = document.getElementById("about").style.display = "block";
        } else {
            alert("Tapahtui virhe!");
        }
    };

    return (
        <div id="nav">
            <div id="name">
                <p>Zoo</p>
            </div>
            <div id="buttons">
                <button id="home-b" onClick={() => vaihdaSivu("home-b")}>Home</button>
                <button id="animals-b" onClick={() => vaihdaSivu("animals-b")}>Animals</button>
                <button id="birds-b" onClick={() => vaihdaSivu("birds-b")}>Birds</button>
                <button id="about-b" onClick={() => vaihdaSivu("about-b")}>About</button>
            </div>
        </div>
    );
}

export default Nav;