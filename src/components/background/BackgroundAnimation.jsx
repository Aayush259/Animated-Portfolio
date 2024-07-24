import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import useRandom from '../../custom_hooks/useRandom.js';

library.add(fas, fab);

export default function BackgroundAnimation() {

    // Update classes for background animation.
    useEffect(() => {

        const firstDivInRow = document.querySelectorAll('.row div:nth-child(1)');
        const secondDivInRow = document.querySelectorAll('.row div:nth-child(2)');
        const allIcons = document.querySelectorAll('.row div>*');

        allIcons.forEach(icon => {
            icon.classList.add('p-24');
            icon.classList.add('sm:p-36');
            icon.classList.add('rotate-[30deg]');
        });

        setTimeout(() => {
            firstDivInRow.forEach(div => {
                div.classList.add('animate-bg-slide-1');
            });
    
            secondDivInRow.forEach(div => {
                div.classList.add('animate-bg-slide-2');
            });
        }, 500);

    }, []);

    // This function returns an array of random icons for different rows.
    const returnRandomIcons = () => {
        const icons = [
            'fa-solid fa-magnifying-glass',
            'fa-solid fa-check',
            'fa-brands fa-github',
            'fa-brands fa-linkedin',
            'fa-solid fa-arrow-right',
            'fa-solid fa-pen',
            'fa-solid fa-folder',
            'fa-solid fa-paper-plane',
            'fa-solid fa-user',
            'fa-brands fa-js',
            'fa-brands fa-react',
            'fa-brands fa-html5',
            'fa-brands fa-css3-alt',
            'fa-solid fa-code',
            'fa-brands fa-x-twitter'
        ];

        // Getting random icons from useRandom custom hook.
        const randomIcons = useRandom([...icons]);

        return randomIcons;
    };
    
    return (
        <div className="w-full h-[100vh] fixed top-0 left-0 overflow-hidden bg-blend-overlay filter blur-[0.5px] bg-custom-bagkground -z-10">
            {
                Array(18).fill().map((_, i) => (
                    <div key={i} className="flex row flex-row flex-nowrap text-nowrap whitespace-nowrap rotate-[-30deg] relative -top-1/2 -left-12">
                        {
                            Array(2).fill().map((_, j) => (
                                <div key={j} className="text-2xl flex whitespace-nowrap text-nowrap flex-nowrap opacity-0">
                                    {
                                        returnRandomIcons().map(randomIcon => <FontAwesomeIcon key={randomIcon} icon={randomIcon} style={{color: "#EEE8AA"}} />)
                                    }
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};
