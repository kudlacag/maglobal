import React, { createContext, useContext, useEffect, useState } from "react";
import i18n from "../data/i18n";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "DE"
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const t = (path) => {
    const keys = path.split(".");
    let value = i18n[lang];
    for (const k of keys) value = value?.[k];
    return value ?? path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);