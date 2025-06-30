import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaArrowRight } from 'react-icons/fa'; // Added FaArrowRight for call to action

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0f172a] text-white py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-extrabold  bg-clip-text  mb-8 relative">
          <span className="relative z-10 block animate-fade-in-down">Get in Touch</span>
        </h2>

        {/* Introductory Paragraph */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in-up">
          I'm always excited to connect! Whether you have a project in mind, a creative idea to share, or just want to chat about tech, feel free to reach out. Let's build something amazing together.
        </p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Email Card */}
          <a
            href="mailto:apupaul988@gmail.com"
            className="flex flex-col items-center p-6 bg-[#1e293b] rounded-xl shadow-lg border border-transparent hover:border-red-500 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group"
          >
            <FaEnvelope className="text-5xl text-red-400 mb-4 group-hover:text-red-500 transition-colors duration-300" />
            <span className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">Email Me</span>
            <span className="text-sm text-gray-400 mt-1">apupaul988@gmail.com</span>
            <FaArrowRight className="mt-4 text-red-400 group-hover:translate-x-2 transition-transform duration-300" />
          </a>

          {/* Phone Card */}
          <a
            href="tel:+8801645743205"
            className="flex flex-col items-center p-6 bg-[#1e293b] rounded-xl shadow-lg border border-transparent hover:border-yellow-500 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group"
          >
            <FaPhone className="text-5xl text-yellow-400 mb-4 group-hover:text-yellow-500 transition-colors duration-300" />
            <span className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">Call Me</span>
            <span className="text-sm text-gray-400 mt-1">+8801645743205</span>
            <FaArrowRight className="mt-4 text-yellow-400 group-hover:translate-x-2 transition-transform duration-300" />
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/8801645743205"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-[#1e293b] rounded-xl shadow-lg border border-transparent hover:border-green-500 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group"
          >
            <FaWhatsapp className="text-5xl text-green-400 mb-4 group-hover:text-green-500 transition-colors duration-300" />
            <span className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">WhatsApp</span>
            <span className="text-sm text-gray-400 mt-1">+8801645743205</span>
            <FaArrowRight className="mt-4 text-green-400 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;