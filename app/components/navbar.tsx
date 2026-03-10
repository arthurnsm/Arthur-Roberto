"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LogoWhite from "../../public/images/svg/logo_white.svg";
import LogoBlack from "../../public/images/svg/logo_black.svg";
import ToggleMode from "./toggleMode";
import ToggleLanguage from "./toggleLanguage";
import { useLanguage } from "../context/languageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const { t } = useLanguage();

  const navItems = [
    { label: t("INÍCIO", "HOME"),     id: "home"     },
    { label: t("SOBRE MIM", "ABOUT"), id: "about"    },
    { label: t("PROJETOS", "PROJECTS"), id: "projects" },
    { label: t("CONTATO", "CONTACT"), id: "contact"  },
  ];

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

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-2 md:px-16 h-18 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-100 dark:border-neutral-900 transition-colors duration-300">

        {/* Logo clicável */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollTo("home")}
        >
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
            height={50}
            priority
            className="hidden dark:block transition-colors duration-200"
          />
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex">
          <ul className="flex gap-20">
            {navItems.map(({ label, id }) => (
              <li
                key={id}
                onClick={() => scrollTo(id)}
                className={`cursor-pointer font-normal transition-colors duration-300 ${
                  activeId === id
                    ? "text-[#6F05F0]"
                    : "text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Controles direita */}
        <div className="flex items-center gap-4 md:gap-16">
          <ToggleLanguage />
          <ToggleMode />

          <button
            className="flex md:hidden flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      <div className="h-20" />

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-white dark:bg-black transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-10">
          {navItems.map(({ label, id }) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-2xl font-normal cursor-pointer tracking-widest transition-colors duration-300 ${
                activeId === id
                  ? "text-[#6F05F0]"
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