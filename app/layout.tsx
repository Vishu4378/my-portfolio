import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const SITE = "https://meetvijay.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Vijay Pandey — Full-Stack Engineer",
    template: "%s · Vijay Pandey",
  },
  description:
    "Vijay Pandey is a full-stack software engineer with 3+ years of experience building scalable web products with React, Next.js, TypeScript, Node.js, NestJS and AWS.",
  keywords: [
    "Vijay Pandey",
    "Full-Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "NestJS",
    "Node.js",
    "Software Developer India",
  ],
  authors: [{ name: "Vijay Pandey" }],
  creator: "Vijay Pandey",
  openGraph: {
    type: "website",
    url: SITE,
    title: "Vijay Pandey — Full-Stack Engineer",
    description:
      "Full-stack engineer shipping scalable web products with React, Next.js, TypeScript & AWS.",
    siteName: "Vijay Pandey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijay Pandey — Full-Stack Engineer",
    description:
      "Full-stack engineer shipping scalable web products with React, Next.js, TypeScript & AWS.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-text">{children}</body>
    </html>
  );
}
