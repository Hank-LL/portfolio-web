"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/data/site";
import { XIcon, GitHubIcon } from "@/components/icons";
import ThemeToggle from "@/components/ThemeToggle";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <Link className="logo" href="/">
        {SITE.logo.main}
        <span>{SITE.logo.accent}</span>
      </Link>
      <div className="header-right">
        <nav>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "current" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="header-icons">
          <a
            href={SITE.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            title="X (Twitter)"
          >
            <XIcon />
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
