const Projects = () => {
  const projects = [
    {
      name: 'SoftUni JS-Basic',
      link: 'https://github.com/EStefkov/JSProgramingBasics',
      description: 'An introductory course that laid the foundation for JavaScript programming, covering fundamental concepts such as variables, data types, loops, and basic problem-solving skills.'
    },
    {
      name: 'SoftUni JS-Fundamentals',
      link: 'https://github.com/EStefkov/JSFundamentalsSoftUni',
      description: 'A deeper dive into JavaScript, focusing on core programming concepts, functions, objects, and arrays, while building a solid understanding of how to write efficient and reusable code.'
    },
    {
      name: 'SoftUni JS-Advance',
      link: 'https://github.com/EStefkov/SoftUniJsAdvanced',
      description: 'Advanced JavaScript Development – This course provided in-depth knowledge of modern JavaScript concepts, including ES6+ features, asynchronous programming, closures, and advanced DOM manipulation. It also covered best practices for writing clean, maintainable code and introduced me to advanced frameworks and libraries for building dynamic web applications.'
    },
    {
        name: 'Blank-System',
        link: 'https://github.com/EStefkov/Blank-System',
        description: 'The Blank-System is a Restaurant and Bar Management Software designed to streamline operations in the food and beverage industry. Built collaboratively by a team of three developers, this project demonstrates my experience in team-based development and showcases my technical skills.'
    },
    {
        name: 'IKARUS',
        link: 'https://github.com/EStefkov/BankAccounts',
        description: 'IKARUS system is a banking system that offers functionality for managing bank accounts. The system allows users to view, add balance, and search for information about bank accounts. This project was created for educational purposes'
    },
    {
        name: 'Employee-Management-System',
        link: 'https://github.com/EStefkov/Employee-Management-System',
        description: 'This Employee Management System is designed to efficiently manage employee data, such as registering new employees, displaying a list of employees, updating employee information, and deleting employees. The project uses JavaScript, Node.js, Express.js, and MongoDB. It follows the MVC (Model-View-Controller) architecture for better organization and scalability.'
    },
    {
        name: 'CRUD User Management Application',
        link: 'https://github.com/EStefkov/CRUDAppSpring',
        description: 'The CRUD User Management Application is a RESTful API designed to efficiently manage user data through core CRUD operations: Create, Read, Update, and Delete. This project highlights my expertise in backend development and API design, ensuring robust functionality and scalability.'
    },
    {
        name: 'QR_Menu_Generator',
        link: 'https://github.com/EStefkov/QR_Menu_Generator',
        description: 'QR_Menu_Generator is a web application for digitizing restaurant menus using dynamically generated QR codes. It features a Java Spring backend with MySQL for data management and a React + Vite frontend for a fast and responsive user experience. As my final-year project and first large-scale development, this showcases my ability to build practical solutions with modern technologies.'
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-600 dark:text-purple-400 text-center mb-12">
          Projects and Courses
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
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto bg-purple-600 dark:bg-purple-500 text-white dark:text-gray-900 px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
                >
                  View Project →
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