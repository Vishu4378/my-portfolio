import type { ComponentType, SVGProps } from "react";
import {
  Mail,
  Phone,
  FileText,
  Code2,
  MonitorSmartphone,
  Server,
  Database,
  Cloud,
  Wrench,
  Sparkles,
  Rocket,
  FileCode2,
  TrendingUp,
  LayoutPanelLeft,
  Gauge,
  Palette,
  Layers,
  Boxes,
  Activity,
  Search,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export const profile = {
  name: "Vijay Pandey",
  role: "Full-Stack Engineer",
  titleLine: "Software Developer · Full-Stack Engineer",
  location: "Nainital, Uttarakhand",
  openTo: "Open to remote",
  tagline:
    "I design and ship scalable, performant web products end-to-end — from pixel-perfect React frontends to production NestJS APIs on AWS.",
  aboutTitle: "3 years turning rough product ideas into shipped software.",
  aboutBody:
    "Most days I'm somewhere between a Figma file, a NestJS service, and a CI pipeline. I care about tight feedback loops, performance budgets, and writing TypeScript future-me thanks past-me for.",
  currentSummary:
    "Owning monorepo architecture across 3+ products, mentoring devs, and building role-based admin dashboards with NestJS + Firebase.",
  email: "vpandey4378@gmail.com",
  phone: "+91 7902171437",
  phoneHref: "+917902171437",
  links: {
    portfolio: "https://meetvijay.com",
    linkedin: "https://www.linkedin.com/in/vijay-pandey-linkdin",
    github: "https://github.com/Vishu4378", 
    resume: "/vijay-resume-6-26.pdf", // TODO: drop the PDF in /public
    whatsapp:
      "https://wa.me/917902171437?text=Hi%20Vijay%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect.",
  },
};

export const stats: {
  value: string;
  label: string;
  icon: IconType;
  highlight?: boolean;
}[] = [
  {
    value: "3+",
    label: "Years of production experience",
    icon: Sparkles,
  },
  {
    value: "3+",
    label: "Products shipped end-to-end",
    icon: Rocket,
    highlight: true,
  },
  { value: "10k+", label: "Lines JS → TS migrated", icon: FileCode2 },
  { value: "95+", label: "Lighthouse SEO score", icon: TrendingUp },
];

export const socials: { label: string; href: string; icon: IconType }[] = [
  { label: "GitHub", href: profile.links.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", href: `tel:${profile.phoneHref}`, icon: Phone },
  { label: "Résumé", href: profile.links.resume, icon: FileText },
];

// Headline tech — shown as large featured pills above the grid.
export const coreStack: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "AWS",
  "Tailwind CSS",
];

export const skillGroups: {
  title: string;
  icon: IconType;
  items: string[];
  featured?: boolean;
  // Column span on the 6-col bento grid (md+).
  span: string;
}[] = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    featured: true,
    span: "md:col-span-6",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "React Query",
      "Redux Toolkit",
      "Framer Motion",
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    span: "md:col-span-2",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    span: "md:col-span-2",
    items: ["Node.js", "NestJS", "Express.js", "GraphQL", "REST APIs"],
  },
  {
    title: "Data & CMS",
    icon: Database,
    span: "md:col-span-2",
    items: ["MongoDB", "PostgreSQL", "Firebase", "Strapi (CMS)"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    span: "md:col-span-3",
    items: ["AWS (EC2 · S3 · Lambda)", "Docker", "CI/CD", "Vercel"],
  },
  {
    title: "Tooling",
    icon: Wrench,
    span: "md:col-span-3",
    items: ["Git", "Postman", "VS Code", "Monorepos", "Turborepo"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Development Engineer",
    company: "Orufy Technologies Pvt. Ltd.",
    period: "Jun 2023 — Present",
    location: "Jaipur, Rajasthan",
    current: true,
    points: [
      "Developed and launched 2+ customer-facing products from scratch — owning frontend, backend and deployment.",
      "Managed a monorepo architecture across 3+ products, improving code reusability and cutting build issues.",
      "Migrated 10,000+ lines of JavaScript to TypeScript, reducing bugs by 20–30% and improving maintainability.",
      "Built graphical admin dashboards with charts, visual components and role-based access for secure data visualization.",
      "Integrated Strapi CMS to enable dynamic, non-developer content updates.",
      "Improved page performance by 20% and achieved a 95+ SEO score, boosting organic traffic.",
      "Developed backend APIs with NestJS and Firebase for robust data handling and real-time updates.",
      "Designed and implemented secure authentication and role-based access control in NestJS.",
      "Mentored developers through code reviews and project support.",
    ],
    stack: ["Next.js", "TypeScript", "NestJS", "Strapi", "Firebase", "AWS"],
  },
  {
    role: "Software Development Intern",
    company: "Tech Jain IT Solutions",
    period: "Dec 2022 — Feb 2023",
    location: "Remote",
    points: [
      "Built backend CRUD APIs for a donation management system, processing 300+ submissions.",
      "Contributed to a responsive front-end donation website.",
      "Collaborated with a team of 5 developers to improve project efficiency.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  year: string;
  featured?: boolean;
  metric?: { value: string; label: string };
  platforms?: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "WebToNative",
    blurb:
      "Orufy's flagship no-code SaaS that turns any website into a native iOS, Android & desktop app in minutes. I built the entire marketing website and product experience — from the landing pages to the app-builder dashboard.",
    highlights: [
      "Owned the full marketing site + builder UI",
      "Cross-platform: iOS, Android, macOS, Windows, Linux",
      "Push notifications, deep linking, biometric auth & AdMob",
      "Auto-sync, splash screens and app-store publishing flows",
    ],
    stack: ["Next.js", "TypeScript", "NestJS", "Tailwind", "AWS"],
    year: "2024",
    featured: true,
    metric: { value: "400K+", label: "apps built on the platform" },
    platforms: ["iOS", "Android", "macOS", "Windows", "Linux"],
    href: "https://webtonative.com",
  },
  {
    title: "Multi-Product Monorepo Platform",
    blurb:
      "Architected and maintained a shared monorepo powering 3+ products with a common design system, shared utilities and unified CI/CD.",
    highlights: [
      "Shared component library across products",
      "Reduced duplicate code & build issues",
      "Turborepo-style task pipelines",
    ],
    stack: ["Next.js", "TypeScript", "Monorepo", "Tailwind"],
    year: "2024",
  },
  {
    title: "Analytics Admin Dashboard",
    blurb:
      "Data-rich admin console with interactive charts, real-time metrics and role-based access control for secure, scoped visualization.",
    highlights: [
      "RBAC with scoped views",
      "Charts & visual components",
      "Real-time data via Firebase",
    ],
    stack: ["React", "NestJS", "Firebase", "Charts"],
    year: "2024",
  },
  {
    title: "Headless CMS Content Engine",
    blurb:
      "Integrated Strapi as a headless CMS so non-developers could ship content independently — while the front-end kept a 95+ SEO score and 20% faster page loads.",
    highlights: [
      "Strapi headless CMS integration",
      "95+ SEO · 20% faster pages",
      "Static + dynamic hybrid rendering",
    ],
    stack: ["Next.js", "Strapi", "SEO", "Vercel"],
    year: "2023",
  },
  {
    title: "Donation Management System",
    blurb:
      "Backend CRUD APIs and a responsive donation front-end that reliably processed 300+ submissions for a non-profit workflow.",
    highlights: [
      "300+ submissions processed",
      "Responsive donation flow",
      "Team of 5 developers",
    ],
    stack: ["React", "Express.js", "MongoDB"],
    year: "2023",
  },
];

export const education: {
  degree: string;
  school: string;
  date: string;
}[] = [
  {
    degree: "MCA — Master of Computer Applications",
    school: "Dr. A.P.J. Abdul Kalam Technical University, Noida",
    date: "Jul 2025",
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    school: "Devbhoomi Uttarakhand University, Dehradun",
    date: "Aug 2023",
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

// Editorial ticker — what I actually do (not a repeat of the tech list)
export const marqueeItems: { label: string; icon: IconType }[] = [
  { label: "Frontend Architecture", icon: LayoutPanelLeft },
  { label: "Performance Optimization", icon: Gauge },
  { label: "Design Systems", icon: Palette },
  { label: "Scalable APIs", icon: Server },
  { label: "Headless CMS", icon: Layers },
  { label: "TypeScript Migrations", icon: FileCode2 },
  { label: "Monorepos", icon: Boxes },
  { label: "Real-Time Apps", icon: Activity },
  { label: "SEO & Core Web Vitals", icon: Search },
];
