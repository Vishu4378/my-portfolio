import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-faint sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </p>
        <p className="font-mono">Designed & developed in Nainital, Uttarakhand.</p>
      </div>
    </footer>
  );
}
