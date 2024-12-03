import { useLanguage } from "./LanguageProvider";

const Projects = () => {
  const { language } = useLanguage();

  const projects = [
    {
      name: "SoftUni JS-Basic",
      link: "https://github.com/EStefkov/JSProgramingBasics",
      description: {
        en: "An introductory course that laid the foundation for JavaScript programming, covering fundamental concepts such as variables, data types, loops, and basic problem-solving skills.",
        bg: "Въведение в програмирането с JavaScript, обхващащо основни концепции като променливи, типове данни, цикли и основни умения за решаване на проблеми.",
      },
    },
    {
      name: "SoftUni JS-Fundamentals",
      link: "https://github.com/EStefkov/JSFundamentalsSoftUni",
      description: {
        en: "A deeper dive into JavaScript, focusing on core programming concepts, functions, objects, and arrays, while building a solid understanding of how to write efficient and reusable code.",
        bg: "По-задълбочено изучаване на JavaScript, фокусирано върху основни концепции за програмиране, функции, обекти и масиви, с цел писане на ефективен и многократно използваем код.",
      },
    },
    {
      name: "SoftUni JS-Advance",
      link: "https://github.com/EStefkov/SoftUniJsAdvanced",
      description: {
        en: "Advanced JavaScript Development – This course provided in-depth knowledge of modern JavaScript concepts, including ES6+ features, asynchronous programming, closures, and advanced DOM manipulation.",
        bg: "Разширено програмиране с JavaScript – курсът предоставя задълбочени познания за модерни концепции в JavaScript, включително ES6+ функционалности, асинхронно програмиране, closures и усъвършенствана работа с DOM.",
      },
    },
    {
      name: "Blank-System",
      link: "https://github.com/EStefkov/Blank-System",
      description: {
        en: "The Blank-System is a Restaurant and Bar Management Software designed to streamline operations in the food and beverage industry.",
        bg: "Blank-System е софтуер за управление на ресторанти и барове, създаден за оптимизиране на операциите в индустрията за храни и напитки.",
      },
    },
    {
      name: "IKARUS",
      link: "https://github.com/EStefkov/BankAccounts",
      description: {
        en: "IKARUS system is a banking system that offers functionality for managing bank accounts.",
        bg: "IKARUS е банковa система, която предлага функционалности за управление на банкови сметки.",
      },
    },
    {
      name: "Employee-Management-System",
      link: "https://github.com/EStefkov/Employee-Management-System",
      description: {
        en: "This Employee Management System is designed to efficiently manage employee data.",
        bg: "Тази система за управление на служители е предназначена за ефективно управление на данни за служителите.",
      },
    },
    {
      name: "CRUD User Management Application",
      link: "https://github.com/EStefkov/CRUDAppSpring",
      description: {
        en: "A RESTful API designed to efficiently manage user data through core CRUD operations.",
        bg: "RESTful API, предназначен за ефективно управление на потребителски данни чрез основни CRUD операции.",
      },
    },
    {
      name: "QR_Menu_Generator",
      link: "https://github.com/EStefkov/QR_Menu_Generator",
      description: {
        en: "A web application for digitizing restaurant menus using dynamically generated QR codes.",
        bg: "Уеб приложение за дигитализация на ресторантски менюта чрез динамично генерирани QR кодове.",
      },
    },
  ];

  const translations = {
    en: {
      title: "Projects and Courses",
      viewProject: "View Project →",
    },
    bg: {
      title: "Проекти и курсове",
      viewProject: "Виж проекта →",
    },
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-600 dark:text-purple-400 text-center mb-12">
          {translations[language].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-white/5 to-transparent dark:from-purple-500/10 dark:via-black/10 dark:to-black/5 pointer-events-none"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description[language]}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto bg-purple-600 dark:bg-purple-500 text-white dark:text-gray-900 px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
                >
                  {translations[language].viewProject}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
