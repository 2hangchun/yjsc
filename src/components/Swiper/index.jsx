// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default ({ bannerList }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      slidesPerView={1}
      loop={true}
      autoplay={true}
    >
      {bannerList.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={banner} alt="" style={{ width: "100%" }} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
