import React from 'react';
import Headline from './Headline.jsx';
import IntroButtons from './IntroButtons.jsx';

export default function Home() {

    return (
        <div
            className="bg-home-bg border-4 p-5 m-4 z-40 border-home-bg rounded-3xl relative md:max-w-[750px] lg:left-20 md:m-5 duration-300"
        >

            <p
                className="font-semibold text-white text-lg md:text-3xl md:font-bold"
            >
                Hi! I'm
            </p>

            <p
                className="font-bold leading-[2.8rem] bg-gradient-to-r from-[rgb(0,17,82)] to-[rgb(108,0,162)] bg-clip-text text-transparent text-4xl my-2 md:text-7xl md:leading-[5.4rem] md:font-extrabold"
            >
                Aayush Kumar Kumawat
            </p>

            <p
                className="font-semibold my-6 text-sm text-white flex flex-row flex-wrap gap-1 md:gap-2 md:text-2xl md:my-8"
            >
                <span>and I</span>

                <Headline />
            </p>

            <IntroButtons />

        </div>
    );
};
