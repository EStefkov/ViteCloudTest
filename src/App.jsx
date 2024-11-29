import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="font-sans bg-gray-50 dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-500">
        {/* Navbar */}
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        {/* Sections */}
        <div className="pt-16">
          <section id="home">
            <Header />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
