import { useState } from "react";
import { Menu, X } from "lucide-react";

export const navLinks = [
  { href: "#build", label: "Ways to build" },
  { href: "#services", label: "Services" },
  { href: "#fleetflow", label: "FleetFlow" },
  { href: "#creator-core", label: "Creator Core" },
  { href: "#process", label: "Process" },
];

export function Wordmark() {
  return (
    <span className="flex items-baseline gap-2 whitespace-nowrap">
      <span className="font-display text-lg uppercase tracking-tight">Novagentec</span>
      <span aria-hidden>·</span>
      <span className="text-xs font-semibold uppercase tracking-wider">Commercial</span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#top" aria-label="NOVAGENTEC Commercial home" className="min-h-11 flex items-center">
          <Wordmark />
        </a>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-semibold">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:underline underline-offset-4">{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="bg-primary px-4 py-2.5 text-primary-foreground uppercase text-xs tracking-wider">
                Let's talk
              </a>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-card lg:hidden">
          <ul className="px-5 py-3">
            {[...navLinks, { href: "#contact", label: "Let's talk" }].map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-border font-display uppercase">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
