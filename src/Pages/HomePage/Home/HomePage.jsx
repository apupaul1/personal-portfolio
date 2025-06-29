import React from 'react';
import Hero from '../HeroSection/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Skill from '../Skill/Skill';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import ProjectSection from '../ProjectSection/ProjectSection';

const HomePage = () => {
    return (
        <div className='min-h-screen'>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Education></Education>
            <ProjectSection></ProjectSection>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;