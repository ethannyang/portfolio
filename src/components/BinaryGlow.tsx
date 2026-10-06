'use client';

import { useEffect, useRef } from 'react';

export default function BinaryGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = glowRef.current?.parentElement;
    if (!canvas) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let frame = 0;
    const hide = () => {
      cancelAnimationFrame(frame);
      if (glowRef.current) glowRef.current.dataset.visible = 'false';
    };
    const move = (event: PointerEvent) => {
      if (preference.matches || !pointer.matches || event.pointerType === 'touch') return;
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!glowRef.current) return;
        glowRef.current.style.setProperty('--pointer-x', `${x}px`);
        glowRef.current.style.setProperty('--pointer-y', `${y}px`);
        glowRef.current.dataset.visible = 'true';
      });
    };
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    preference.addEventListener('change', hide);
    return () => {
      cancelAnimationFrame(frame);
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
      preference.removeEventListener('change', hide);
    };
  }, []);

  return (
    <div ref={glowRef} className="binary-spotlight" aria-hidden="true">
      <div className="binary-wash" />
      <div className="binary-digits" />
    </div>
  );
}
