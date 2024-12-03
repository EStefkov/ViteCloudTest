import { useState } from "react";
import { FaJs, FaJava, FaReact, FaNode, FaGit, FaPython, FaHtml5 } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiSolidity, SiCsharp, SiCplusplus } from "react-icons/si";
import { useLanguage } from "./LanguageProvider";

const Skills = () => {
  const { language } = useLanguage();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const translations = {
    en: {
      title: "Skills",
      descriptions: {
        JavaScript: "I gained solid knowledge in JavaScript through courses at SoftUni, covering both frontend and backend development.",
        Java: "I study Java at university, and my final year project will feature Java Spring for the backend. This includes in-depth knowledge of backend development.",
        React: "I have experience with React from university courses and online training. Additionally, I will use React as the frontend framework for my final year project.",
        "Node.js": "I acquired knowledge of Node.js through SoftUni courses, enabling me to work on backend JavaScript applications.",
        Tailwind: "I'm currently learning TailwindCSS, and this website is entirely built using it.",
        MySQL: "MySQL was the first relational database I worked with, providing me with strong foundational knowledge in database management and backend systems.",
        Solidity: "I completed a Solidity course at SoftUni, gaining an understanding of blockchain development and smart contract programming.",
        "C#": "I have basic knowledge of C# from university, primarily for object-oriented programming (OOP).",
        "C++": "C++ was the first programming language I learned. It introduced me to object-oriented programming and the four principles of OOP.",
        Git: "I use Git for version control and managing repositories, including pushing projects to GitHub.",
        Python: "At university, I learned Python for building AI models and explored basic object-oriented programming concepts.",
        "HTML & CSS": "I use HTML and CSS to create structured and styled web pages, laying the foundation for responsive and visually appealing designs.",
      },
    },
    bg: {
      title: "Скилове",
      descriptions: {
        JavaScript: "Придобих солидни познания по JavaScript чрез курсове в SoftUni, обхващащи както frontend, така и backend разработка.",
        Java: "Изучавам Java в университета, като дипломната ми работа ще включва Java Spring за бекенд, което ме запознава с дълбочината на бекенд разработката.",
        React: "Имам опит с React от университетски предмети и онлайн курсове. Освен това ще използвам React като фронтенд фреймуърк за дипломната си работа.",
        "Node.js": "Придобих знания по Node.js чрез курсове в SoftUni, които ми позволиха да работя по backend приложения на JavaScript.",
        Tailwind: "В момента се уча на TailwindCSS, а този сайт е изцяло разработен с него.",
        MySQL: "MySQL беше първата релационна база данни, с която работих, и тя ми даде солидна основа за работа с бази данни и бекенд системи.",
        Solidity: "Завърших курс по Solidity в SoftUni, където се запознах с блокчейн разработка и програмиране на смарт договори.",
        "C#": "Имам базови познания по C# от университета, главно за обектно-ориентирано програмиране (ООП).",
        "C++": "C++ беше първият програмен език, който научих. Той ме въведе в обектно-ориентираното програмиране и четирите основни принципа на ООП.",
        Git: "Използвам Git за контрол на версиите и управление на репозитории, включително качване на проекти в GitHub.",
        Python: "В университета изучавах Python за изграждане на AI модели и разглеждах основни концепции на обектно-ориентираното програмиране.",
        "HTML & CSS": "Използвам HTML и CSS за създаване на структурирани и стилизирани уеб страници, основа за респонсивен и привлекателен дизайн.",
      },
    },
  };
  

  const skills = [
    { name: "JavaScript", icon: <FaJs />, color: "bg-gradient-to-r from-yellow-400 to-yellow-500" },
    { name: "Java", icon: <FaJava />, color: "bg-gradient-to-r from-orange-400 to-red-500" },
    { name: "React", icon: <FaReact />, color: "bg-gradient-to-r from-blue-400 to-blue-600" },
    { name: "Node.js", icon: <FaNode />, color: "bg-gradient-to-r from-green-400 to-teal-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
    { name: "MySQL", icon: <SiMysql />, color: "bg-gradient-to-r from-blue-500 to-indigo-500" },
    { name: "Solidity", icon: <SiSolidity />, color: "bg-gradient-to-r from-gray-400 to-gray-600" },
    { name: "C#", icon: <SiCsharp />, color: "bg-gradient-to-r from-purple-500 to-indigo-500" },
    { name: "C++", icon: <SiCplusplus />, color: "bg-gradient-to-r from-blue-500 to-blue-700" },
    { name: "Git", icon: <FaGit />, color: "bg-gradient-to-r from-orange-500 to-red-500" },
    { name: "Python", icon: <FaPython />, color: "bg-gradient-to-r from-green-400 to-green-600" },
    { name: "HTML & CSS", icon: <FaHtml5 />, color: "bg-gradient-to-r from-orange-400 to-yellow-500" },
  ];

  const closePopup = () => setSelectedSkill(null);

  return (
    <section className="bg-indigo-50 dark:bg-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-500 dark:text-indigo-300 text-center mb-12">
          {translations[language].title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setSelectedSkill(skill)}
              className={`p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ${skill.color} relative cursor-pointer`}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent dark:from-black/20 dark:to-transparent pointer-events-none"></div>
              <div className="flex justify-center items-center mb-4 text-white text-5xl">
                {skill.icon}
              </div>
              <p className="text-center text-lg font-semibold text-white tracking-wide">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg p-6 max-w-sm">
            <h3 className="text-2xl font-bold mb-4">{selectedSkill.name}</h3>
            <p className="text-lg mb-6">
              {translations[language].descriptions[selectedSkill.name]}
            </p>
            <button
              onClick={closePopup}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
