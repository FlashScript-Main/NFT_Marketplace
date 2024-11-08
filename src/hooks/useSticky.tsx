import { useEffect, useRef, useState } from "react";

const useSticky = () => {

    const [isSticky, setIsSticky] = useState(false);

    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (divRef.current) {
                const { top } = divRef.current.getBoundingClientRect();
                setIsSticky(top <= 20); 
            }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return {
        isSticky,
        divRef
    }

}

export default useSticky