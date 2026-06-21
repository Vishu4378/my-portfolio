import { coreStack, skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <SectionHeading
        index="01"
        kicker="Stack"
        title="The stack I build with."
      />

      {/* Core stack — what I reach for first */}
      <Reveal>
        <div className="mb-5 flex flex-col gap-4 rounded-3xl border border-border bg-surface/50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="shrink-0">
            <div className="font-mono text-xs uppercase tracking-wider text-accent">
              <span className="text-accent/70">/</span> Core stack
            </div>
            <p className="mt-1 text-sm text-muted">What I reach for first</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {coreStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-accent/30 bg-linear-to-b from-accent-dim to-transparent px-4 py-2 text-sm font-medium text-accent-3 transition-all hover:border-accent/60 hover:from-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Bento grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i % 3} className={`${group.span}`}>
            {group.featured ? (
              <FeaturedSkill group={group} />
            ) : (
              <SkillCard group={group} />
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

type Group = (typeof skillGroups)[number];

function CardHeader({ group }: { group: Group }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span
          className={`grid h-10 w-10 place-items-center rounded-xl ${
            group.featured
              ? "bg-linear-to-br from-accent-2 to-accent-strong text-white shadow-lg shadow-accent-glow/30"
              : "border border-accent/20 bg-accent-dim text-accent"
          }`}
        >
          <group.icon size={19} />
        </span>
        <h3 className="font-display text-lg font-semibold text-text">
          {group.title}
        </h3>
      </div>
      <span className="font-mono text-xs text-faint">
        {String(group.items.length).padStart(2, "0")}
      </span>
    </div>
  );
}

function FeaturedSkill({ group }: { group: Group }) {
  return (
    <SpotlightCard className="relative h-full overflow-hidden p-7 md:p-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(110% 120% at 0% 0%, rgba(139,124,246,0.16), transparent 55%)",
        }}
      />
      <div className="relative grid gap-7 md:grid-cols-[minmax(0,1fr)_1.4fr] md:items-center md:gap-10">
        {/* Left: identity */}
        <div>
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-dim px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
            ★ Primary focus
          </div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-accent-2 to-accent-strong text-white shadow-lg shadow-accent-glow/30">
              <group.icon size={24} />
            </span>
            <h3 className="font-display text-2xl font-bold text-text">
              {group.title}
            </h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Where I spend most of my time — building fast, accessible,
            pixel-accurate interfaces and reusable design systems.
          </p>
        </div>

        {/* Right: tags */}
        <div className="flex flex-wrap gap-2.5 md:justify-end">
          {group.items.map((item) => (
            <span
              key={item}
              className="rounded-xl border border-accent/25 bg-bg/60 px-3.5 py-2 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:bg-accent-dim"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

function SkillCard({ group }: { group: Group }) {
  return (
    <SpotlightCard className="h-full p-6">
      <CardHeader group={group} />
      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="group/tag inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg px-2.5 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-text"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-faint transition-colors group-hover/tag:bg-accent" />
            {item}
          </span>
        ))}
      </div>
    </SpotlightCard>
  );
}
