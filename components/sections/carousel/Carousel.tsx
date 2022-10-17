import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import {Image} from "@chakra-ui/react";

import {images} from "./images";

export default function App() {
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
