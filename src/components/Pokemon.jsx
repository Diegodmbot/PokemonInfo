import { useRef, useState } from "react";
import { getPokemonInfo } from "../services/pokemonInfo";
import { BarChart } from "./StatsBarChart";
import "./Pokemon.css";

export function Pokemon({ name, image, id }) {
  const [click, setClick] = useState(false);
  const pokemonId = useRef(id);
  const isFirstClick = useRef(true);
  const [pokemon, setPokemon] = useState(null);

  const handleClick = async () => {
    setClick(!click);
    if (isFirstClick.current) {
      const pokemonInfo = await getPokemonInfo(pokemonId.current);
      setPokemon(pokemonInfo);
    }
    isFirstClick.current = false;
  };

  return (
    <li className="pokemon" onClick={handleClick}>
      {click ? (
        <div className="back_card">
          <h3>{pokemon?.order && `#${pokemon?.order}`}</h3>
          {pokemon?.types.map((type) => (
            <span className="pokemon_type" key={type}>
              <div className={type}>{type}</div>
            </span>
          ))}
          {pokemon?.stats && <BarChart stats={pokemon?.stats} />}
        </div>
      ) : (
        <div className="front_card">
          <h2>{name.split("-")[0]}</h2>
          <img src={image} alt={name} />
        </div>
      )}
    </li>
  );
}
