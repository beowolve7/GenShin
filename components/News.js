import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";

const News = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="flex justify-center">
        <Image
          src="/images/background/news1.jpg"
          alt="Zephyr of the Violet Garden"
          width={864}
          height={540}
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <Image
          src="/images/background/news2.jpg"
          alt="Zephyr of the Violet Garden"
          width={864}
          height={540}
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <Image
          src="/images/background/news3.jpg"
          alt="Zephyr of the Violet Garden"
          width={864}
          height={540}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default News;
