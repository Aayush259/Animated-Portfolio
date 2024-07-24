import React from 'react';

export default function LinkCard({ link }) {

    // Getting link details.
    const platformName = link['name'];
    const followText = link['followText'];
    const linkTo = link['linkTo'];
    const platformLogo = link['logo'];

    return (
        <a
            href={linkTo}
            target="_blank"
            className="flex flex-row items-center justify-start gap-2 my-4 p-3 rounded-xl overflow-hidden border border-green-200 text-lg md:text-xl font-semibold duration-300 relative before:block before:duration-300 before:absolute before:top-0 before:left-0 before:h-full before:w-0 hover:before:w-full before:bg-green-900 before:bg-opacity-75"
        >
            <img
                src={platformLogo}
                alt={platformName}
                className="w-12 z-10"
            />

            <span className="z-10">
                {followText}
            </span>
        </a>
    );
};
