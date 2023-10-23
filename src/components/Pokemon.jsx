import { useRef } from "react";
import "./Pokemon.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import { FrontCard } from "./FrontCard";
import { BackCard } from "./BackCard";

export function Pokemon({ name, image, id }) {
  const pokemonId = useRef(id);

  return (
    <Swiper
      effect={"flip"}
      loop={true}
      modules={[EffectFlip]}
      className="container"
    >
      <SwiperSlide className="front_card">
        <FrontCard name={name} image={image} />
      </SwiperSlide>
      <SwiperSlide className="back_card">
        <BackCard pokemonId={pokemonId} />
      </SwiperSlide>
    </Swiper>
  );
}
