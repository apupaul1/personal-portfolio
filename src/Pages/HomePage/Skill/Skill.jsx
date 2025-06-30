import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
  FaCode,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiJsonwebtokens,
} from 'react-icons/si';

const Skill = () => {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Crafting engaging user experiences.",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      ],
    },
    {
      title: "Backend",
      description: "Building robust server-side applications.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400" /> },
      ],
    },
    {
      title: "Tools & Others", // Renamed for broader appeal
      description: "Essential tools for development workflow.",
      skills: [
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
        // Add more tools if applicable, e.g., Netlify, Vercel, npm/yarn
        // { name: "Netlify", icon: <SiNetlify className="text-teal-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#030712] text-white py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center  mb-16">My Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-[#1e293b] rounded-2xl p-8 shadow-xl border border-transparent hover:border-blue-500 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] group"
              style={{ animationDelay: `${index * 0.15}s` }} // Staggered animation
            >
              <h3 className="text-2xl font-bold mb-3 text-red-400 flex items-center gap-3">
                {/* Dynamic icon based on category, or a default one */}
                {index === 0 && <FaReact className="text-blue-400" />}
                {index === 1 && <FaNodeJs className="text-green-500" />}
                {index === 2 && <FaCode className="text-yellow-300" />}
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{category.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 text-gray-300 hover:text-red-300 transition-all duration-300 p-2 rounded-lg hover:bg-gray-700/50 cursor-pointer group-hover:opacity-100 group-hover:scale-105"
                  >
                    <span className="text-3xl md:text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-xs sm:text-sm text-center font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;