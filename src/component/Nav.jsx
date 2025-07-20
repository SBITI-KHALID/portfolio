import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import '../i18n'; // تأكد من مسار ملف i18n.js

export default function Nav({theme, setTheme}) {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const lastScrollY = useRef(0);

  const sections = ["home", "about", "experience", "projects", "contact"];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('appLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);
    

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      lastScrollY.current = currentScrollY;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navButton = (id) => (
    <button
      key={id}
      onClick={() => scrollToSection(id)}
      className={`px-3 py-1 rounded transition font-medium ${
        activeSection === id
          ? "bg-red-500 text-white"
          : "hover:bg-red-500 hover:text-white text-gray-800"
      }
      ${theme === 'light' ? "" : "text-white"}`}
    >
      {t(id)}
    </button>
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('appLanguage', lng);
  };

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          key="navbar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 right-0 text-black sm:px-10 z-50 w-[100vw]"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className={`text-xl font-bold ${theme === "light" ? "" : "text-white"} uppercase`}>
              {t('khalid')}
            </div>

            <div className="hidden md:flex space-x-4 items-center">
              {sections.map((sec) => navButton(sec))}

              {/* زر اختيار اللغة */}
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className={`p-1 rounded border-0 ${theme === 'light'?"text-gray-900":"text-white bg-gray-900"} `}
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="ar">AR</option>
              </select>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full  transition`}
              >
                {theme === 'light' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
                ) : (
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <circle cx="12" cy="12" r="5" />
                  <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="1" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                  </g>
                </svg>
                )}
              </button>

<a
  href={`${process.env.PUBLIC_URL}/CV.pdf`}
  download
  className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition"
>

                {t('downloadCV')}
              </a>
            </div>

            {/* القائمة للهاتف المحمول */}
            <button
              className={`md:hidden hover:text-white focus:outline-none p-1 hover:bg-red-500 rounded ${theme === 'light' ? "" : "text-white"}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className={`md:hidden px-4 pb-4 space-y-2 pt-4 pr-3 ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"}`}>
              {sections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className={`block w-full text-left py-2 rounded text-center hover:text-white ${
                    activeSection === sec ? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"
                  } ${theme === "light" ? "" : "text-white"}`}
                >
                  {t(sec)}
                </button>
              ))}

              <div className="w-full flex items-center justify-center mt-2">
                <a
                  href="/Khalid_CV.pdf"
                  download
                  className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition"
                >
                  {t('downloadCV')}
                </a>
              </div>

              {/* زر اختيار اللغة في القائمة المتنقلة */}
              <div className="w-full flex items-center justify-center mt-2">
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  value={i18n.language}
                  className={`p-1 rounded border-0 ${theme === 'light'?"text-gray-900":"text-white bg-gray-900"} `}
                >
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                  <option value="ar">AR</option>
                </select>
              </div>

              <div className="w-full flex items-center justify-center mt-2">
                <button
                onClick={toggleTheme}
                className={`p-2 rounded-full  transition`}
              >
                {theme === 'light' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
                ) : (
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <circle cx="12" cy="12" r="5" />
                  <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="1" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                  </g>
                </svg>
                )}
              </button>
              </div>
            </div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
