import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { profile, socials } from "@/lib/data";
import { WhatsappIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface px-8 py-16 text-center md:py-24">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(124,108,245,0.16), transparent 70%)",
            }}
          />
          <p className="font-mono text-sm uppercase tracking-wider text-accent">
            <span className="text-accent/70">/</span> Contact · 04
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
            Let&apos;s build something great.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted text-balance">
            I&apos;m open to full-time roles, freelance projects and
            collaborations. Drop a message and I&apos;ll get back to you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full accent-fill px-6 py-3 font-semibold btn-glow transition-transform hover:scale-[1.03]"
            >
              <Mail size={18} />
              {profile.email}
            </a>
            <a
              href={profile.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3 font-medium text-text transition-colors hover:bg-[#25D366]/20"
            >
              <WhatsappIcon size={18} className="text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href={`tel:${profile.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 font-medium text-text transition-colors hover:bg-surface-2"
            >
              <Phone size={18} />
              {profile.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {socials
              .filter((s) => s.href.startsWith("http"))
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                >
                  <s.icon size={16} />
                  {s.label}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
