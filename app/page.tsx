import { CursorGlow } from "@/components/CursorGlow";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { profile } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Full-Stack Engineer",
  email: profile.email,
  telephone: profile.phone,
  url: profile.links.portfolio,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nainital",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  sameAs: [profile.links.linkedin, profile.links.github],
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "AWS"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="aurora" aria-hidden />
      <div className="grain" aria-hidden />
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
