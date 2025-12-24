import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/layout/Navbar";
import BookCallDrawer from "./components/layout/BookCallDrawer";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Values from "./components/sections/Values";
import Stats from "./components/sections/Stats";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Team from "./components/sections/Team";
import CTA from "./components/sections/CTA";

import { translations } from "./data/translations";
import useScrollPosition from "./hooks/useScrollPosition";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  const scrolled = useScrollPosition(50);
  const content = translations[language];
  const isRTL = language === "ar";

  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  const openBook = useCallback(() => setBookOpen(true), []);
  const closeBook = useCallback(() => setBookOpen(false), []);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        content={content}
        scrolled={scrolled}
        onBook={openBook}
      />

      <BookCallDrawer open={bookOpen} onClose={closeBook} language={language} />

      <Hero content={content} onBook={openBook} />
      <Values content={content} darkMode={darkMode} />
      <Stats content={content} darkMode={darkMode} />
      <Services content={content} onBook={openBook} darkMode={darkMode} />
      <Process content={content} darkMode={darkMode} />
      <Team language={language} darkMode={darkMode} />
      <CTA content={content} onBook={openBook} />
      <Footer language={language} content={content} />
    </div>
  );
}
