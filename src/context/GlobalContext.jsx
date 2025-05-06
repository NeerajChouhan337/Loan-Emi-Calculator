import { createContext, useState, useContext, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Initialize state with false (light mode) by default
  const [darkMode, setDarkMode] = useState(false);

  // Optional: Load saved preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Optional: Save preference to localStorage
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <GlobalContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "dark" : ""}>
        {children}
      </div>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);