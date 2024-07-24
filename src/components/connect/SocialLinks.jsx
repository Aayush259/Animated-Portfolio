import React from 'react';
import linkedInLogo from '../../images/linkedin-logo.png';
import githubLogo from '../../images/GitHub-logo.png';
import xLogo from '../../images/X-logo.png';
import LinkCard from './LinkCard.jsx';

export default function SocialLinks() {

    const getLinkObject = (name, linkTo, logo, followText) => ({
        name, linkTo, logo, followText
    });

    const mySocialLinks = [
        getLinkObject('LinkedIn', 'https://www.linkedin.com/in/aayush-kumar-kumawat/', linkedInLogo, 'Connect with me'),
        getLinkObject('GitHub', 'https://github.com/Aayush259', githubLogo, 'Follow me'),
        getLinkObject('X', 'https://x.com/Aayush259_', xLogo, 'Follow me'),
    ];

    return (
        <div
            className="my-6 w-fit mx-auto"
        >
            
            {
                mySocialLinks.map(link => (
                    <LinkCard key={link['name']} link={link} />
                ))
            }
            
        </div>
    );
};
