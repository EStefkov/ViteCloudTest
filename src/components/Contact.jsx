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

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/d3evice" },
    { name: "GitHub", url: "https://github.com/EStefkov" },
    { name: "Instagram", url: "https://www.instagram.com/e_stefkov/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/emiliyan-stefkov-00b4a5247/" },
    { name: "X (Twitter)", url: "https://x.com/Demonationnn" },
  ];

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
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            {translations[language].socialsLabel}
          </h3>
          <ul className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
