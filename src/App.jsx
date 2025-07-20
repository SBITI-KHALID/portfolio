import './App.css';
import About from './component/About';
import AcademicLevel from './component/AcademicLevel';
import Contact from './component/Contact';
import Experience from './component/Experience';
import Header from './component/Header';
import Nav from './component/Nav';
import Projects from './component/Projects';
import { useState, useEffect } from "react";
import Skills from './component/Skills';

function App() {
  const [theme, setTheme] = useState((localStorage.getItem("theme")));

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main className="overflow-x-hidden">
      <Nav theme={theme} setTheme={setTheme} />
      <Header theme={theme} />
      <About theme={theme} />
      <AcademicLevel theme={theme} />
      <Skills theme={theme}/>
      <Experience theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
    </main>
  );
}

export default App;
