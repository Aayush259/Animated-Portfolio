import React from 'react';

export default function Headline() {

    // My headlines
    const myHeadlines = [
        {
            id: 1,
            line: 'am a Frontend Developer 🖥️'
        },
        {
            id: 2,
            line: 'am a Tech enthusiast 🚀'
        },
        {
            id: 3,
            line: 'take exciting challenges 🎯'
        },
        {
            id: 4,
            line: 'like lots of sweets 🍰'
        },
        {
            id: 5,
            line: 'am shy but improving 😊'
        },
    ];

    return (
        <span
            className="font-bold bg-opacity-55 text-purple-800 bg-violet-300 relative text-sm flex-grow max-w-[450px] pl-1 rounded-xl md:text-2xl md:rounded-2xl md:pl-3"
        >

            {
                myHeadlines.map(headline => (
                    <span
                        key={headline['id']}
                        className={`absolute opacity-0 animate-txt-slide-${headline['id']}`}
                    >
                        {headline['line']}
                    </span>
                ))
            }

        </span>
    );
};
