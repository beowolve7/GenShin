import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.scss"

const Navbar = () => {
  const [color, setColor] = useState(false);
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
    <nav className={`${color ? styles.navbarbg : ""} duration-500 flex items-center justify-between fixed z-50 top-0 left-0 h-20 w-full px-12 text-white`}>
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
      <ul className="flex flex-row gap-12 text-lg">
        <li className="underline-offset-2 ease-in-out opacity-80 duration-300 hover:underline hover:scale-110 hover:font-medium hover:opacity-100">
          <Link href="">
            <a>News</a>
          </Link>
        </li>
        <li className="underline-offset-2 ease-in-out opacity-80 duration-300 hover:underline hover:scale-110 hover:font-medium hover:opacity-100">
          <Link href="">
            <a>Characters</a>
          </Link>
        </li>
        <li className="underline-offset-2 ease-in-out opacity-80 duration-300 hover:underline hover:scale-110 hover:font-medium hover:opacity-100">
          <Link href="">
            <a>World</a>
          </Link>
        </li>
        <li className="underline-offset-2 ease-in-out opacity-80 duration-300 hover:underline hover:scale-110 hover:font-medium hover:opacity-100">
          <a href="">Community</a>
        </li>
      </ul>
      <button className="font-medium border-2 rounded-md px-3 py-1 duration-100 hover:bg-lime-500 hover:scale-95">
        Login
      </button>
    </nav>
  )
}

export default Navbar;
