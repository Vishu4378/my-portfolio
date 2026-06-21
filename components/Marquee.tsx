import { marqueeItems } from "@/lib/data";

const fade =
  "linear-gradient(90deg, transparent 0%, #000 7%, #000 93%, transparent 100%)";

function Row({ reverse = false }: { reverse?: boolean }) {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div
      className={`marquee-track flex w-max items-center whitespace-nowrap ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {row.map((item, i) => (
        <span
          key={i}
          className="group mx-1.5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm font-medium text-muted backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-text"
        >
          <item.icon
            size={15}
            className="text-accent transition-transform group-hover:scale-110"
          />
          {item.label}
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-bg-soft py-6">
      <div
        className="flex flex-col gap-2.5"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
      >
        <Row />
        <Row reverse />
      </div>
    </div>
  );
}
