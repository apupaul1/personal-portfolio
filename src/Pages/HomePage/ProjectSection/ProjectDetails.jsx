import React from 'react';
import { useParams } from 'react-router';
// Importing icons for better visual appeal
import { FaGlobe, FaGithub, FaTools, FaInfoCircle, FaExclamationTriangle, FaLightbulb } from 'react-icons/fa';

const projectDetails = {
  hobbyhub: {
    name: "HobbySync",
    stack: ["React", "Firebase Auth", "MongoDB", "Express", "Tailwind"],
    description:
      "A full-stack hobby group management platform with authentication, light/dark mode, private routes, and responsive UI.",
    live: "https://hobby-sync-app.web.app/",
    github: "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-apupaul1",
    challenges: "Managing dynamic routes and syncing UI with backend data was tricky.",
    future: "Add in-app notifications and real-time chat between users.",
  },
  bookshelf: {
    name: "BookNest",
    stack: ["React", "Firebase Auth", "JSON", "Tailwind"],
    description:
      "BookNest is a web app for book lovers to catalog their reading journey, write reviews, upvote books, and track reading progress visually.",
    live: "https://book-nest-acf0b.web.app/",
    github: "https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-apupaul1",
    challenges: "Creating dynamic book listings and auth flow.",
    future: "Integrate advanced search and personalized recommendations.",
  },
  medical: {
    name: "Phudu",
    stack: ["React", "Tailwind", "React Router"],
    description:
      "Phudu is a personal portfolio to showcase skills, projects, and contact information in a responsive, clean layout.",
    live: "https://doctors-service-care.netlify.app",
    github: "https://github.com/programming-hero-web-course1/b11a8-router-booking-apupaul1",
    challenges: "Maintaining responsive layout and reusable components.",
    future: "Add animations, dark mode toggle, and blog section.",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project)
    return (
      <p className="text-center text-red-500 mt-20 text-xl font-semibold animate-pulse">
        Project not found. Please check the URL.
      </p>
    );

  // Helper component for detail sections
  const DetailSection = ({ icon, title, content, borderColor, textColor }) => (
    <div className={`border-l-4 ${borderColor} pl-6 group relative`}>
      <h2 className={`text-lg font-semibold ${textColor} mb-2 flex items-center gap-2`}>
        {icon} {title}
      </h2>
      <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {content}
      </p>
    </div>
  );

  return (
    <div className="bg-[#0f172a] text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto bg-[#1e293b] rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 transition-all duration-700 ease-in-out transform hover:scale-[1.01] hover:shadow-cyan-500/50 space-y-8">
        {/* Project Name - Enhanced with subtle animation */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-center pb-4 tracking-tight animate-fade-in-down">
          <span className="inline-block animate-bounce-once mr-2">✨</span> {project.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {/* Tech Stack */}
          <DetailSection
            icon={<FaTools />}
            title="Tech Stack"
            content={project.stack.join(", ")}
            borderColor="border-rose-500"
            textColor="text-rose-400"
          />

          {/* Description */}
          <DetailSection
            icon={<FaInfoCircle />}
            title="Description"
            content={project.description}
            borderColor="border-sky-500"
            textColor="text-sky-400"
          />

          {/* Challenges */}
          <DetailSection
            icon={<FaExclamationTriangle />}
            title="Challenges"
            content={project.challenges}
            borderColor="border-amber-500"
            textColor="text-amber-400"
          />

          {/* Future Improvements */}
          <DetailSection
            icon={<FaLightbulb />}
            title="Future Improvements"
            content={project.future}
            borderColor="border-green-500"
            textColor="text-green-400"
          />
        </div>

        {/* Buttons - More prominent and with icons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-emerald-400/50 transition-all duration-300 ease-in-out group"
          >
            <FaGlobe className="text-xl group-hover:rotate-6 transition-transform duration-300" />
            <span className="relative z-10">Live Site</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-gray-600/50 transition-all duration-300 ease-in-out group"
          >
            <FaGithub className="text-xl group-hover:scale-110 transition-transform duration-300" />
            <span className="relative z-10">GitHub Repo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;