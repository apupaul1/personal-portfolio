import Hero from '../HeroSection/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Skill from '../Skill/Skill';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import ProjectSection from '../ProjectSection/ProjectSection';
import CurtainParallax from '../../../components/ui/CurtainParallax';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <AboutMe />
            <Skill />
            <CurtainParallax />
            <ProjectSection />
            <Education />
            <Contact />
        </div>
    );
};

export default HomePage;
