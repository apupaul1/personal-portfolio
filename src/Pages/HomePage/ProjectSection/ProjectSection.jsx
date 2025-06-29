import React from 'react';
import { useNavigate } from 'react-router';

const projects = [
  {
    id: 'hobbyhub',
    name: 'HobbyHub',
    image: 'https://i.ibb.co/0sFkWJf/hobbyhub.png',
  },
  {
    id: 'jobtrack',
    name: 'JobTrack',
    image: 'https://i.ibb.co/sHjsYz4/jobtrack.png',
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    image: 'https://i.ibb.co/BGt9BbD/portfolio.png',
  },
];

const ProjectSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="bg-[#030712] text-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#1e293b] p-5 rounded-xl shadow-md hover:shadow-xl transition">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-red-400 mb-2">{project.name}</h3>
              <button
                onClick={() => navigate(`/project/${project.id}`)}
                className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
