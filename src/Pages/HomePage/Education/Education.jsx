import React from 'react';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';

const educationData = [
  {
    degree: "Bachelor of Science (BSc) in Computer Science & Engineering",
    institution: "Daffodil International University",
    year: "2022 – Present",
    details: "Studying core subjects like Data Structures, Algorithms, Artificial Intelligence, Machine Learning, and Web Development. Actively participating in coding contests and tech workshops.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Dohar Nawabganj College",
    year: "2019 – 2021",
    details: "Achieved a commendable GPA of 4.17 out of 5.0 under Dhaka Board. Focused on a strong foundation in Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Nawabganj Pilot High School",
    year: "2017 – 2019",
    details: "Successfully completed the science-based curriculum, achieving a GPA of 4.17 out of 5.0 under Dhaka Board. Developed foundational analytical skills.",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-[#0f172a] text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title - Prominent and Visually Engaging */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-center  mb-16 relative overflow-hidden">
          <span className="relative block animate-fade-in-down-title">My Academic Journey</span>
        </h2>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-xl p-8 shadow-xl border border-transparent hover:border-teal-400 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] relative group overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }} // Staggered entry
            >
              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-bl-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

              <h3 className="text-2xl font-bold text-teal-400 mb-3 flex items-center gap-3">
                <FaGraduationCap className="text-3xl text-cyan-400" /> {edu.degree}
              </h3>
              <p className="text-lg text-gray-200 mb-2 flex items-center gap-2">
                <FaUniversity className="text-gray-400" /> {edu.institution}
              </p>
              <p className="text-sm text-gray-400 italic mb-4 flex items-center gap-2">
                <FaCalendarAlt className="text-gray-500" /> {edu.year}
              </p>
              <p className="text-gray-300 leading-relaxed flex items-start gap-2">
                <FaBookOpen className="text-gray-500 mt-1" /> {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;