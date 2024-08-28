import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import styles from "@/styles/menu.module.css";

const Menu = () => {
  return (
    <nav className="flex justify-between p-4 border-b-[0.5px] border-accent">
      <div className="block w-[50px] h-[50px]">
        <svg
          width="50"
          height="35"
          viewBox="0 0 50 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.1392 0.387573V34.6123H23.1285L4.47863 7.74055H4.14441V34.6123H0V0.387573H4.01072L22.7274 27.3262H23.0616V0.387573H27.1392Z"
            fill="#FBECE6"
          />
          <path
            d="M30.1807 17.5563H37.8554"
            stroke="#FCD4B7"
            stroke-width="5.09"
          />
          <path d="M29 3.38757H49.6627" stroke="#FCD4B7" stroke-width="5.09" />
        </svg>
      </div>
      <ul
        className={twMerge(
          "flex items-center justify-around gap-[24px]",
          styles.menuContainer
        )}
      >
        <li>
          <Link href={"#"}>A propos</Link>
        </li>
        <li>
          <Link href={"#"}>Procédures</Link>
        </li>
        <li>
          <Link href={"#"}>Témoignage</Link>
        </li>
        <li>
          <Link href={"#"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
