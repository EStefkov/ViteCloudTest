const About = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/me.jpg"
            alt="Emiliyan Stefkov"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-indigo-600 shadow-lg transform hover:scale-110 transition-transform duration-300 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I’m a passionate software developer with expertise in modern web
            technologies. I specialize in JavaScript, Java, and Spring, creating impactful
            applications that address real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
