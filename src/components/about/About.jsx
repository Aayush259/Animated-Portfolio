import React from 'react';
import Skills from './Skills.jsx';

export default function About() {

    return (
        <div
            className="bg-purple-800 p-4 bg-opacity-80 border-4 border-purple-800 rounded-xl text-white bg-home-bg m-4 z-10 border-home-bg w-[850px] max-w-[90vw] lg:left-28 md:m-5 duration-300 tracking-wider md:text-2xl md:px-6"
        >
            <p>
                Hii! I'm <span className="bg-purple-950 px-2 rounded-xl font-semibold">Aayush Kumar Kumawat</span>, a tech enthusiast 🚀 and a passionate coder dedicated for developing innovative and user-friendly applications.
            </p>

            <Skills />

            <p>
                My journey in the tech world 🖥️ revloves around creating responsive, functional, and aesthetically pleasing web applications. I have a knack for creating dynamic and responsive web applications that provide excellent user experiences.
            </p>

            <p
                className="my-4"
            >
                Despite being naturally shy🫠, I find a great joy in expressing myself through code and contributing to tech community.
            </p>

        </div>
    );
};
