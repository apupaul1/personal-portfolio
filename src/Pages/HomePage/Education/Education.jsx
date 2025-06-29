import React from 'react';

const educationData = [
  {
    degree: "Bachelor of Science (BSc) in Computer Science & Engineering",
    institution: "Daffodil International University",
    year: "2022 – Present",
    details: "Studying core subjects like Data Structures, Algorithms, Artificial Intelligence, Machine Learning, and Web Development.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Dohar Nawabganj College",
    year: "2019 – 2021",
    details: "Achieved GPA of 4.17 out of 5.0 under Dhaka Board. Major subjects included Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Nawabganj Pilot High School",
    year: "2017 – 2019",
    details: "Achieved GPA of 4.17 out of 5.0 under Dhaka Board. Focused on science-based curriculum.",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-[#0f172a] text-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-12">
          Educational Qualification
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-red-400">{edu.degree}</h3>
              <p className="text-lg text-gray-200 mt-1">{edu.institution}</p>
              <p className="text-sm text-gray-400 mt-1 italic">{edu.year}</p>
              <p className="text-gray-300 mt-3">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
