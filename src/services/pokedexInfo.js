export const getPokedex = async (url) => {
  try {
    const pokemons = await fetch(url).then((response) => response.json());
    const pokemonsList = pokemons.results.map((pokemon) => {
      const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
      const pokemonId = pokemon.url.split("/")[6];
      return {
        name: pokemonName,
        id: pokemonId,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      };
    });
    const nextURL = pokemons.next;

    return [pokemonsList, nextURL];
  } catch (error) {
    console.log("Can't get pokemons list");
    console.log(error);
  }
};
