import { createContext, useState, useEffect, useContext } from "react";

// Create a context
const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem("isDarkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("isDarkMode", JSON.stringify(isDark));
  }, [isDark]);

  const toggleIsDark = () => {
    setIsDark((prevVal) => !prevVal);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create a custom hook to use the ThemeContext
export function useTheme() {
  return useContext(ThemeContext);
}
