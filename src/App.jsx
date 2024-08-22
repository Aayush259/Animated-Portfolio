import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import myImage from './images/myImg.jpeg';
import BackgroundAnimation from './components/background/BackgroundAnimation.jsx';
import Nav from './components/nav/Nav.jsx';
import WelcomeScreen from './components/welcome_screen/WelcomeScreen.jsx';
import { BackgroundGradientAnimation } from './components/background/background-animation-gradient.jsx';

export default function App() {

  const [showIntro, setShowIntro] = useState(true);

  const location = useLocation();

  // Hide intro after 2 seconds.
  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 3900);

    // Cleanup the timer.
    return () => clearTimeout(introTimer);
  });

  return (
    <>
      <div className="fixed w-screen h-screen overflow-hidden">
        <BackgroundGradientAnimation />
      </div>
      {
        showIntro ? <WelcomeScreen /> : (

          <>
            <BackgroundAnimation />

            <div>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut'
                }}
                href="https://github.com/Aayush259"
                target="_blank"
                className="fixed z-20 right-4 top-4 block"
              >
                <img
                  src={myImage}
                  alt="Aayush"
                  className="rounded-full h-10 md:h-14"
                />
              </motion.a>

              <Nav />

              <motion.div
                initial={{ y: '48px', filter: 'blur(12px)' }}
                animate={{ y: 0, filter: 'blur(0)' }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}
                key={location.pathname}
                className="min-h-[100vh] py-4 pb-14 w-full flex justify-center items-center z-40"
                id="componentContainer"
              >
                <Outlet />
              </motion.div>
            </div>
          </>
        )
      }
    </>
  );
};
