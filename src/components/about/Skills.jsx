import React from 'react';
import reactLogo from '../../images/React-logo.png';
import jsLogo from '../../images/javascript-logo.png';
import tailwindLogo from '../../images/Tailwind-CSS.svg';
import htmlLogo from '../../images/html5-logo.png';
import cssLogo from '../../images/css-logo.png';
import SkillCard from './SkillCard.jsx';

export default function Skills() {

    // This function create a skill object which has skill name and its logo.
    const getSkillObject = (name, logo) => ({
        name, logo
    });

    // Array of all skills.
    const mySkills = [
        getSkillObject('React JS', reactLogo),
        getSkillObject('JavaScript', jsLogo),
        getSkillObject('Tailwind CSS', tailwindLogo),
        getSkillObject('HTML', htmlLogo),
        getSkillObject('CSS', cssLogo),
    ];

    return (
        <div
            className="my-5 select-none"
        >

            <h2
                className="text-2xl md:text-4xl font-bold"
            >
                Skills
            </h2>

            <div
                className="flex flex-row flex-wrap gap-5 mt-4"
            >

                {
                    mySkills.map(skill => (
                        <SkillCard key={skill['name']} skillDetail={skill} />
                    ))
                }

            </div>

        </div>
    );
};
