import { useSwiper } from "swiper/react";

export function FrontCard({ name, image }) {
  const swiper = useSwiper();

  const handleClick = () => {
    swiper.slideNext();
  };

  return (
    <div onClick={handleClick}>
      <h2>{name.split("-")[0]}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
