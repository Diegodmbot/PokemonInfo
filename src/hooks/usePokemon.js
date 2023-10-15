import { useEffect, useMemo, useState } from "react";
import { getPokemons } from "../services/pokemonName";

export function usePokemon({ search }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const allPokemons = await getPokemons();
      setPokemons(allPokemons);
    };
    try {
      fetchPokemons();
    } catch (error) {
      console.log("Fetching pokemons error");
      console.log(error);
    }
  }, []);

  const filteredPokemons = useMemo(() => {
    return search
      ? pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
      : pokemons;
  }, [pokemons, search]);
  console;
  return { pokemons: filteredPokemons };
}
