import animal from './nero.jpg';
import bird from './lokki.jpg';
import './home.css'

function Home() {
    const vaihdaSivu = (id) => {
        let home = document.getElementById("home").style.display = "none";
        let animals = document.getElementById("animals").style.display = "none";
        let birds = document.getElementById("birds").style.display = "none";
        let about = document.getElementById("about").style.display = "none";

        if (id == "animals-b") {
            animals = document.getElementById("animals").style.display = "flex";
        } else if (id == "birds-b") {
            birds = document.getElementById("birds").style.display = "flex";
        } else {
            alert("Tapahtui virhe!");
        }
    };

    return (
        <div id="home">
            <div id="animals-container">
                <a><img src={animal} onClick={() => vaihdaSivu("animals-b")}></img><p id="animals-p">Animals</p></a>
            </div>
            <div id="birds-container">
                <a><img src={bird} onClick={() => vaihdaSivu("birds-b")}></img><p id="birds-p">Birds</p></a>
            </div>
        </div>
    );
}

export default Home;