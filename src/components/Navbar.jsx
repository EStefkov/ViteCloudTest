import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-indigo-600 dark:bg-gray-800 text-white px-4 py-3 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Меню отляво */}
        <div className="flex items-center space-x-4">
          {/* Бутон за мобилно меню */}
          <button
            onClick={toggleMenu}
            className="text-2xl sm:hidden focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Навигационни линкове */}
          <ul
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              isOpen ? 'max-h-96' : 'max-h-0'
            } sm:max-h-none sm:overflow-visible sm:flex space-y-4 sm:space-y-0 sm:space-x-6 sm:items-center`}
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    to={section.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="block text-lg hover:text-indigo-300 transition-colors cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {section}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Бутон за дневен/нощен режим */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          {isDarkMode ? (
            <div className="flex items-center space-x-2">
              <FaSun />
              <span>Day Mode</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <FaMoon />
              <span>Night Mode</span>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
