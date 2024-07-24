import React from 'react';

export default function SkillCard({ skillDetail }) {

    // Getting skill name and logo.
    const skillName = skillDetail['name'];
    const skillLogo = skillDetail['logo'];

    return (
        <div
            className="flex flex-row flex-wrap items-center justify-center w-fit gap-3 text-lg font-semibold bg-purple-950 p-2 rounded-xl md:text-2xl border border-purple-400"
        >
            <img
                src={skillLogo}
                alt={skillName}
                className="w-7"
            />

            <p>
                {skillName}
            </p>
        </div>
    );
};
