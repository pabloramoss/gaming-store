import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import {Image} from "@chakra-ui/react";

export default function App() {
  const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
    "/images/slider4.jpg",
    "/images/slider5.jpg",
  ];

  return (
    <>
      <Swiper
        className="mySwiper"
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={30}
      >
        {images.map((item) => (
          <SwiperSlide key={item}>
            <Image alt="slider image" overflow="hidden" src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
