import React from 'react';
import NavigationLink from './NavigationLink.jsx';

export default function Nav() {

    // This function returns an object consisting linkText and its icon.
    const getLinkContent = (linkToUrl, linkText, linkIcon) => ({
        linkToUrl,
        linkText,
        linkIcon,
    });

    // All links for navigation menu.
    const allLinks = [
        getLinkContent('/', 'Home', 'fa-solid fa-house'),
        getLinkContent('/projects', 'Projects', 'fa-solid fa-diagram-project'),
        getLinkContent('/about', 'About', 'fa-solid fa-circle-info'),
        getLinkContent('/connect', 'Connect', 'fa-solid fa-paper-plane')
    ];

    return (
        <nav className="fixed bottom-0 w-full py-6 px-1 overflow-x-auto flex flex-row items-center cs-nav-2:justify-center gap-16 bg-nav-bg lg:flex-col lg:top-0 lg:left-0 lg:w-fit lg:min-w-40 lg:h-fit lg:px-8 lg:items-start lg:mt-8 lg:bg-transparent z-20">

            {
                allLinks.map(link => (
                    <NavigationLink key={link['linkText']} linkDetails={link} />
                ))
            }

        </nav>
    );
};
