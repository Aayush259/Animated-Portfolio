import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import usePageTransition from '../../custom_hooks/usePageTransition.js';

export default function IntroButtons() {

    // Link handler function from custom hook.
    const { handleLinkClick } = usePageTransition();

    // Intro button details.
    const introButtonDetails = [
        {
            name: `My Work`,
            icon: 'fa-cookie-bite',
            bgColor: 'green',
            link: '/projects',
        },
        {
            name: `Let's Connect`,
            icon: 'fa-paper-plane',
            bgColor: 'sky',
            link: '/connect',
        },
    ];

    return (
        <div
            className="text-sm font-semibold flex flex-row flex-wrap gap-3 md:gap-5 md:text-xl md:mt-14"
        >

            {
                introButtonDetails.map(detail => (
                    <motion.button
                        whileHover={{ scale: 1.1, color: 'white', backgroundColor: 'black' }}
                        whileTap={{ scale: 0.8 }}
                        transition={{
                            duration: 0.2,
                            ease: 'easeInOut'
                        }}
                        key={detail['name']}
                        className={`bg-${detail['bgColor']}-400 py-2 px-4 rounded-xl border-2 border-${detail['bgColor']}-500 flex flex-row items-center gap-3`}
                        onClick={handleLinkClick(detail['link'])}
                    >
                        {detail['name']}
                        <FontAwesomeIcon className="h-6" icon={detail['icon']} />
                    </motion.button>
                ))
            }

        </div>
    );
};
