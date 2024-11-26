const Skills = () => {
  const skills = ['JavaScript', 'Java', 'React', 'Node.js', 'Tailwind CSS', 'MySQL', 'Solidity'];

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-500 text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md text-center transition-shadow hover:shadow-lg"
            >
              <p className="text-lg font-medium text-gray-800">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
