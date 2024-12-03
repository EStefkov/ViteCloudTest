import { useLanguage } from "./LanguageProvider";

const Header = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Emiliyan Stefkov",
      subtitle: "Software Engineer",
      description:
        "Crafting modern solutions with a passion for coding and creativity.",
    },
    bg: {
      title: "Емилиян Стефков",
      subtitle: "Софтуерен Инженер",
      description:
        "Създаване на модерни решения с любов към програмирането и креативността.",
    },
  };

  return (
    <header className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          {translations[language].title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-2 sm:mt-3 md:mt-4 whitespace-nowrap">
  {translations[language].subtitle}
</p>

        <p className="mt-6 text-lg">{translations[language].description}</p>
      </div>
    </header>
  );
};

export default Header;
