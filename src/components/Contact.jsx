const Contact = () => {
  return (
    <section className="bg-indigo-50 dark:bg-gray-800 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Feel free to reach out via email or connect with me on social platforms.
        </p>

        <form className="flex flex-col gap-4">
          <p className="text-gray-800 dark:text-gray-200">Email: estefkov1996@gmail.com</p>
        </form>

        <div className="flex justify-center gap-4 text-indigo-600 dark:text-indigo-400">
          <a
            href="https://www.linkedin.com/in/emiliyan-stefkov-00b4a5247/"
            className="hover:text-indigo-800 dark:hover:text-indigo-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/EStefkov"
            className="hover:text-indigo-800 dark:hover:text-indigo-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/e_stefkov/"
            className="hover:text-indigo-800 dark:hover:text-indigo-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
