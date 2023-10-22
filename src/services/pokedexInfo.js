export const getPokedex = async () => {
  try {
    const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => data.results);

    return pokemons?.map((pokemon) => {
      const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
      const pokemonId = pokemon.url.split("/")[6];
      return {
        name: pokemonName,
        id: pokemonId,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      };
    });
  } catch (error) {
    console.log("Can't get pokemons list");
    console.log(error);
  }
};
