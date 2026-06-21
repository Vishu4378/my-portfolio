import { GraduationCap, MapPin, Code2 } from "lucide-react";
import { profile, stats, experience, education } from "@/lib/data";
import { SpotlightCard } from "./SpotlightCard";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

const current = experience.find((e) => e.current) ?? experience[0];
const aboutStats = stats.slice(0, 2);

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {/* Big About card */}
        <Reveal className="lg:col-span-2 lg:row-span-2">
          <SpotlightCard className="flex h-full flex-col p-7 md:p-9">
            <div className="font-mono text-sm uppercase tracking-wider text-accent">
              <span className="text-accent/70">/</span> About
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-text md:text-4xl">
              {profile.aboutTitle}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">
              {profile.aboutBody}
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-8 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} className="text-accent" />
                {profile.location}
              </span>
              <span className="text-faint">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
                {profile.openTo}
              </span>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* Two stat cards */}
        {aboutStats.map((s, i) => (
          <Reveal key={s.label} delay={i + 1}>
            <div
              className={`group flex h-full flex-col rounded-3xl border p-6 transition-all hover:-translate-y-1 ${
                s.highlight
                  ? "accent-fill border-transparent shadow-xl shadow-accent-glow/30"
                  : "border-border bg-surface/70 hover:border-border-strong"
              }`}
            >
              <s.icon
                size={22}
                className={s.highlight ? "text-bg/80" : "text-accent"}
              />
              <div
                className={`mt-auto pt-6 font-display text-4xl font-extrabold ${
                  s.highlight ? "text-bg" : "text-text"
                }`}
              >
                <CountUp value={s.value} />
              </div>
              <div
                className={`mt-1 text-sm ${
                  s.highlight ? "text-bg/70" : "text-muted"
                }`}
              >
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}

        {/* Currently card */}
        <Reveal delay={2} className="lg:col-span-2">
          <SpotlightCard className="h-full p-7">
            <div className="font-mono text-sm uppercase tracking-wider text-accent">
              <span className="text-accent/70">/</span> Currently
            </div>
            <div className="mt-5 flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent-dim text-accent">
                <Code2 size={20} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-text">
                  {current.role}
                </h3>
                <div className="mt-0.5 text-sm text-muted">
                  {current.company} · {current.period}
                </div>
              </div>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              {profile.currentSummary}
            </p>
          </SpotlightCard>
        </Reveal>
      </div>

      {/* Education strip */}
      <Reveal delay={1}>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {education.map((e) => (
            <div
              key={e.degree}
              className="flex items-start gap-3 rounded-3xl border border-border bg-surface/50 p-6"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent-dim text-accent">
                <GraduationCap size={18} />
              </span>
              <div>
                <div className="text-sm font-medium text-text">{e.degree}</div>
                <div className="mt-1 text-sm text-muted">{e.school}</div>
                <div className="mt-1 font-mono text-xs text-faint">
                  {e.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
