
const Skills = () => {
  const skills = ['JavaScript','Java', 'React', 'Node.js', 'Tailwind CSS','CSS', 'MySql','Solidity'];

  return (
    <section className="py-10 px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-secondary mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-background rounded shadow-md text-center">
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
