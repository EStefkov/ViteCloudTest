import { FaJs, FaJava, FaReact, FaNode, FaGit, FaPython, FaHtml5 } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiSolidity, SiCsharp, SiCplusplus } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJs />, color: 'bg-gradient-to-r from-yellow-400 to-yellow-500' },
    { name: 'Java', icon: <FaJava />, color: 'bg-gradient-to-r from-orange-400 to-red-500' },
    { name: 'React', icon: <FaReact />, color: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { name: 'Node.js', icon: <FaNode />, color: 'bg-gradient-to-r from-green-400 to-teal-500' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
    { name: 'MySQL', icon: <SiMysql />, color: 'bg-gradient-to-r from-blue-500 to-indigo-500' },
    { name: 'Solidity', icon: <SiSolidity />, color: 'bg-gradient-to-r from-gray-400 to-gray-600' },
    { name: 'C#', icon: <SiCsharp />, color: 'bg-gradient-to-r from-purple-500 to-indigo-500' },
    { name: 'C++', icon: <SiCplusplus />, color: 'bg-gradient-to-r from-blue-500 to-blue-700' },
    { name: 'Git', icon: <FaGit />, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { name: 'Python', icon: <FaPython />, color: 'bg-gradient-to-r from-green-400 to-green-600' },
    { name: 'HTML & CSS', icon: <FaHtml5 />, color: 'bg-gradient-to-r from-orange-400 to-yellow-500' },
  ];

  return (
    <section className="bg-indigo-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-500 text-center mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ${skill.color} relative`}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none"></div>
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
    </section>
  );
};

export default Skills;
