import { createContext, useContext, useState } from "react";

type Language = Record<string, string>;

import { fa, en } from "../languages";

interface Value {
  language: Language;
  changeLanguage: (language: "fa" | "en") => void;
  direction: "ltr" | "rtl"
}

const languageContext = createContext<Value | null>(null);

export const useLangugae = () => useContext(languageContext);

interface Props {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>(fa);
  const [direction, setDirection] = useState<"rtl" | "ltr">("rtl");

  const changeLanguage = (language: "fa" | "en") => {
    if (language === "fa") {
      setLanguage(fa);
      setDirection("rtl");
    } else {
      setLanguage(en);
      setDirection("ltr");
    }
  };

  const value: Value = {
    language,
    changeLanguage,
    direction
  };

  return (
    <languageContext.Provider value={value}>
      {children}
    </languageContext.Provider>
  );
}
