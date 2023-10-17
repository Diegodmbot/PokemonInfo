export const getPokemonInfo = async (id) => {
  try {
    const pokemonInfo = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    ).then((response) => response.json());

    return {
      order: pokemonInfo.order,
      types: pokemonInfo.types.map((type) => type.type.name),
      stats: pokemonInfo.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })),
    };
  } catch (error) {
    console.log("Can't get pokemons list");
    console.log(error);
  }
};
