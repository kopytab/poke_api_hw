

const getPokeData = async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await resp.json();

    document.getElementById('pokemonName').textContent = data.name;
    document.getElementById('pokemonImage').src = data.sprites.front_shiny;

}