"use client";

import { useEffect, useRef } from "react";

/**
 * A soft accent-colored spotlight that trails the cursor.
 * Pointer-events-none, fixed, GPU-cheap (transform only). Hidden on touch.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.x - 300}px, ${
          current.y - 300
        }px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full opacity-50 blur-[120px] will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(124,108,245,0.22) 0%, rgba(124,108,245,0.05) 45%, transparent 70%)",
      }}
    />
  );
}
