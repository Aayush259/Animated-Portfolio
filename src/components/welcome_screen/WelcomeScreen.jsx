import React from 'react';
import { motion } from 'framer-motion';

export default function WelcomeScreen() {

    return (
        <div
            className="fixed z-50 top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white md:text-3xl text-lg text-center"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{
                    duration: 2,
                    ease: 'easeInOut'
                }}
                className="inset-0 overflow-hidden w-full text-nowrap"
            >
                Hii
            </motion.div>

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                    delay: 2,
                    duration: 2,
                    ease: 'easeInOut'
                }}
                className="absolute top-1/2 overflow-hidden mx-auto text-nowrap"
            >
                Welcome to my portfolio...
            </motion.div>
        </div>
    );
};
