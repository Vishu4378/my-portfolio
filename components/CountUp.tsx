"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Splits a value like "10k+", "95+", "3+" into prefix-number-suffix and
 * tweens the numeric part from 0 → target (easeOutCubic) when it scrolls
 * into view. Self-contained rAF loop — no animation library, fires once.
 */
export function CountUp({
  value,
  duration = 1800,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState("0");

  const { prefix, target, suffix, decimals, ok } = useMemo(() => {
    const m = value.match(/^([^\d]*)([\d.]+)(.*)$/);
    if (!m) {
      return { prefix: "", target: 0, suffix: "", decimals: 0, ok: false };
    }
    return {
      prefix: m[1],
      target: parseFloat(m[2]),
      suffix: m[3],
      decimals: m[2].includes(".") ? 1 : 0,
      ok: true,
    };
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!ok || !el) return;

    let raf = 0;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setDisplay((eased * target).toFixed(decimals));
        if (t < 1) raf = requestAnimationFrame(tick);
        else setDisplay(target.toFixed(decimals));
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [ok, target, decimals, duration]);

  if (!ok) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
