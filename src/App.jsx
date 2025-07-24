import './App.css';
import About from './component/About';
import AcademicLevel from './component/AcademicLevel';
import Contact from './component/Contact';
import Experience from './component/Experience';
import Header from './component/Header';
import Nav from './component/Nav';
import Projects from './component/Projects';
import Skills from './component/Skills';
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showButton, setShowButton] = useState(false);

  // حفظ الثيم في localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // إظهار زر العودة للأعلى عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // تنفيذ الصعود لأعلى
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="overflow-x-hidden">
      <Nav theme={theme} setTheme={setTheme} />
      <Header theme={theme} />
      <About theme={theme} />
      <AcademicLevel theme={theme} />
      <Skills theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />

      {/* زر العودة للأعلى */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg transition-all duration-300
            ${theme === "dark"
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-red-500 text-white hover:bg-red-600"}`}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </main>
  );
}

export default App;
