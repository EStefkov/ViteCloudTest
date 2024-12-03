import { useLanguage } from "./LanguageProvider";

const Contact = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Get in Touch",
      description:
        "Feel free to reach out via email or connect with me on social platforms.",
      emailLabel: "Email",
    },
    bg: {
      title: "Свържете се с мен",
      description:
        "Не се колебайте да се свържете с мен по имейл или в социалните мрежи.",
      emailLabel: "Имейл",
    },
  };

  return (
    <section className="bg-indigo-50 dark:bg-gray-800 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          {translations[language].title}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {translations[language].description}
        </p>
        <form className="flex flex-col gap-4">
          <p className="text-gray-800 dark:text-gray-200">
            {translations[language].emailLabel}: estefkov1996@gmail.com
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
