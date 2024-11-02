"use client";

import { useEffect } from 'react';
import useMotionAnimations from '@/stores/useMotionAnimations';

const AnimateMotionButton = () => {

    const { wantAnimations, setWantAnimations } = useMotionAnimations();

    useEffect(() => {
        useMotionAnimations.persist.rehydrate();
    }, []);

    const handleClick = () => {
        setWantAnimations(!wantAnimations);
        window.location.reload(); // refresh the current page
    }
    return (
        <button 
            onClick={handleClick}
            className={`mx-auto mt-[2rem] py-2 px-3 | 
                text-2xl text-rose-600 bg-rose-300 hover:bg-rose-400 | grid | rounded-md`}
        >
            Toggle Value
        </button>
    )

}

export default AnimateMotionButton