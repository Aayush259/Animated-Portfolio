import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavigationLink({ linkDetails, index }) {

    // Getting details from linkDetails prop.
    const linkToUrl = linkDetails['linkToUrl'];
    const linkText = linkDetails['linkText'];
    const linkIcon = linkDetails['linkIcon'];

    // State for whether to display navigation link text or not.
    const [linkContentText, setLinkContentText] = useState(true);

    useEffect(() => {

        // This function hides the text of navigation links if window width is less than or equal to 1280px, otherwise it will display text of navigation links.
        const handleResize = () => {
            const windowWidth = window.innerWidth;

            if (windowWidth <= 1280) {
                setLinkContentText(false);
            } else {
                setLinkContentText(true);
            }
        };

        // Call handleResize function once when component mounts.
        handleResize();

        // Adding event listener to window to handle navigation link text when the window is resized.
        window.addEventListener('resize', handleResize);

        // Cleanup function when component unmounts.
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <motion.div
            initial={{ x: `${-90 + (index * 30)}%` }}
            animate={{ x: 0 }}
            transition={{
                duration: 0.3,
                ease: 'easeInOut'
            }}
            className="overflow-hidden"
        >
            <NavLink
                to={linkToUrl}
                className={({ isActive }) => `${isActive ? "before:bg-slate-950 lg:before:bg-green-400 lg:before:top-0 before:left-0 lg:before:h-full before:w-full before:h-1 lg:hover:opacity-60 text-slate-950 lg:text-green-400" : "before:bg-white lg:before:top-1/2 lg:before:h-0 before:w-0 before:left-1/2 before:h-1 lg:hover:before:h-full lg:hover:before:top-0"} flex flex-row items-center justify-center gap-2 text-lg text-orange-100 font-semibold tracking-wider cursor-pointer select-none duration-300 relative lg:before:block before:-bottom-2 before:absolute lg:before:-left-3 lg:before:w-1 before:rounded-full lg:before:opacity-100 before:duration-300`}
            >
                <FontAwesomeIcon icon={linkIcon} />
                {
                    linkContentText ? linkText : null
                }
            </NavLink>
        </motion.div>
    );
};
