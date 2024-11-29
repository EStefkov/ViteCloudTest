import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="font-sans bg-gray-50 dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-500">
        {/* Theme Toggle Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {isDarkMode ? "Day Mode" : "Night Mode"}
          </button>
        </div>
        {/* Main Content */}
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
