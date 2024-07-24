import React from 'react';
import myImage from './images/myImg.jpeg';
import BackgroundAnimation from './components/background/BackgroundAnimation.jsx';

export default function App() {

  return (
    <>
      <BackgroundAnimation />

      <a
        href="https://github.com/Aayush259"
        target="_blank"
        className="fixed z-20 right-4 top-4 block duration-300 hover:scale-110"
      >
        <img
          src={myImage}
          alt="Aayush"
          className="rounded-full h-10 md:h-14"
        />
      </a>
    </>
  );
};
