import React from 'react';
import emoji from '../../images/emoji.gif';

export default function WelcomeScreen() {

    return (
        <div
            className="fixed z-50 top-0 left-0 w-full h-full bg-black flex items-center justify-center"
        >
            <img src={emoji} alt="Welcome dear" />
        </div>
    );
};
