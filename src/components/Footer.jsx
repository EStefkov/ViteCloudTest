import { useLanguage } from "./LanguageProvider";

const Footer = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      copyright: "All rights reserved.",
    },
    bg: {
      copyright: "Всички права запазени.",
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="text-center">
        <p>&copy; 2024 Emiliyan Stefkov</p>
        <p className="text-sm">{translations[language].copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
