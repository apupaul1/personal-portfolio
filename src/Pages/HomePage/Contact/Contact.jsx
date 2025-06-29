import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0f172a] text-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-red-500">Contact Information</h2>
        <p className="text-gray-300 text-lg">
          Feel free to reach out to me via email, phone, or WhatsApp. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="space-y-6 mt-8 text-left md:text-center">
          <div className="flex items-center justify-center gap-4 text-gray-200 hover:text-red-400 transition">
            <FaEnvelope className="text-xl" />
            <span className="text-lg">apupaul988@gmail.com</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-gray-200 hover:text-red-400 transition">
            <FaPhone className="text-xl" />
            <span className="text-lg">+8801645743205</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-gray-200 hover:text-green-400 transition">
            <a
              href="https://wa.me/8801645743205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <FaWhatsapp className="text-xl" />
              <span className="text-lg">+8801645743205</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
