import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";

const Navbar = memo(
  ({
    darkMode,
    setDarkMode,
    language,
    setLanguage,
    menuOpen,
    setMenuOpen,
    content,
    scrolled,
    onBook,
  }) => {
    const handleNavClick = useCallback(
      (e, index) => {
        e.preventDefault();
        setMenuOpen(false);

        const el = document.getElementById(`section-${index}`);
        if (!el) return;

        const offset = 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top: y, behavior: "smooth" });
      },
      [setMenuOpen]
    );

    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={
          "fixed w-full z-50 transition-all duration-300 " +
          (scrolled
            ? darkMode
              ? "bg-gray-900/90 backdrop-blur-xl shadow-xl border-b border-purple-500/20"
              : "bg-white/90 backdrop-blur-xl shadow-xl border-b border-purple-500/10"
            : "bg-transparent")
        }
      >
        <div className="max-w-7xl mx-auto h-20 px-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Oubi tech
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {content.nav.map((item, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                onClick={(e) => handleNavClick(e, i)}
                className="relative group text-sm font-medium"
              >
                <span className="hover:text-purple-600 transition-colors">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="px-3 py-2 rounded-lg border text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900/20"
            >
              {language === "ar" ? "EN" : "ع"}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border hover:bg-purple-100 dark:hover:bg-purple-900/20"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={onBook}
              className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              {language === "ar" ? "احجز مكالمة" : "Book a Call"}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={
              (darkMode ? "bg-gray-800/95" : "bg-white/95") +
              " backdrop-blur-xl border-t md:hidden"
            }
          >
            <div className="px-4 py-4 space-y-3">
              {content.nav.map((item, i) => (
                <motion.a
                  key={i}
                  href={`#section-${i}`}
                  onClick={(e) => handleNavClick(e, i)}
                  whileHover={{ x: 5 }}
                  className="block py-3 px-4 rounded-xl hover:bg-purple-600 hover:text-white transition-all"
                >
                  {item}
                </motion.a>
              ))}

              <button
                onClick={() => {
                  setMenuOpen(false);
                  onBook();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg"
              >
                {language === "ar" ? "احجز مكالمة" : "Book a Call"}
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    );
  }
);

export default Navbar;
