import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IntroButtons() {

    // Intro button details.
    const introButtonDetails = [
        {
            name: `My Work`,
            icon: 'fa-cookie-bite',
            bgColor: 'green',
        },
        {
            name: `Let's Connect`,
            icon: 'fa-paper-plane',
            bgColor: 'sky',
        },
    ];

    return (
        <div
            className="text-sm font-semibold flex flex-row flex-wrap gap-3 md:gap-5 md:text-xl md:mt-14"
        >

            {
                introButtonDetails.map(detail => (
                    <button
                        key={detail['name']}
                        className={`bg-${detail['bgColor']}-400 py-2 px-4 rounded-xl border-2 border-${detail['bgColor']}-500 hover:scale-110 hover:bg-black hover:text-white duration-300 flex flex-row items-center gap-3`}
                    >
                        {detail['name']}
                        <FontAwesomeIcon className="h-6" icon={detail['icon']} />
                    </button>
                ))
            }

        </div>
    );
};
