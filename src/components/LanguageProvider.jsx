import { createContext, useContext, useState } from "react";

// Създаваме контекст
const LanguageContext = createContext();

// LanguageProvider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // "en" за английски, "bg" за български

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "bg" : "en"));

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook за достъп до езика
export const useLanguage = () => useContext(LanguageContext);
