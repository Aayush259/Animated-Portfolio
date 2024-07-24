import React from 'react';
import Headline from './Headline.jsx';
import IntroButtons from './IntroButtons.jsx';

export default function Home() {

    return (
        <div
            className="bg-home-bg border-4 p-5 m-4 z-10 border-home-bg rounded-3xl relative md:max-w-[750px] lg:left-20 md:m-5 duration-300"
        >

            <p
                className="font-semibold text-gray-600 text-lg md:text-3xl md:font-bold"
            >
                Hi! I'm
            </p>

            <p
                className="font-bold leading-[2.8rem] text-purple-900 text-4xl my-2 md:text-7xl md:leading-[5.4rem] md:text-purple-950 md:font-extrabold"
            >
                Aayush Kumar Kumawat
            </p>

            <p
                className="font-semibold my-6 text-sm text-gray-600 flex flex-row flex-wrap gap-1 md:gap-2 md:text-2xl md:my-8"
            >
                <span>and I</span>

                <Headline />
            </p>

            <IntroButtons />

        </div>
    );
};
