import React from 'react';
import SocialLinks from './SocialLinks.jsx';

export default function ConnectWithMe() {

    return (
        <div
            className="bg-sky-400 p-4 bg-opacity-45 border-4 border-sky-400 rounded-xl text-white bg-home-bg m-4 z-10 border-home-bg w-[850px] max-w-[90vw] lg:left-28 md:m-5 duration-300 tracking-wider md:text-2xl md:px-6"
        >

            <h2
                className="text-2xl md:text-4xl font-bold"
            >
                Let's Connect
            </h2>

            <SocialLinks />

            <p>
                Let's engage, share ideas, and build a vibrant tech community together! Feel free to reach out to me through any of these platforms.
            </p>

        </div>
    );
};
