import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectLinks({ repoLink, liveLink, bgColor }) {

    // Links with their icons.
    const links = [
        {
            linkIcon: 'fa-brands fa-github',
            link: repoLink,
        },
        {
            linkIcon: 'fa-solid fa-link',
            link: liveLink,
        },
    ];

    return (
        <div className="flex flex-row items-center justify-start mt-5 mb-3 gap-3 text-xl duration-300">

            {
                links.map(link => (
                    <a
                        key={link['linkIcon']}
                        href={link['link']}
                        className={`flex items-center justify-center duration-300 p-2 rounded-full ${bgColor} text-white hover:scale-125 hover:opacity-75`}
                    >
                        <FontAwesomeIcon icon={link['linkIcon']} />
                    </a>
                ))
            }

        </div>
    );
};
