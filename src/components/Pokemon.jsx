import { useState } from "react";

function PokemonNoResults() {
  return <div>No results</div>;
}

function ListOfPokemons({ pokemons }) {
  const [click, setClick] = useState(false);

  const handleClick = (event) => {
    setClick(!click);
    console.log(event.target);
  };

  return (
    <ul className="pokemons">
      {pokemons.map((pokemon) => (
        <li className="pokemon" key={pokemon.id} onClick={handleClick}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.image} alt={pokemon.name} />
          {click && <p>{"#" + pokemon.id}</p>}
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
