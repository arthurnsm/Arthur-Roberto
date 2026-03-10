"use client";

import { useLanguage } from "../context/languageContext";

export default function ToggleLanguage() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="hidden md:flex px-2 py-1 rounded-md border border-[#404040] gap-4">
      <span
        onClick={() => setLanguage("PT")}
        className={`cursor-pointer transition-colors duration-200 ${
          language === "PT"
            ? "text-black dark:text-white"
            : "text-[#848383] dark:text-[#686868] hover:text-gray-600 dark:hover:text-gray-400"
        }`}
      >
        PT
      </span>
      <span
        onClick={() => setLanguage("EN")}
        className={`cursor-pointer transition-colors duration-200 ${
          language === "EN"
            ? "text-black dark:text-white"
            : "text-[#848383] dark:text-[#686868] hover:text-gray-600 dark:hover:text-gray-400"
        }`}
      >
        EN
      </span>
    </div>
  );
}