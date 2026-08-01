import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Lang = "en" | "tl";

const T = {
  en: {
    heroTitle: "Philippines in 2 Minutes",
    heroSubtitle: "Explore population, economy, geography, and more — all in one place.",
    exploreData: "Explore Data",
    browseRegion: "Browse by Region",
    navHome: "Home",
    navExplore: "Explore Data",
    navRegions: "Regions",
    navAbout: "About",
  },
  tl: {
    heroTitle: "Pilipinas sa 2 Minuto",
    heroSubtitle: "Tuklasin ang populasyon, ekonomiya, heograpiya, at higit pa.",
    exploreData: "Tuklasin ang Datos",
    browseRegion: "Mga Rehiyon",
    navHome: "Home",
    navExplore: "Datos",
    navRegions: "Mga Rehiyon",
    navAbout: "Tungkol",
  },
};

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: typeof T["en"];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((prev) => (prev === "en" ? "tl" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: T[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}