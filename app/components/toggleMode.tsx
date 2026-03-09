"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ToggleMode() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
      onClick={toggleTheme} className="flex" aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <Sun  className="text-[#CDCDCD] hover:text-white flex hover:cursor-pointer hover:scale-110"/> : <Moon className="flex text-[#5e5e5e] hover:text-black hover:cursor-pointer hover:scale-110"/>}
    </button>
  );
}