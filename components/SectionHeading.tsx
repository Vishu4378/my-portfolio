import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-accent">
          <span className="text-accent/70">/</span>
          <span>{kicker}</span>
          <span className="ml-1 text-faint normal-case tracking-normal">
            {index}
          </span>
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-text md:text-5xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
