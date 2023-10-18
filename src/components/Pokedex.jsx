import { Pokemon } from "./Pokemon";
import "./Pokedex.css";

function PokemonNoResults() {
  return <div>No results</div>;
}

function ListOfPokemons({ pokemons }) {
  return (
    <ul className="pokedex">
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} {...pokemon} />
      ))}
    </ul>
  );
}

export function Pokedex({ pokemons }) {
  const hasPokemons = pokemons?.length > 0;
  return hasPokemons ? (
    <ListOfPokemons pokemons={pokemons} />
  ) : (
    <PokemonNoResults />
  );
}
