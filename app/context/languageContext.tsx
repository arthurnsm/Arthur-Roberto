"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "PT" | "EN";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (pt: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "PT",
  setLanguage: () => {},
  t: (pt) => pt,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("PT");

  const t = (pt: string, en: string) => language === "PT" ? pt : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);