"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import LogoWhite from "../../public/images/svg/logo_white.svg";
import LogoBlack from "../../public/images/svg/logo_black.svg";

export default function Intro() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (!isVisible) {
      setShouldRender(false);
    }
  };

  if (!mounted || !shouldRender) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      className={`fixed inset-0 z-100 flex items-center justify-center transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${isDark ? "bg-foreground" : "bg-background"}`}
    >
      <div className="animate-logo-splash">
        <div className="flex w-40 md:w-100">
          <Image src={isDark ? LogoWhite : LogoBlack} alt="Logo" />
        </div>
      </div>
    </div>
  );
}