"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LogoWhite from "../../public/images/svg/logo_white.svg";
import LogoBlack from "../../public/images/svg/logo_black.svg";
import ToggleMode from "./toggleMode";
import ToggleLanguage from "./toggleLanguage";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="w-full flex justify-between items-center px-4 py-2 md:px-16 h-30 ">

        <div className="flex ustify-center items-center">
          <Image
            src={LogoBlack}
            alt="Logo"
            width={50}
            height={50}
            priority
            className="dark:hidden transition-colors duration-200"
          />
          <Image
            src={LogoWhite}
            alt="Logo"
            width={50}
            priority
            className="hidden dark:block transition-colors duration-200"
          />
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-20">
            <li className="font-normal text-black dark:text-white cursor-pointer">
              INÍCIO
            </li>
            <li className="font-normal text-gray-600 dark:text-gray-400 cursor-pointer">
              SOBRE MIM
            </li>
            <li className="font-normal text-gray-600 dark:text-gray-400 cursor-pointer">
              PROJETOS
            </li>
            <li className="font-normal text-gray-600 dark:text-gray-400 cursor-pointer">
              CONTATO
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 md:gap-16">
          <ToggleLanguage />
          <ToggleMode />

          <button
            className="flex md:hidden flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-white dark:bg-black transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-10">
          {[
            { label: "INÍCIO", active: true },
            { label: "SOBRE MIM" },
            { label: "PROJETOS" },
            { label: "CONTATO" },
          ].map(({ label, active }) => (
            <li
              key={label}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-normal cursor-pointer tracking-widest transition-colors duration-200 ${
                active
                  ? "text-black dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}