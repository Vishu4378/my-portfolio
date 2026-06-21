import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <SectionHeading
        index="02"
        kicker="Experience"
        title="Where I've made an impact."
      />

      <div className="relative">
        {/* timeline spine */}
        <div
          className="absolute bottom-6 left-[19px] top-3 w-px md:left-[23px]"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent), var(--border) 80%, transparent)",
          }}
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i}>
              <div className="relative pl-12 md:pl-16">
                {/* node */}
                <span className="absolute left-[14px] top-4 grid h-3 w-3 place-items-center md:left-[18px]">
                  <span
                    className={`h-3 w-3 rounded-full ring-4 ring-bg ${
                      job.current ? "bg-accent pulse-dot" : "bg-faint"
                    }`}
                  />
                </span>

                <SpotlightCard className="p-6 md:p-7">
                  {/* header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-3.5">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-accent-2 to-accent-strong font-display text-lg font-bold text-white shadow-lg shadow-accent-glow/30">
                        {job.company.charAt(0)}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold leading-tight text-text">
                          {job.role}
                        </h3>
                        <div className="mt-0.5 text-sm text-muted">
                          {job.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                      <span className="rounded-full border border-border-strong bg-bg/60 px-3 py-1 font-mono text-xs text-muted">
                        {job.period}
                      </span>
                      <span className="text-xs text-faint">{job.location}</span>
                      {job.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-dim px-2.5 py-1 text-xs text-accent">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* bullets */}
                  <ul className="mt-6 grid gap-x-8 gap-y-2.5 md:grid-cols-2">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-[15px] leading-relaxed text-muted"
                      >
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  {/* stack */}
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-xs text-faint"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
