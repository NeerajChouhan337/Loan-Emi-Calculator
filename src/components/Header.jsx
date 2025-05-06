import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "../context/GlobalContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useGlobalContext();

  return (
    <header className="bg-blue-600 dark:bg-gray-800 text-white shadow relative">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Sidebar />
        <Link to="/" className="text-2xl font-bold">
          Loan Calculator
        </Link>

        {/* Desktop Nav */}
        <nav className="space-x-4 hidden md:flex items-center">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/exchange" className="hover:underline">
            Exchange Rates
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/error" className="hover:underline">
            Error
          </Link>
          
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 flex items-center focus:outline-none"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1">
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
            <span className="ml-2 text-sm">
              {darkMode ? "Dark" : "Light"}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;