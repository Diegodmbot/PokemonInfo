import { useEffect, useMemo, useState } from "react";
import { getPokedex } from "../services/pokedexInfo";

export function usePokedex({ search }) {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      const allPokemons = await getPokedex();
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
