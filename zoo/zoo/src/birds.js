import './birds.css';
import image from './joutsen.jpg'

function Birds() {
    const hae = (haettava) => {
        let syote = document.getElementById(haettava).value.toLowerCase();
        const ul = document.getElementById("b-ul");
        const linnut = ul.getElementsByTagName("li");
        let lista = [];

        // Eläimien nimet array muodossa
        for (let i = 0; i < linnut.length; i++) {
            lista.push(linnut[i].innerText.toLowerCase());
        };

        // Haetaan eläimet joissa on syötteeseen sopiva osa
        const tulos = lista.filter(str => str.includes(syote));

        // Kaikki eläimet piiloon
        for (let i = 0; i < linnut.length; i++) {
            linnut[i].style.display = "none"
        }

        // Haetut eläimet takaisin esille
        for (let i = 0; i < tulos.length; i++) {
            let osa = tulos[i];

            for (let i = 0; i < linnut.length; i++) {
                if (linnut[i].innerText.toLowerCase() === osa) {
                    linnut[i].style.display = "block"
                }
            }
        }
    };

    return (
        <div id="birds">
            <div id="b-image">
                <img src={image} alt='goofy'></img>
            </div>
            <div id="b-information">
                <h2>All our birds</h2>
                <p>Here at the zoo we have all kinds of birds, from rats to dinosaurs.</p>
                <ul id='b-ul'>
                    <li id="b-eagle">Eagle</li>
                    <li id="b-duck">Duck</li>
                    <li id="b-crow">Crow</li>
                    <li id="b-goose">Goose</li>
                    <li id="b-owl">Owl</li>
                    <li id="b-peacock">Peacock</li>
                    <li id="b-ostrich">Ostrich</li>
                    <li id="b-crane">Crane</li>
                    <li id="b-flamingo">Flamingo</li>
                    <li id="b-woodpecker">Woodpecker</li>
                    <li id="b-penguin">Penguin</li>
                    <li id="b-macaw">Macaw</li>
                    <li id="b-pigeon">Pigeon</li>
                    <li id="b-toucan">Toucan</li>
                    <li id="b-rooster">Rooster</li>
                </ul>

                <p>Search for an bird</p>
                <input type='search' id='b-haettava'></input>
                <input type='button' onClick={() => hae("b-haettava")} value="Search" id='b-hakunappi'></input>
            </div>
        </div>
    );
}

export default Birds;