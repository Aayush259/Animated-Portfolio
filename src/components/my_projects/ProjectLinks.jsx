import React from 'react';
import { motion } from 'framer-motion';
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
                    <motion.a
                    whileHover={{ scale: 1.25, opacity: 0.75 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      duration: 0.2,
                      ease: 'easeInOut'
                    }}
                        key={link['linkIcon']}
                        href={link['link']}
                        className={`flex items-center justify-center p-2 rounded-full ${bgColor} text-white`}
                    >
                        <FontAwesomeIcon icon={link['linkIcon']} />
                    </motion.a>
                ))
            }

        </div>
    );
};
