import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";
import { Reveal } from "./Reveal";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <SectionHeading
        index="03"
        kicker="Selected Work"
        title="Things I've built & shipped."
      />

      {featured && (
        <Reveal>
          <FeaturedProject p={featured} />
        </Reveal>
      )}

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={i % 2}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-center text-sm text-faint">
          Want the full picture? Explore more on{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}

// WebToNative's own brand palette — scoped to this card only.
const wtnTheme = {
  "--accent": "#ff725e",
  "--accent-strong": "#ff4a26",
  "--accent-2": "#ff8a6e",
  "--accent-3": "#ffc5b7",
  "--accent-dim": "rgba(255,74,38,0.13)",
  "--accent-glow": "rgba(255,74,38,0.45)",
  "--color-accent": "#ff725e",
  "--color-accent-strong": "#ff4a26",
  "--color-accent-2": "#ff8a6e",
  "--color-accent-3": "#ffc5b7",
} as React.CSSProperties;

function FeaturedProject({ p }: { p: Project }) {
  return (
    <SpotlightCard className="overflow-hidden" style={wtnTheme}>
      <div className="grid gap-8 p-7 md:grid-cols-2 md:gap-10 md:p-10">
        {/* Left: copy */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-accent/30 bg-accent-dim px-3 py-1 font-mono text-xs text-accent">
              ★ Flagship product
            </span>
            <span className="font-mono text-xs text-faint">{p.year}</span>
          </div>

          <h3 className="mt-5 font-display text-3xl font-bold tracking-tight md:text-4xl">
            <span className="accent-gradient-text">{p.title}</span>
          </h3>

          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            {p.blurb}
          </p>

          {p.metric && (
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-accent">
                {p.metric.value}
              </span>
              <span className="text-sm text-muted">{p.metric.label}</span>
            </div>
          )}

          <ul className="mt-6 space-y-2">
            {p.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <span className="mt-0.5 text-accent">→</span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-7">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full accent-fill px-5 py-2.5 text-sm font-semibold btn-glow transition-transform duration-200 ease-in-out hover:scale-[1.03]"
            >
              Visit webtonative.com
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Right: browser mockup */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border-strong bg-bg-soft shadow-2xl">
            {/* browser chrome */}
            <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 flex-1 truncate rounded-md bg-bg px-3 py-1 font-mono text-xs text-faint">
                webtonative.com
              </span>
            </div>
            {/* faux app */}
            <div className="relative grid place-items-center px-6 py-12">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,74,38,0.18), transparent 70%)",
                }}
              />
              <div className="relative text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-linear-to-br from-accent-2 to-accent-strong font-display text-2xl font-bold text-white">
                  W
                </div>
                <div className="mt-4 font-display text-lg font-semibold">
                  Website → Native App
                </div>
                <div className="mt-1 text-xs text-faint">
                  in ~10 minutes, no code
                </div>
                {p.platforms && (
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {p.platforms.map((pl) => (
                      <span
                        key={pl}
                        className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {pl}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <SpotlightCard className="group flex h-full flex-col p-7">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold text-text">
          {p.title}
        </h3>
        <span className="font-mono text-xs text-faint">{p.year}</span>
      </div>

      <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.blurb}</p>

      <ul className="mt-5 space-y-2">
        {p.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-sm text-muted">
            <span className="text-accent">→</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-xs text-faint"
          >
            {s}
          </span>
        ))}
      </div>

      {(p.href || p.repo) && (
        <div className="mt-6 flex gap-4 border-t border-border pt-4">
          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
            >
              Live <ArrowUpRight size={15} />
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={15} /> Code
            </a>
          )}
        </div>
      )}
    </SpotlightCard>
  );
}
