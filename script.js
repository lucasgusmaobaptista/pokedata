async function fetchData() {

    const pokemonInput = document.getElementById('pokemonName');
    const pokeImg = document.getElementById('pokemon-img');
    const pokeName = document.getElementById('pokemon-name');
    const pokeInfo = document.getElementById('pokemon-info');

    try {
        const name = pokemonInput.value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if (!response.ok) {
            throw new Error('Não foi possível encontrar esse Pokémon!');
        }

        const data = await response.json();

        pokeImg.src = data.sprites.front_default;
        pokeImg.style.display = 'block';

        pokeName.textContent = data.name.toUpperCase();

        const stats = data.stats.map(stat => `${(stat.stat.name).toUpperCase()}: ${stat.base_stat }`).join('<br>');
        pokeInfo.innerHTML = stats;

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}
