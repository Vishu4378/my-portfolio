import {
  profile,
  stats,
  skillGroups,
  experience,
  projects,
  education,
} from "@/lib/data";

/**
 * Serialises the site's structured résumé data into a plain-text block that is
 * fed to the model as context. Sourced from `lib/data.ts` so the chatbot always
 * reflects what's actually on the page — update the data, not this file.
 */
function buildResumeText(): string {
  const skills = skillGroups
    .map((g) => `- ${g.title}: ${g.items.join(", ")}`)
    .join("\n");

  const roles = experience
    .map((e) => {
      const points = e.points.map((p) => `  • ${p}`).join("\n");
      return `${e.role} @ ${e.company} (${e.period}, ${e.location}${
        e.current ? ", current role" : ""
      })\n  Stack: ${e.stack.join(", ")}\n${points}`;
    })
    .join("\n\n");

  const work = projects
    .map((p) => {
      const metric = p.metric ? ` [${p.metric.value} ${p.metric.label}]` : "";
      return `${p.title} (${p.year})${metric}: ${p.blurb} Highlights: ${p.highlights.join(
        "; "
      )}. Stack: ${p.stack.join(", ")}.${p.href ? ` Link: ${p.href}` : ""}`;
    })
    .join("\n\n");

  const edu = education
    .map((d) => `- ${d.degree}, ${d.school} (${d.date})`)
    .join("\n");

  const highlights = stats.map((s) => `- ${s.value} ${s.label}`).join("\n");

  return `
NAME: ${profile.name}
ROLE: ${profile.titleLine}
LOCATION: ${profile.location} (${profile.openTo})
TAGLINE: ${profile.tagline}

ABOUT:
${profile.aboutTitle}
${profile.aboutBody}
Currently: ${profile.currentSummary}

KEY STATS:
${highlights}

SKILLS:
${skills}

EXPERIENCE:
${roles}

PROJECTS:
${work}

EDUCATION:
${edu}

CONTACT:
- Email: ${profile.email}
- Phone: ${profile.phone}
- LinkedIn: ${profile.links.linkedin}
- GitHub: ${profile.links.github}
- Portfolio: ${profile.links.portfolio}
`.trim();
}

export const SYSTEM_PROMPT = `You are "Ask Vijay", a friendly AI assistant embedded on ${profile.name}'s portfolio website. Anyone visiting the site can ask you anything, and you answer questions about ${profile.name} — his background, skills, experience, projects, and how to get in touch — using only the résumé data below.

Guidelines:
- Answer in a warm, concise, professional tone. Prefer 1–4 short sentences unless the visitor asks for detail.
- Speak about ${profile.name} in the third person (e.g. "Vijay built…"). You represent him, but you are not him.
- Ground every answer in the RÉSUMÉ DATA below. If something isn't covered there, say you don't have that detail and point them to ${profile.email} — never invent facts, dates, employers, or numbers.
- For recruiter-style questions (availability, stack, fit), be helpful and specific, then nudge them toward the contact options.
- If asked something unrelated to ${profile.name} or his work, gently steer back to what you can help with.
- Use plain text; light markdown (bullets, **bold**) is fine. Do not output code blocks unless asked for code.

RÉSUMÉ DATA:
${buildResumeText()}`;
