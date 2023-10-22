import { useEffect, useState } from "react";
import { getPokemonInfo } from "../services/pokemonInfo";
import { BarChart } from "./StatsBarChart";
import { useSwiper, useSwiperSlide } from "swiper/react";

export function BackCard({ pokemonId }) {
  const swiper = useSwiper();
  const { isActive } = useSwiperSlide();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fecthPokemonInfo = async () => {
      const pokemonInfo = await getPokemonInfo(pokemonId.current);
      setPokemon(pokemonInfo);
    };

    if (isActive) {
      fecthPokemonInfo();
    }
  }, [isActive, pokemonId]);

  const handleClick = () => {
    swiper.slidePrev();
  };

  return (
    <div onClick={handleClick}>
      <h3>{pokemon?.order ? `#${pokemon?.order}` : "Cargando..."}</h3>
      {pokemon?.types.map((type) => (
        <span className="pokemon_type" key={type}>
          <div className={type}>{type}</div>
        </span>
      ))}
      {pokemon?.stats && <BarChart stats={pokemon?.stats} />}
    </div>
  );
}
