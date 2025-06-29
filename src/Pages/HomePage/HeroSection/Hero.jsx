import React from 'react';
import { motion } from 'framer-motion';
import { ImLocation2 } from "react-icons/im";
import { FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
    const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className='bg-[#030712] text-white py-12 px-4 md:px-8 lg:px-25'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>

                {/* Text Section */}
                <motion.div
                    className='flex-1 space-y-5 text-center lg:text-left'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className='text-3xl md:text-4xl font-bold'>Hi, I'm Apu Paul</h1>
                    <p className='text-gray-300'>
                        A passionate Full Stack developer with skills in building scalable, user-centric web applications. I specialize in ReactJS, JavaScript, Node.js, Express.js, Firebase, JWT, GitHub, HTML, CSS, and thrive in turning complex problems into clean, efficient solutions. Let’s create something amazing together!
                    </p>
                    <p className='flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400 mt-6'>
                        <ImLocation2 className='text-red-500' />
                        Dhaka, Bangladesh
                    </p>

                    {/* Social Links */}
                    <div className='flex justify-center lg:justify-start gap-5 mt-4'>
                        <button onClick={() => openLink('https://github.com/apupaul1')} aria-label="GitHub" className="hover:text-red-500 transition">
                            <FaGithub size={25} />
                        </button>
                        <button onClick={() => openLink('https://facebook.com')} aria-label="Facebook" className="hover:text-red-500 transition">
                            <FaFacebook size={25} />
                        </button>
                        <button onClick={() => openLink('https://wa.me/8801XXXXXXXXX')} aria-label="WhatsApp" className="hover:text-red-500 transition">
                            <FaWhatsapp size={25} />
                        </button>
                    </div>

                    {/* Resume Buttons */}
                    <div className='flex justify-center lg:justify-start gap-4 mt-8 flex-wrap'>
                        <button className='btn btn-error rounded-xl font-bold'>
                            View Resume
                        </button>
                        <button className='btn btn-error btn-outline rounded-xl font-bold text-white'>
                            Download Resume
                        </button>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className='flex-1 w-full  md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-[400px]'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        className='rounded-2xl w-full h-auto max-h-[500px] object-cover shadow-lg'
                        src='https://i.ibb.co/zT1jqg3q/personal.jpg'
                        alt="Apu Paul"
                    />
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
