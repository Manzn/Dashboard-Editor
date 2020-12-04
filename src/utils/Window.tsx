import { useState, useEffect } from 'react';

// custom window size hook
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
  
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        
        window.addEventListener("resize", handleResize);
        handleResize();
      
        return (() => {
            window.removeEventListener("resize", handleResize)
        });
    }, []);
  
    return windowSize;
}

// custom window resize hook
export function useWindowResize(callback: () => void) {  
    useEffect(() => {        
        window.addEventListener("resize", callback);
      
        return (() => {
            window.removeEventListener("resize", callback)
        });
    }, []);
}
