import { useEffect, useMemo, useRef, useState } from "react";
import { getPokedex } from "../services/pokedexInfo";

export function usePokedex({ search }) {
  const [pokemons, setPokemons] = useState(null);
  const url = useRef("https://pokeapi.co/api/v2/pokemon?limit=100000");
  const [pokemonsToShow, setPokemonsToShow] = useState(20);
  const fetchPokemons = async () => {
    if (!url.current) return;
    try {
      const newPokemons = await getPokedex(url.current);
      const allPokemons = pokemons
        ? [...pokemons, ...newPokemons]
        : newPokemons;
      setPokemons(allPokemons);
    } catch (error) {
      console.log("Fetching pokemons error");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const filteredPokemons = useMemo(() => {
    const searchedPokemons = search
      ? pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
      : pokemons;
    return searchedPokemons?.slice(0, pokemonsToShow);
  }, [search, pokemons, pokemonsToShow]);

  const handleShowMore = () => {
    setPokemonsToShow((prev) => prev + 20);
  }

  const hasMorePokemons = useMemo(() => {
    return filteredPokemons?.length < pokemons?.length;
  }, [filteredPokemons, pokemons]);

  return [{ pokemons: filteredPokemons, hasMorePokemons }, handleShowMore];
}
