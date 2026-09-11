export const getPokedex = async (url) => {
  try {
    const pokemons = await fetch(url).then((response) => response.json());
    const pokemonsList = pokemons.results.map((pokemon) => {
      const pokemonName = pokemon.name.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
      const pokemonId = pokemon.url.split("/")[6];
      return {
        name: pokemonName,
        id: pokemonId,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      };
    });

    return pokemonsList;
  } catch (error) {
    console.log("Can't get pokemons list");
    console.log(error);
  }
};
