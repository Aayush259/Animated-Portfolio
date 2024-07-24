import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import myImage from './images/myImg.jpeg';
import BackgroundAnimation from './components/background/BackgroundAnimation.jsx';
import Nav from './components/nav/Nav.jsx';

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

      <Nav />

      <div
        className="min-h-[100vh] py-4 pb-14 w-full flex justify-center items-center duration-300"
        id="componentContainer"
      >
        <Outlet />
      </div>
    </>
  );
};
