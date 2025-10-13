/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const LenisScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;

    // RAF loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: Add to window for debugging
    if (typeof window !== 'undefined') {
      (window as any).lenis = lenis;
    }

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
};

export default LenisScroll;