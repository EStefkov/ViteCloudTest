const Contact = () => {
  return (
    <section className="py-10 px-5 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-secondary mb-4">Contact Me</h2>

        

        {/* Contact Links Section */}
        <div className="space-y-4">
          <p className="text-lg">
            E-mail estefkov1996@gmail.com
          </p>
          <div className="flex justify-center gap-6">
            
            <a
              href="https://www.linkedin.com/in/emiliyan-stefkov-00b4a5247/"
              className="text-primary hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/e_stefkov/"
              className="text-primary hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/d3evice"
              className="text-primary hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://x.com/Demonationnn"
              className="text-primary hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a
              href="https://github.com/EStefkov"
              className="text-primary hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
