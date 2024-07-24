import { useMemo } from "react";

export default function useRandom(array) {

    // Shuffling array according to Fisher-Yates Shuffle Algorithm.
    const shuffledArray = useMemo(() => {
        const newArray = [...array];

        for (let i = (newArray.length - 1); i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        };

        return newArray;
    }, [array]);

    return shuffledArray;
};
