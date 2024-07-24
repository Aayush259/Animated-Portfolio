import React from 'react';

export default function TechnologiesUsed({ technologiesUsedInProject, bgColor }) {

    return (
        <div className="flex flex-row items-center justify-start gap-x-5 gap-y-2 flex-wrap my-2">

            {
                technologiesUsedInProject.map(technology => (
                    <span
                        key={technology}
                        className={`${bgColor} text-white text-sm px-3 py-1 rounded-2xl`}
                    >
                        {technology}
                    </span>
                ))
            }
        </div>
    );
};
