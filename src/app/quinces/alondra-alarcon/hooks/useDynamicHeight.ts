// hooks/useDynamicHeight.ts
"use client";

import { useState, useEffect } from 'react';

export function useDynamicHeight() {
  const [height, setHeight] = useState('100svh');

  useEffect(() => {
    const setDynamicHeight = () => {
      // Usar innerHeight para obtener la altura real
      setHeight(`${window.innerHeight}px`);
    };

    setDynamicHeight();
    
    // Usar requestAnimationFrame para mejor performance
    let ticking = false;
    const handleResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setDynamicHeight();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', setDynamicHeight);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', setDynamicHeight);
    };
  }, []);

  return height;
}