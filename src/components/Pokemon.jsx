function PokemonNoResults() {
  return <div>No results</div>;
}

function ListOfPokemons({ pokemons }) {
  return (
    <ul className="pokemons">
      {pokemons.map((pokemon) => (
        <li className="pokemon" key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.image} alt={pokemon.name} />
        </li>
      ))}
    </ul>
  );
}

export function Pokemon({ pokemons }) {
  const hasPokemons = pokemons?.length > 0;
  return hasPokemons ? (
    <ListOfPokemons pokemons={pokemons} />
  ) : (
    <PokemonNoResults />
  );
}
