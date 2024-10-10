import { Pokemon } from "./Pokemon";
import "./Pokedex.css";
import { usePokedex } from "../hooks/usePokedex";
import InfiniteScroll from "react-infinite-scroll-component";

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

export function Pokedex({ search }) {
  const [{ pokemons }, fetchPokemons, url] = usePokedex({ search });
  if (pokemons === null) {
    return <div>Loading...</div>;
  }
  const hasPokemons = pokemons?.length > 0;

  return hasPokemons ? (
    <div style={{ width: "100%" }}>
      <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchPokemons}
        hasMore={url !== null}
        loader={<h4>Loading...</h4>}
      >
        <ListOfPokemons pokemons={pokemons} />
      </InfiniteScroll>
    </div>
  ) : (
    <PokemonNoResults />
  );
}
