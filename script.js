const pokemonDetail = document.querySelector('.pokemon-detail');

const pokemon1 = document.getElementById('pokemon-001');
const pokemon2 = document.getElementById('pokemon-002');
const pokemon3 = document.getElementById('pokemon-003');
const pokemon4 = document.getElementById('pokemon-004');
const pokemon5 = document.getElementById('pokemon-005');
const pokemon6 = document.getElementById('pokemon-006');
const pokemon7 = document.getElementById('pokemon-007');
const pokemon8 = document.getElementById('pokemon-008');
const pokemon9 = document.getElementById('pokemon-009');
const pokemon10 = document.getElementById('pokemon-010');

const allPokemons = document.querySelectorAll('.pokemon-little-image');

function unselectedAllPokemons () {
    for (const item of allPokemons) {
        item.classList.replace('selected', 'normal');
    }       
}  

pokemon1.onclick = () => {

    pokemonDetail.src = pokemon1.src;

    unselectedAllPokemons();

    pokemon1.classList.toggle('selected');
}

pokemon2.onclick = () => {

    pokemonDetail.src = pokemon2.src;

    unselectedAllPokemons();

    pokemon2.classList.toggle('selected');
}

pokemon3.onclick = () => {

    pokemonDetail.src = pokemon3.src;

    unselectedAllPokemons();

    pokemon3.classList.toggle('selected');
}

pokemon4.onclick = () => {

    pokemonDetail.src = pokemon4.src;

    unselectedAllPokemons();

    pokemon4.classList.toggle('selected');
}

pokemon5.onclick = () => {

    pokemonDetail.src = pokemon5.src;

    unselectedAllPokemons();

    pokemon5.classList.toggle('selected');
}

pokemon6.onclick = () => {

    pokemonDetail.src = pokemon6.src;

    unselectedAllPokemons();

    pokemon6.classList.toggle('selected');
}

pokemon7.onclick = () => {

    pokemonDetail.src = pokemon7.src;

    unselectedAllPokemons();

    pokemon7.classList.toggle('selected');
}

pokemon8.onclick = () => {

    pokemonDetail.src = pokemon8.src;

    unselectedAllPokemons();

    pokemon8.classList.toggle('selected');
}

pokemon9.onclick = () => {

    pokemonDetail.src = pokemon9.src;

    unselectedAllPokemons();

    pokemon9.classList.toggle('selected');
}

pokemon10.onclick = () => {

    pokemonDetail.src = pokemon10.src;

    unselectedAllPokemons();

    pokemon10.classList.toggle('selected');
}