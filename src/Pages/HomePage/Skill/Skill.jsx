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
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#030712] text-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#1e293b] rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-red-400">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 text-gray-200 hover:text-red-400 transition"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-base">{skill.name}</span>
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
