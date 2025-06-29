import React from 'react';
import { useParams } from 'react-router';

const projectDetails = {
  hobbyhub: {
    name: "HobbyHub",
    stack: ["React", "Firebase Auth", "MongoDB", "Express", "Tailwind"],
    description:
      "A full-stack hobby group management platform with authentication, light/dark mode, private routes, and responsive UI.",
    live: "https://hobbyhub.example.com",
    github: "https://github.com/apupaul1/hobbyhub-client",
    challenges: "Managing dynamic routes and syncing UI with backend data was tricky.",
    future: "Add in-app notifications and real-time chat between users.",
  },
  jobtrack: {
    name: "JobTrack",
    stack: ["React", "Firebase Auth", "JSON", "Tailwind"],
    description:
      "A job-tracking platform with login, registration, and secure routes using Firebase authentication.",
    live: "https://jobtrack.example.com",
    github: "https://github.com/apupaul1/jobtrack-client",
    challenges: "Creating dynamic job listings and authentication flow.",
    future: "Integrate job filtering and analytics.",
  },
  portfolio: {
    name: "Portfolio Website",
    stack: ["React", "Tailwind", "React Router"],
    description:
      "This portfolio showcases my skills, projects, and contact information in a clean and responsive format.",
    live: "https://apuportfolio.example.com",
    github: "https://github.com/apupaul1/portfolio",
    challenges: "Responsive layout and component organization.",
    future: "Add animations, dark mode toggle, and blog section.",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project)
    return (
      <p className="text-center text-red-500 mt-20 text-xl font-semibold">
        Project not found
      </p>
    );

  return (
    <div className="bg-[#0f172a] text-white min-h-screen py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-[#1e293b] rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-red-500 mb-8">{project.name}</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-400 mb-2">Tech Stack</h2>
          <p className="text-gray-300 text-lg">{project.stack.join(", ")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-400 mb-2">Description</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-400 mb-2">Challenges Faced</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.challenges}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-red-400 mb-2">Future Improvements</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.future}</p>
        </section>

        <div className="flex flex-wrap gap-6">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg font-semibold transition"
          >
            GitHub Client Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
