"use client";

import {
  useRef,
  type ReactNode,
  type MouseEvent,
  type CSSProperties,
} from "react";

export function SpotlightCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      style={style}
      className={`spotlight rounded-3xl border border-border bg-surface/70 ${className}`}
    >
      {children}
    </div>
  );
}
