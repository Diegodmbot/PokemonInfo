import { useEffect, useState } from "react";
import { getPokemons } from "../services/pokemonName";

export function usePokemon({ pokemonName }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await getPokemons();
      setPokemons(pokemons);
    };

    fetchPokemons();
  }, []);

  return { pokemons };
}
