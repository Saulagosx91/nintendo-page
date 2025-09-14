import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import './swiper-styles.css'
import { useModal } from "../../stores/modalStore";

export default function SwiperImages() {
  const toggleModal = useModal(state => state.toggleModal);
  const setUrl = useModal(state => state.setImageUrl);
  const blockScroll = useModal(state => state.blockScroll);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    toggleModal();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setUrl((e.target as HTMLImageElement).src);
    blockScroll();
  }
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full max-w-full h-full"
    >
      <SwiperSlide>
        <img src="/stardew1.avif" alt="" onClick={handleClick} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/stardew2.avif" alt="" onClick={handleClick} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/stardew3.avif" alt="" onClick={handleClick} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/stardew4.avif" alt="" onClick={handleClick} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/stardew5.avif" alt="" onClick={handleClick} />
      </SwiperSlide>
    </Swiper>
  )
}
