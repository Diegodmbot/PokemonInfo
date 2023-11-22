import { useEffect, useMemo, useRef, useState } from "react";
import { getPokedex } from "../services/pokedexInfo";

export function usePokedex({ search }) {
  const [pokemons, setPokemons] = useState(null);
  const url = useRef("https://pokeapi.co/api/v2/pokemon");
  const fetchPokemons = async () => {
    if (!url.current) return;
    try {
      const [newPokemons, nextURL] = await getPokedex(url.current);
      const allPokemons = pokemons
        ? [...pokemons, ...newPokemons]
        : newPokemons;
      setPokemons(allPokemons);
      url.current = nextURL;
    } catch (error) {
      console.log("Fetching pokemons error");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const filteredPokemons = useMemo(() => {
    return search
      ? pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
      : pokemons;
  }, [pokemons, search]);

  return [{ pokemons: filteredPokemons }, fetchPokemons, url.current];
}
