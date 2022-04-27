import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

const Features = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 480,
          modifier: 2,
          slideShadows: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        style={{ '--swiper-navigation-color': 'white' }}
      >
        <SwiperSlide className="flex justify-center">
          <Image
            src="/images/background/zephyr_of_the_violet_garden.png"
            alt="Zephyr of the Violet Garden"
            width={737.5}
            height={430}
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Image
            src="/images/background/experience_seven_nations.png"
            alt="Zephyr of the Violet Garden"
            width={737.5}
            height={430}
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Image
            src="/images/background/harness_the_power.png"
            alt="Zephyr of the Violet Garden"
            width={737.5}
            height={430}
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Image
            src="/images/background/embark_on_journey.png"
            alt="Zephyr of the Violet Garden"
            width={737.5}
            height={430}
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Image
            src="/images/background/unquenchable_flames.png"
            alt="Zephyr of the Violet Garden"
            width={737.5}
            height={430}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Features;
