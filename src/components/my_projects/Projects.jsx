import React from 'react';
import dictionaryProjectImage from '../../images/dictionary-project.jpg';
import soundSphereProjectImage from '../../images/sound-sphere-project.jpg';
import whereInTheWorldProjectImage from '../../images/where-in-the-world-project.jpg';
import ipAddressTrackerProjectImage from '../../images/ip-address-tracker-project.jpg';
import clockProjectImage from '../../images/clock-project.jpg';
import calculatorProjectImage from '../../images/calculator-project.jpg';
import ProjectCard from './ProjectCard.jsx';
import useRandom from '../../custom_hooks/useRandom.js';

export default function Projects() {

    // Function to get style object.
    const getStyleObject = (cardBg, cardBorderColor, headingColor, headingColorHover, technologiesBg, linkBg) => ({
        cardBg, cardBorderColor, headingColor, headingColorHover, technologiesBg, linkBg
    });

    // Color & background colors for project card.
    const styles = [
        getStyleObject('bg-purple-300', 'border-purple-300', 'text-purple-950', 'sm:group-hover:text-violet-100',  'bg-violet-950', 'bg-violet-900'),

        getStyleObject('bg-slate-300', 'border-slate-300', 'text-slate-950', 'sm:group-hover:text-slate-100', 'bg-slate-950', 'bg-slate-600'),

        getStyleObject('bg-red-300', 'border-red-300', 'text-red-950', 'sm:group-hover:text-red-100', 'bg-red-950', 'bg-red-600'),

        getStyleObject('bg-yellow-300', 'border-yellow-300', 'text-yellow-950', 'sm:group-hover:text-yellow-100', 'bg-yellow-950', 'bg-yellow-600'),

        getStyleObject('bg-green-300', 'border-green-300', 'text-green-950', 'sm:group-hover:text-green-100', 'bg-green-950', 'bg-green-600'),

        getStyleObject('bg-amber-300', 'border-amber-300', 'text-amber-950', 'sm:group-hover:text-amber-100', 'bg-amber-950', 'bg-amber-600'),

        getStyleObject('bg-indigo-300', 'border-indigo-300', 'text-indigo-950', 'sm:group-hover:text-indigo-100', 'bg-indigo-950', 'bg-indigo-600',),
    ];

    // Shuffled array for color & background colrs for project card.
    const ProjectCardStyles = useRandom([...styles]);

    // This function returns object which contains project details.
    const getProjectObject = (name, description, image, technologiesUsed, repoLink, liveLink, cardStyles) => ({
        name,
        description,
        image,
        technologiesUsed,
        repoLink,
        liveLink,
        cardStyles,
    });

    // Array of objects with project details.
    const projectsArray = [
        getProjectObject('📖 Dictionary', 'Help users look up words, view their definitions, phonetics, and example sentences with theme toggling and history tracking features.', dictionaryProjectImage, ['React', 'React Router DOM', 'Context API', 'Local Storage'], 'https://github.com/Aayush259/Dictionary', 'https://aayush259.github.io/Dictionary/', ProjectCardStyles[0]),

        getProjectObject('🎧 Sound Sphere', 'Provides a seamless and interactive user experience for browsing and purchasing products. Primarily focuses on product listing, cart management, and wishlist management.', soundSphereProjectImage, ['React', 'React Router DOM', 'React Lazy Loading', 'Context API', 'Tailwind CSS'], 'https://github.com/Aayush259/E-Commerce', 'https://aayush259.github.io/E-Commerce/', ProjectCardStyles[1]),

        getProjectObject('🌍 Tech Sphere', 'Provides a seamless and interactive user experience for browsing and purchasing products. It primarily focuses on product listing, cart management, and wishlist management efficiently using Redux Toolkit for robust state management.', 'https://raw.githubusercontent.com/Aayush259/Tech-Sphere/main/src/images/slider-3.jpg', ['React', 'React Router DOM', 'React Lazy Loading', 'Redux Toolkit', 'Tailwind CSS'], 'https://github.com/Aayush259/Tech-Sphere', 'https://aayush259.github.io/Tech-Sphere/', ProjectCardStyles[6]),

        // getProjectObject('🌍 Where in the World?', 'Allows users to explore information about countries around the world and features dynamic theming, infinite scrolling, and advanced filtering capabilities.', whereInTheWorldProjectImage, ['React', 'React Router DOM', 'React Lazy Loading', 'Context API', 'Rest Countries API'], 'https://github.com/Aayush259/Where-in-the-world', 'https://aayush259.github.io/Where-in-the-world/', ProjectCardStyles[2]),

        getProjectObject('🗺️ IP Address Tracker', 'Allows users to search for any IP address or domain and displays information such as the IP address, location, timezome, and ISP. The application also displays location on map.', ipAddressTrackerProjectImage, ['React', 'React Router DOM', 'Context API', 'Leaflet JS Map'], 'https://github.com/Aayush259/IP-Address-Tracker', 'https://aayush259.github.io/IP-Address-Tracker/', ProjectCardStyles[3]),

        getProjectObject('⏰ Clock', 'Displays current time, provides a stopwatch feature, and allows users to set countdown timers.', clockProjectImage, ['Vanilla JS', 'JS Date Object', 'HTML5', 'CSS3'], 'https://github.com/Aayush259/Clock', 'https://aayush259.github.io/Clock/', ProjectCardStyles[4]),

        getProjectObject('🧮 Calculator', 'Perform basic arithmetic operations - Addition, Subtraction, Multiplication, and Division, and also provides three different themes.', calculatorProjectImage, ['Vanilla JS', 'JS Math Object', 'HTML5', 'CSS3'], 'https://github.com/Aayush259/Calculator-Challenge', 'https://aayush259.github.io/Calculator-Challenge/', ProjectCardStyles[5]),
    ];

    return (
        <div className="h-full w-full overflow-y-auto py-14 sm:pr-28 sm:flex sm:flex-row sm:flex-wrap sm:items-start gap-3 md:w-[85vw] md:ml-auto">
            {
                projectsArray.map(project => (
                    <ProjectCard key={project['name']} projectDetails={project} />
                ))
            }
        </div>
    );
};
