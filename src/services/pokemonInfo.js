export const getPokemonInfo = async (id) => {
  try {
    const pokemonInfo = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    ).then((response) => response.json());

    return {
      order: pokemonInfo.order,
      types: pokemonInfo.types.map((type) => type.type.name),
      stats: pokemonInfo.stats.map((stat) => {
        const value = stat.base_stat;
        if (stat.stat.name === "special-attack") {
          return { name: "sp-atk", value };
        }
        if (stat.stat.name === "special-defense") {
          return { name: "sp-def", value };
        }
        const name = stat.stat.name;
        return { name, value };
      }),
    };
  } catch (error) {
    console.log("Can't get pokemons list");
    console.log(error);
  }
};
