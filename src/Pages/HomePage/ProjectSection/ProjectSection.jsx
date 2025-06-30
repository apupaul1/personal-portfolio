import React from 'react';
import { useNavigate } from 'react-router';

const projects = [
  {
    id: 'hobbyhub',
    name: 'HobbySync',
    image: 'https://i.ibb.co/0yk18sJy/Hobby-Sync.png',
  },
  {
    id: 'bookshelf',
    name: 'BookNest',
    image: 'https://i.ibb.co/d41Ywsrh/BookNest.png',
  },
  {
    id: 'medical',
    name: 'Phudu',
    image: 'https://i.ibb.co/v6YhvbSr/Phudu.png',
  },
];

const ProjectSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="bg-[#030712] text-white py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center  mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1e293b] p-3 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.03] transition duration-300 ease-in-out"
            >
              {/* Image container with proper scaling */}
              <div className="w-full h-60 bg-white flex items-center justify-center rounded-t-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Text and button */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 tracking-wide">{project.name}</h3>
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="mt-4 px-5 py-2 btn btn-neutral text-white font-semibold rounded-xl shadow hover:opacity-90 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
