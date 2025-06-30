import React from 'react';
import { FaUserGraduate, FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa'; 
import { MdOutlineComputer } from 'react-icons/md';

const AboutMe = () => {
    // Data for feature cards to keep content organized
    const featureHighlights = [
        {
            icon: <MdOutlineComputer className="text-4xl text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />,
            title: "Full Stack Expertise",
            description: "Proficient in React.js for engaging UIs and Node.js/Express.js for robust backend solutions.",
        },
        {
            icon: <FaLightbulb className="text-4xl text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />,
            title: "Problem Solver",
            description: "Driven by a passion for solving real-world challenges with clean, efficient, and optimized code.",
        },
        {
            icon: <FaUserGraduate className="text-4xl text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />,
            title: "Continuous Learner",
            description: "Committed to exploring new technologies, including Machine Learning, and self-development.",
        },
        {
            icon: <FaHandshake className="text-4xl text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />,
            title: "Collaborative Spirit",
            description: "Thrives in innovative environments, eager to work with inspiring people and contribute to impactful projects.",
        },
    ];

    return (
        <section id="about" className="bg-[#0f172a] text-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
            {/* Subtle background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b]/50 to-[#0f172a]/50 pointer-events-none z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Title with a new gradient & playful background text */}
                <h2 className="text-2xl md:text-4xl font-extrabold text-center bg-clip-text  mb-16 relative">
                    <span className="relative block animate-fade-in-down">About Me</span>
                </h2>

                {/* Main Narrative Block */}
                <div className="bg-[#1e293b] rounded-3xl p-8 md:p-10 shadow-2xl border border-blue-600/20 mb-12 animate-fade-in-up-delay">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-4">
                        Hello! I'm <span className="font-bold text-white">Apu Paul</span>, a dedicated Full Stack Developer with a profound passion for crafting dynamic, user-centric web applications. My coding journey commenced with a spark of curiosity in my early academic years, initially dabbling in C and Python, before wholeheartedly diving into the expansive world of JavaScript and comprehensive full-stack development.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                        I am adept at building captivating frontends using <span className="text-purple-300 font-semibold">React.js</span> and architecting scalable backends with <span className="text-pink-300 font-semibold">Node.js</span> and <span className="text-pink-300 font-semibold">Express.js</span>. My philosophy revolves around solving real-world problems through meticulously clean code, optimized performance, and an unwavering commitment to delivering an exceptional user experience.
                    </p>
                </div>

                {/* Feature Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featureHighlights.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#2a3b50] rounded-xl p-6 text-center shadow-lg border border-transparent hover:border-indigo-500 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl group"
                            style={{ animationDelay: `${index * 0.15}s` }} 
                        >
                            <div className="mb-4 flex justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">{feature.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action at the bottom */}
                <div className="mt-16 text-center animate-fade-in-up-delay-2">
                    <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-6">
                        Ready to collaborate on your next big idea?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300 ease-in-out group"
                    >
                        Let's Connect <FaRocket className="group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;