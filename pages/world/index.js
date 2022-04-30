/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import styles from "../../styles/world.module.scss";

import { Mousewheel, Pagination } from "swiper";

const World = () => {
  return (
    <div className="w-screen h-screen">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        speed={800}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="w-full h-full">
          <div className={`${styles.teyvat} w-full h-full flex flex-col justify-center items-center text-white pb-20`}>
            <div className='hidden absolute top-8 sm:block'>
              <Image
                src="/images/logo/logo.png"
                alt="Logo"
                width={194}
                height={70}
              />
            </div>
            <h1 className="text-5xl font-semibold mb-6 xl:text-4xl sm:mb-2">Teyvat</h1>
            <div className="md:w-3/4 sm:w-11/12">
              <Image
                src="/images/icon/horizontal_line.png"
                alt="horizontal_line"
                width={571}
                height={18}
              />
            </div>
            <div className="w-1/2 text-center text-sm my-5 xl:w-3/5 xl:text-xs sm:w-4/5 sm:mt-3">
              <p>You have arrived in Teyvat — a fantasy world where the seven elements flow and converge.</p>
              <p>In the distant past, the Archons granted mortals unique elemental abilities. With the help of such powers, people formed a bountiful homeland out of the wilderness. However, 500 years ago, the collapse of an ancient civilization turned the universe upside down...</p>
              <p>Though the calamity the world suffered has ceased, peace has yet to be restored.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className={`${styles.mondstadt} w-full h-full flex flex-col justify-center items-center text-white pb-20`}>
            <Image
              src="/images/logo/mondstadt.png"
              alt="Mondstadt"
              width={120}
              height={120}
            />
            <h1 className="text-5xl font-semibold mb-6 xl:text-4xl sm:mb-2">Mondstadt</h1>
            <div className="md:w-3/4 sm:w-11/12">
              <Image
                src="/images/icon/horizontal_line.png"
                alt="horizontal_line"
                width={571}
                height={18}
              />
            </div>
            <div className="w-1/2 text-center text-sm my-5 xl:w-3/5 xl:text-xs sm:w-4/5 sm:mt-3">
              <p>A city of freedom that lies in the northeast of Teyvat.</p>
              <p>From amongst mountains and wide-open plains, carefree breezes carry the scent of dandelions — a gift from the Anemo God, Barbatos — across Cider Lake to Mondstadt, which sits on an island in the middle of the lake.</p>
            </div>
            <Image
              src="/images/icon/details.png"
              alt="details"
              width={40}
              height={40}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className={`${styles.liyue} w-full h-full flex flex-col justify-center items-center text-white pb-20`}>
            <Image
              src="/images/logo/liyue.png"
              alt="Liyue"
              width={120}
              height={120}
            />
            <h1 className="text-5xl font-semibold mb-6 xl:text-4xl sm:mb-2">Liyue</h1>
            <div className="md:w-3/4 sm:w-11/12">
              <Image
                src="/images/icon/horizontal_line.png"
                alt="horizontal_line"
                width={571}
                height={18}
              />
            </div>
            <div className="w-1/2 text-center text-sm my-5 xl:w-3/5 xl:text-xs sm:w-4/5 sm:mt-3">
              <p>A bountiful harbor that lies in the east of Teyvat.</p>
              <p>Mountains stand tall and proud alongside the stone forest, that together with the open plains and lively rivers make up Liyue's bountiful landscape, which shows its unique beauty through each of the four seasons. Just how many gifts from the Geo God lie in wait amongst the rocks of Liyue's mountains?</p>
            </div>
            <Image
              src="/images/icon/details.png"
              alt="details"
              width={40}
              height={40}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className={`${styles.inazuma} w-full h-full flex flex-col justify-center items-center text-white pb-20`}>
            <Image
              src="/images/logo/inazuma.png"
              alt="Inazuma"
              width={120}
              height={120}
            />
            <h1 className="text-5xl font-semibold mb-6 xl:text-4xl sm:mb-2">Inazuma</h1>
            <div className="md:w-3/4 sm:w-11/12">
              <Image
                src="/images/icon/horizontal_line.png"
                alt="horizontal_line"
                width={571}
                height={18}
              />
            </div>
            <div className="w-1/2 text-center text-sm my-5 xl:w-3/5 xl:text-xs sm:w-4/5 sm:mt-3">
              <p>An Isolated Archipelago Far East of Teyvat.</p>
              <p>Overcome endless thunderstorms and set foot on the islands of red maple and cherry blossoms. On winding shores and towering cliffs, and in forests and mountains full of secrets, witness the Eternity pursued by Her Excellency, the Almighty Narukami Ogosho.</p>
            </div>
            <Image
              src="/images/icon/details.png"
              alt="details"
              width={40}
              height={40}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default World;
