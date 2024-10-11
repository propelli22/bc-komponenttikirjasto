import './animals.css';
import image from './luna.jpg';

function Animals() {
    const hae = (haettava) => {
        let syote = document.getElementById(haettava).value.toLowerCase();
        const ul = document.getElementById("a-ul");
        const elaimet = ul.getElementsByTagName("li");
        let lista = [];

        // Eläimien nimet array muodossa
        for (let i = 0; i < elaimet.length; i++) {
            lista.push(elaimet[i].innerText.toLowerCase());
        };

        // Haetaan eläimet joissa on syötteeseen sopiva osa
        const tulos = lista.filter(str => str.includes(syote));

        // Kaikki eläimet piiloon
        for (let i = 0; i < elaimet.length; i++) {
            elaimet[i].style.display = "none"
        }

        // Haetut eläimet takaisin esille
        for (let i = 0; i < tulos.length; i++) {
            let osa = tulos[i];

            for (let i = 0; i < elaimet.length; i++) {
                if (elaimet[i].innerText.toLowerCase() === osa) {
                    elaimet[i].style.display = "block"
                }
            }
        }
    };

    return (
        <div id="animals">
            <div id="a-image">
                <img src={image} alt='goofy dog named Luna'></img>
            </div>
            <div id="a-information">
                <h2>All our animals</h2>
                <p>Here at the zoo we have all kinds of animals, from rats to dinosaurs.</p>
                <ul id='a-ul'>
                    <li id="a-dog">Dogs</li>
                    <li id="a-rat">Rats</li>
                    <li id="a-cat">Cats</li>
                    <li id="a-guineapig">Guinea pigs</li>
                    <li id="a-pig">Pigs</li>
                    <li id="a-cow">Cows</li>
                    <li id="a-sheep">Sheep</li>
                    <li id="a-elephant">Elefants</li>
                    <li id="a-fox">Fox</li>
                    <li id="a-bear">Bear</li>
                    <li id="a-camel">Camel</li>
                    <li id="a-donkey">Doneky</li>
                    <li id="a-squirrel">Squirrel</li>
                    <li id="a-horse">Horse</li>
                    <li id="a-goat">Goat</li>
                    <li id="a-turtle">Turtle</li>
                    <li id="a-crocodile">Crocodile</li>
                    <li id="a-panda">Panda</li>
                    <li id="a-velociraptor">Velociraptors</li>
                </ul>

                <p>Search for an animal</p>
                <input type='search' id='a-haettava'></input>
                <input type='button' onClick={() => hae("a-haettava")} value="Search" id='a-hakunappi'></input>
            </div>
        </div>
    );
};

export default Animals;