import { useRef, useState } from "react";
import { getPokemonInfo } from "../services/pokemonInfo";

export function Pokemon({ name, image, id }) {
  const [click, setClick] = useState(false);
  const pokemonId = useRef(id);
  const isFirstClick = useRef(true);
  const [pokemon, setPokemon] = useState(null);

  const handleClick = async () => {
    if (isFirstClick.current) {
      const pokemonInfo = await getPokemonInfo(pokemonId.current);
      console.log(pokemonInfo);
      setPokemon(pokemonInfo);
      console.log(pokemon);
    }
    setClick(!click);
    isFirstClick.current = false;
  };

  return (
    <li className="pokemon" onClick={handleClick}>
      <h2>{name}</h2>
      {click ? (
        <div>
          <p>{"#" + pokemon.order}</p>
          <p>{pokemon.types.join(" ")}</p>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.name}>
                <p>{`${stat.name}: ${stat.value}`}</p>
                <p></p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <img src={image} alt={name} />
      )}
    </li>
  );
}
