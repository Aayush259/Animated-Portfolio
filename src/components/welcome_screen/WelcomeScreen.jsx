import React from 'react';

export default function WelcomeScreen() {

    return (
        <div
            className="fixed z-50 top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white md:text-3xl text-lg text-center"
        >
            <div
                className="overflow-hidden w-0 animate-intro-animation-1 text-nowrap"
            >
                Hii
            </div>

            <div
                className="overflow-hidden w-0 animate-intro-animation-2 text-nowrap"
            >
                Welcome to my portfolio...
            </div>
        </div>
    );
};
