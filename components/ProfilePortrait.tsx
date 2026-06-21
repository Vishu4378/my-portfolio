"use client";

import { motion } from "framer-motion";

export function ProfilePortrait({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto w-full max-w-[260px] sm:max-w-xs lg:max-w-sm ${className}`}
    >
      <div className="relative">
        {/* glow */}
        <div
          className="absolute -inset-5 -z-10 rounded-[2.2rem] opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, var(--accent-glow), transparent 70%)",
          }}
        />

        {/* frame */}
        <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border-strong bg-surface shadow-2xl">
          {/* fallback if /profile.jpg is missing */}
          <div className="absolute inset-0 grid place-items-center bg-linear-to-br from-surface-2 to-bg">
            <span className="font-display text-7xl font-bold text-faint">VP</span>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt="Vijay Pandey"
            className="relative h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* bottom fade + chip */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-bg via-bg/55 to-transparent" />
          <div className="absolute bottom-3 left-3 rounded-full border border-border-strong bg-bg/70 px-3 py-1 font-mono text-xs text-muted backdrop-blur">
            Jaipur · India
          </div>
        </div>
      </div>
    </motion.div>
  );
}
