
const Contact = () => {
  return (
    <section className="py-10 px-5 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-secondary mb-4">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full px-4 py-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="block w-full px-4 py-2 border rounded"
          ></textarea>
          <button className="px-6 py-2 bg-primary text-white rounded">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
