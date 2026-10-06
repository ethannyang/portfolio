'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let frame = 0;
    const hide = () => {
      if (glowRef.current) glowRef.current.dataset.visible = 'false';
    };
    const move = (event: PointerEvent) => {
      if (preference.matches || !pointer.matches || event.pointerType === 'touch') return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!glowRef.current) return;
        glowRef.current.style.transform = `translate3d(${event.clientX - 170}px, ${event.clientY - 170}px, 0)`;
        glowRef.current.dataset.visible = 'true';
      });
    };
    window.addEventListener('pointermove', move);
    document.documentElement.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    preference.addEventListener('change', hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
      preference.removeEventListener('change', hide);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
