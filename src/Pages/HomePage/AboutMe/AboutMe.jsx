import React from 'react';

const AboutMe = () => {
    return (
        <section id="about" className="bg-[#111827] text-white py-16 px-6 md:px-16 lg:px-24">
            <div className="max-w-5xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-6">
                    About Me
                </h2>

                <p className="text-lg leading-relaxed text-gray-300">
                    Hello! I'm <span className="font-semibold text-white">Apu Paul</span>, a dedicated Full Stack Developer with a strong passion for building dynamic, user-focused web applications. My programming journey began out of curiosity during my early academic years, where I started with C and Python and gradually embraced the world of JavaScript and full stack web development.
                </p>

                <p className="text-lg leading-relaxed text-gray-300">
                    I enjoy crafting interactive frontends using <span className="text-red-400">ReactJS</span> and building scalable backends with <span className="text-red-400">Node.js</span> and <span className="text-red-400">Express.js</span>. I’m particularly drawn to solving real-world problems through clean code, optimized performance, and a strong focus on user experience.
                </p>

                <p className="text-lg leading-relaxed text-gray-300">
                    Beyond programming, I’m passionate about <span className="text-red-400">graphic design</span>, which helps me bring creativity into my web projects. In my free time, I enjoy playing cricket, exploring new technologies, and engaging in self-development activities. I believe in continuous learning and thrive in collaborative, innovative environments.
                </p>

                <p className="text-lg leading-relaxed text-gray-300">
                    I’m always eager to take on new challenges, work with inspiring people, and build impactful software. Let’s connect and create something remarkable together!
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
