

const getPokeData = async () => {
    let pokemonName = document.getElementById('pokemonName').value;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await resp.json();

    document.getElementById('pokeName').innerHTML = data.name;
    document.getElementById('pokeImage').src = data.sprites.front_shiny;

}