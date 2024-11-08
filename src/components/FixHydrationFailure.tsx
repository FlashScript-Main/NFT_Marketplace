"use client";

import { useEffect, useState } from 'react';

const FixHydrationFailure = ({ children }: { children: React.ReactNode }) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Prevent rendering on the server
    }

    return (
        <div>{children}</div>
    );

}

export default FixHydrationFailure