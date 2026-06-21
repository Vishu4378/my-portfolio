# Vijay Pandey — Portfolio

A fast, SEO-optimized personal portfolio built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion**. Dark "neon dev" aesthetic, fully static, deploy-ready for Vercel.

## Run locally

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build (fully static)
```

## Make it yours (3 quick edits)

All content lives in one place — [`lib/data.ts`](lib/data.ts). Edit text there and the whole site updates.

1. **GitHub URL** — set `profile.links.github` (currently a placeholder).
2. **Résumé PDF** — drop your file at `public/vijay-pandey-resume.pdf` so the "Download résumé" button works. (Path is `profile.links.resume`.)
3. **Projects** — the cards in `projects[]` are derived from your resume achievements. Swap in real product names + add `href` (live) and `repo` (code) links once available.

Optional: add a social share image at `app/opengraph-image.png` (1200×630) for nice link previews.

## Structure

```
app/
  layout.tsx        fonts, SEO metadata, OpenGraph
  page.tsx          section assembly + JSON-LD (Person schema)
  globals.css       design tokens + Tailwind theme
components/         Nav, Hero, Marquee, About, Skills, Experience,
                    Projects, Contact, Footer, CursorGlow, Reveal, icons
lib/data.ts         ← all your content
```

## Deploy

Push to GitHub, then import the repo at [vercel.com](https://vercel.com) → it auto-detects Next.js. Point `meetvijay.com` at it in the Vercel domains tab.
# my-portfolio
# my-portfolio
# my-portfolio
