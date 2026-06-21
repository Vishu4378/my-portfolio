"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile, socials } from "@/lib/data";
import { ProfilePortrait } from "./ProfilePortrait";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.1 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        {/* Text column */}
        <div className="order-2 lg:order-1">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent pulse-dot" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Building digital products that{" "}
            <span className="hero-gradient-text">actually ship.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-base leading-relaxed text-muted text-balance sm:text-lg"
          >
            I&apos;m <span className="font-medium text-text">Vijay Pandey</span>{" "}
            — a full-stack developer with 3+ years building production React,
            Next.js and Node.js products at Orufy Technologies.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-full accent-fill px-6 py-3 font-semibold btn-glow transition-transform hover:scale-[1.03]"
            >
              View my work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3 font-medium text-text transition-colors hover:border-accent/50 hover:bg-accent-dim"
            >
              Download résumé
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-faint sm:ml-1">
              <MapPin size={15} /> {profile.location}
            </span>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-7 flex flex-wrap gap-x-5 gap-y-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={
                  s.href.startsWith("http") || s.href.endsWith(".pdf")
                    ? "_blank"
                    : undefined
                }
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <s.icon size={16} />
                <span>{s.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Portrait column */}
        <ProfilePortrait className="order-1 lg:order-2" />
      </div>

      <a
        href="#about"
        className="mx-auto mt-14 hidden items-center gap-2 text-sm text-faint transition-colors hover:text-muted sm:flex"
      >
        <ArrowDown size={16} className="animate-bounce" /> Scroll to explore
      </a>
    </section>
  );
}
