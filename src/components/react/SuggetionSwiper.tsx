import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import { suggetionData } from "../../data";
import GameCard from "./GameCard";

export default function SuggetionSwiper() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={50}
      slidesPerView='auto'
      className="w-full max-w-full h-full"
    >
      {
        suggetionData.map(suggetion => (
          <SwiperSlide key={suggetion.title} style={{ width: '250px' }}>
            <GameCard date={suggetion.date} image={suggetion.image} price={suggetion.price} title={suggetion.title} />
          </SwiperSlide>
        ))
      }

    </Swiper>
  )
}
