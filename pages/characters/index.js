import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import styles from "../../styles/characters.module.scss";

import { Mousewheel } from "swiper";

const maps = [
  { name: 'Mondstadt' },
  { name: 'Liyue' },
  { name: 'Inazuma' },
]

const numOfCharOfMap = {
  "Mondstadt": 4,
  "Liyue": 5,
  "Inazuma": 7,
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Characters = () => {
  const [currentMap, setCurrentMap] = useState("Mondstadt");
  const [currentChar, setCurrentChar] = useState(1);

  var numOfChar = numOfCharOfMap[currentMap];

  const handlePrevBtn = () => {
    setCurrentChar(currentChar - 1);
  }

  const handleNextBtn = () => {
    setCurrentChar(currentChar + 1);
  }

  return (
    <div className="relative sm:flex sm:justify-center">
      <div className='hidden absolute top-8 sm:block'>
        <Image
          src="/images/logo/logo.png"
          alt="Logo"
          width={194}
          height={70}
        />
      </div>
      <nav className="absolute z-40 top-36 flex flex-col sm:flex-row sm:justify-evenly sm:w-4/5 sm:top-32" aria-label="Maps">
        {maps.map((map) => (
          <button
            key={map.name}
            className={classNames(
              map.name === currentMap
                ? 'bg-gradient-to-r from-black to-transparent opacity-75 sm:bg-black'
                : '',
              'text-white font-semibold text-left pl-6 pr-12 py-2 sm:px-4 sm:rounded-3xl'
            )}
            aria-current={map.current ? 'page' : undefined}
            onClick={() => {
              setCurrentMap(map.name);
              setCurrentChar(1);
            }}
          >
            {map.name}
          </button>
        ))}
      </nav>

      <div className={`${
        currentMap === "Mondstadt" ? "block" : "hidden"
      } ${styles.char_mondstadt} w-screen h-screen`}
      >
        <div className={`${styles.shades} absolute top-0 left-0 w-full h-full xl:hidden`}></div>
        <div className={`${styles.shadesreverse} hidden absolute top-0 left-0 w-full h-full xl:block sm:hidden`}></div>
        <div className={`${
          currentChar === 1 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.jean} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/anemo.png"
                alt="Anemo"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-5xl font-bold mb-2">Jean</p>
              <Image
                src="/images/icon/five_star.png"
                alt="Five_Stars"
                width={177}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 2 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.venti} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/anemo.png"
                alt="Anemo"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-5xl font-bold mb-2">Venti</p>
              <Image
                src="/images/icon/five_star.png"
                alt="Five_Stars"
                width={177}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 3 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.diluc} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/pyro.png"
                alt="Pyro"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-5xl font-bold mb-2">Diluc</p>
              <Image
                src="/images/icon/five_star.png"
                alt="Five_Stars"
                width={177}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 4 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.bennett} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/pyro.png"
                alt="Pyro"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-5xl font-bold mb-2">Bennett</p>
              <Image
                src="/images/icon/four_star.png"
                alt="Four_Stars"
                width={141.5}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className="flex items-end w-full h-full">
          <Swiper
            direction={"horizontal"}
            slidesPerView={1}
            mousewheel={true}
            speed={600}
            modules={[Mousewheel]}
            className="mySwiper w-full h-3/4"
          >
            <SwiperSlide className={`${styles.character} ${styles.jean}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.venti}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.diluc}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.bennett}`}></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={`${
        currentMap === "Liyue" ? "block" : "hidden"
      } ${styles.char_liyue} w-screen h-screen`}
      >
        <div className={`${styles.shades} absolute top-0 left-0 w-full h-full xl:hidden`}></div>
        <div className={`${styles.shadesreverse} hidden absolute top-0 left-0 w-full h-full xl:block sm:hidden`}></div>
        <div className={`${
          currentChar === 1 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.ningguang} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/geo.png"
                alt="Geo"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-4xl font-bold mb-2">NingGuang</p>
              <Image
                src="/images/icon/four_star.png"
                alt="Four_Stars"
                width={141.5}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 2 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.zhongli} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/geo.png"
                alt="Geo"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-5xl font-bold mb-2">ZhongLi</p>
              <Image
                src="/images/icon/five_star.png"
                alt="Five_Stars"
                width={177}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 3 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.xiao} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/anemo.png"
                alt="Anemo"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-5xl font-bold mb-2">Xiao</p>
              <Image
                src="/images/icon/five_star.png"
                alt="Five_Stars"
                width={177}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 4 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.xingqiu} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/hydro.png"
                alt="Hydro"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-5xl font-bold mb-2">XingQiu</p>
              <Image
                src="/images/icon/four_star.png"
                alt="Four_Stars"
                width={141.5}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 5 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.xiangling} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/pyro.png"
                alt="Pyro"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-4xl font-bold mb-2">XiangLing</p>
              <Image
                src="/images/icon/four_star.png"
                alt="Four_Stars"
                width={141.5}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className="flex items-end w-full h-full">
          <Swiper
            direction={"horizontal"}
            slidesPerView={1}
            mousewheel={true}
            speed={600}
            modules={[Mousewheel]}
            className="mySwiper w-full h-3/4"
          >
            <SwiperSlide className={`${styles.character} ${styles.ningguang}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.zhongli}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.xiao}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.xingqiu}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.xiangling}`}></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={`${
        currentMap === "Inazuma" ? "block" : "hidden"
      } ${styles.char_inazuma} w-screen h-screen`}
      >
        <div className={`${styles.shades} absolute top-0 left-0 w-full h-full xl:hidden`}></div>
        <div className={`${styles.shadesreverse} hidden absolute top-0 left-0 w-full h-full xl:block sm:hidden`}></div>
        <div className={`${
          currentChar === 1 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.ayaka} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/cryo.png"
                alt="Cryo"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-3xl font-bold mb-2">Kamisato Ayaka</p>
              <Image
                src="/images/icon/five_star.png"
                alt="Five_Stars"
                width={177}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 2 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.ei} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/electro.png"
                alt="Electro"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-3xl font-bold mb-2">Raiden Shogun</p>
              <Image
                src="/images/icon/five_star.png"
                alt="Five_Stars"
                width={177}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 3 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.miko} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/electro.png"
                alt="Electro"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-4xl font-bold mb-2">Yae Miko</p>
              <Image
                src="/images/icon/five_star.png"
                alt="Five_Stars"
                width={177}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 4 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.kokomi} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/hydro.png"
                alt="Hydro"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-2xl font-bold mb-2">Sangonomiya Kokomi</p>
              <Image
                src="/images/icon/five_star.png"
                alt="Five_Stars"
                width={177}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 5 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.kazuha} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/anemo.png"
                alt="Anemo"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-2xl font-bold mb-2">Kaedehara Kazuha</p>
              <Image
                src="/images/icon/five_star.png"
                alt="Five_Stars"
                width={177}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 6 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.yoimiya} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/pyro.png"
                alt="Pyro"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-5xl font-bold mb-2">Yoimiya</p>
              <Image
                src="/images/icon/five_star.png"
                alt="Five_Stars"
                width={177}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className={`${
          currentChar === 7 ? "block lg:flex" : "hidden"
        } ${styles.character} ${styles.itto} absolute w-full h-full lg:justify-center sm:hidden`}>
          <div className="absolute flex items-end top-1/4 left-1/4 xl:bottom-0 xl:-ml-28 xl:mb-24 lg:ml-0 lg:static">
            <div>
              <Image
                src="/images/icon/geo.png"
                alt="Geo"
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 mb-4">
              <p className="text-white text-5xl font-bold mb-2">Itto</p>
              <Image
                src="/images/icon/five_star.png"
                alt="Five_Stars"
                width={177}
                height={31}
              />
            </div>
          </div>
        </div>
        <div className="flex items-end w-full h-full">
          <Swiper
            direction={"horizontal"}
            slidesPerView={1}
            mousewheel={true}
            speed={600}
            modules={[Mousewheel]}
            className="mySwiper w-full h-3/4"
          >
            <SwiperSlide className={`${styles.character} ${styles.ayaka}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.ei}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.miko}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.kokomi}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.kazuha}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.yoimiya}`}></SwiperSlide>
            <SwiperSlide className={`${styles.character} ${styles.itto}`}></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <button
        className={`${
          currentChar === 1 ? "hidden" : "block"
        } absolute z-30 top-1/2 left-6 duration-100 hover:scale-125 sm:hidden`}
        onClick={handlePrevBtn}
      >
        <Image
          src="/images/icon/prev_btn.webp"
          alt="Prev"
          width={72}
          height={72}
        />
      </button>
      <button
        className={`${
          currentChar === numOfChar ? "hidden" : "block"
        } absolute z-30 top-1/2 right-6 duration-100 hover:scale-125 sm:hidden`}
        onClick={handleNextBtn}
      >
        <Image
          src="/images/icon/next_btn.webp"
          alt="Next"
          width={72}
          height={72}
        />
      </button>
    </div>
  )
}

export default Characters;
