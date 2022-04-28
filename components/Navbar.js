import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbar.module.scss"

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const changeColor = () => {
    if (window.scrollY > 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  return (
    <>
      <nav className={`${color ? styles.navbarbg : ""} duration-500 flex items-center justify-between fixed z-50 top-0 left-0 h-20 w-full px-12 text-white md:px-8 sm:hidden`}>
        <Link href="/">
          <a>
            <Image
              src="/images/logo/logo.png"
              alt="Logo"
              width={155.2}
              height={56}
            />
          </a>
        </Link>
        <ul className="flex flex-row gap-12 text-lg lg:gap-6 md:gap-4">
          <li className="font-medium underline-offset-2 ease-in-out opacity-80 duration-100 hover:underline hover:scale-110 hover:font-medium hover:opacity-100 md:text-sm">
            <Link href="/#news">
              <a>News</a>
            </Link>
          </li>
          <li className="font-medium underline-offset-2 ease-in-out opacity-80 duration-100 hover:underline hover:scale-110 hover:font-medium hover:opacity-100 md:text-sm">
            <Link href="">
              <a>Characters</a>
            </Link>
          </li>
          <li className="font-medium underline-offset-2 ease-in-out opacity-80 duration-100 hover:underline hover:scale-110 hover:font-medium hover:opacity-100 md:text-sm">
            <Link href="/world">
              <a>World</a>
            </Link>
          </li>
          <li className="font-medium underline-offset-2 ease-in-out opacity-80 duration-100 hover:underline hover:scale-110 hover:font-medium hover:opacity-100 md:text-sm">
            <a href="https://www.hoyolab.com/home">HoYoLAB</a>
          </li>
        </ul>
        <button className="flex items-center font-medium border-2 rounded-md px-3 py-1.5 duration-100 hover:bg-lime-500 hover:scale-95">
          <span className="mr-2">Login</span>
          <Image
            src="/images/icon/user.png"
            alt="User"
            width={18}
            height={18}
          />
        </button>
      </nav>

      <div className={`${styles.mobilemenu} ${openMenu ? "h-96" : "h-0"} hidden flex-col items-center fixed z-40 bottom-0 w-screen rounded-t-3xl duration-300 sm:flex`}>
        <ul className="flex flex-col gap-2 text-white text-lg font-medium pt-6">
          <li className="flex">
            <div className="mr-2">
              <Image
                src="/images/icon/news.png"
                alt="News"
                width={28}
                height={28}
              />
            </div>
            <Link href="/#news">
              <a onClick={() => setOpenMenu(false)}>News</a>
            </Link>
          </li>
          <li className="flex">
            <div className="mr-2">
              <Image
                src="/images/icon/characters.png"
                alt="Characters"
                width={28}
                height={28}
              />
            </div>
            <Link href="">
              <a onClick={() => setOpenMenu(false)}>Characters</a>
            </Link>
          </li>
          <li className="flex">
            <div className="mr-2">
              <Image
                src="/images/icon/world.png"
                alt="World"
                width={28}
                height={28}
              />
            </div>
            <Link href="/world">
              <a onClick={() => setOpenMenu(false)}>World</a>
            </Link>
          </li>
          <li className="flex">
            <div className="mr-2">
              <Image
                src="/images/icon/hoyolab.png"
                alt="HoYoLAB"
                width={28}
                height={28}
              />
            </div>
            <a
              href="https://www.hoyolab.com/home"
              onClick={() => setOpenMenu(false)}
              target="_blank"
              rel="noreferrer"
            >
              HoYoLAB
            </a>
          </li>
        </ul>
        <button className="flex items-center font-medium border-2 rounded-3xl mt-4 px-3 py-1.5 duration-100 focus:bg-lime-500 focus:scale-95">
          <span className="text-white mr-2">Login</span>
          <Image
            src="/images/icon/user.png"
            alt="User"
            width={18}
            height={18}
          />
        </button>
      </div>

      <div className="hidden fixed z-50 bottom-5 justify-center items-end w-screen h-16 sm:flex">
        <div className={`${styles.mobilemenubar} flex justify-evenly items-center bg-zinc-800 rounded-2xl w-5/6 h-14 pt-1`}>
          <Link href="/">
            <a>
              <div>
                <Image
                  src="/images/icon/home.png"
                  alt="Home"
                  width={28}
                  height={28}
                />
              </div>
            </a>
          </Link>
          <Link href="">
            <a>
              <div>
                <Image
                  src="/images/icon/download.png"
                  alt="Download"
                  width={28}
                  height={28}
                />
              </div>
            </a>
          </Link>
          <button onClick={() => setOpenMenu(!openMenu)}>
            <div>
              <Image
                src="/images/icon/more.png"
                alt="More"
                width={28}
                height={28}
              />
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar;
