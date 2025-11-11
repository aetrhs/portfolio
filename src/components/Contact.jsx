function Contact() {
  return (
    <div id="contact-id" className="min-h-screen flex flex-col justify-center items-center text-white py-20">
      <h2 className="text-2xl lg:text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="text-lg text-center max-w-2xl mb-8">
        I'm always open to discussing new opportunities and interesting projects.
      </p>
      <div className="flex gap-6">
        <a 
          href="mailto:your.email@example.com" 
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors"
        >
          Email Me
        </a>
        <a 
          href="https://linkedin.com/in/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-green-600 hover:bg-green-600 px-6 py-3 rounded-lg transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;