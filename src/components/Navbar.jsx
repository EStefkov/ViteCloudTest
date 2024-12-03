import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useLanguage } from "./LanguageProvider";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const translations = {
    en: { Home: "Home", About: "About Me", Skills: "Skills", Projects: "Projects", Contact: "Contact" },
    bg: { Home: "Начало", About: "За мен", Skills: "Умения", Projects: "Проекти", Contact: "Контакт" },
  };

  const translate = (key) => translations[language][key] || key;

  return (
    <nav className="bg-indigo-600 dark:bg-gray-800 text-white px-4 py-3 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Бутон за мобилно меню */}
        <button
          onClick={toggleMenu}
          className="text-lg focus:outline-none p-2 sm:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* Странично меню за мобилни устройства */}
        <div
          className={`fixed top-0 left-0 h-full bg-indigo-600 dark:bg-gray-800 z-40 w-64 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <button
            onClick={closeMenu}
            className="text-white text-2xl absolute top-4 right-4 focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col mt-16 space-y-4 px-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-lg hover:text-indigo-300 transition-colors cursor-pointer"
                onClick={closeMenu}
              >
                {translate(section)}
              </Link>
            ))}
          </div>
        </div>

        {/* Навигационни линкове за десктоп */}
        <div className="hidden sm:flex space-x-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-lg px-4 py-2 hover:text-indigo-300 transition-colors cursor-pointer"
            >
              {translate(section)}
            </Link>
          ))}
        </div>

        {/* Бутоните за превключване на тема и език */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-1 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors focus:outline-none"
            aria-label="Switch language"
          >
            {language === "en" ? "BG" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
