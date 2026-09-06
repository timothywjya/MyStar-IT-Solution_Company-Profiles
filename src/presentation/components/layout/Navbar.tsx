"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CompanyProfile } from "@domain/entities/CompanyProfile";
import { Container } from "@presentation/components/ui/Container";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/portfolio", label: "Portofolio" },
  { href: "/gallery", label: "Galeri" },
  { href: "/clients", label: "Klien" },
];

export function Navbar({ profile }: { profile: CompanyProfile }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/[0.06] bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-18">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
          aria-label={profile.name}
        >
          <Image
            src={profile.logoHorizontalUrl}
            alt={profile.name}
            width={1188}
            height={253}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#kontak"
            className="hidden rounded-full bg-navy-950 px-5 py-2.5 text-sm text-paper transition-colors hover:bg-navy-900 sm:inline-block"
          >
            Hubungi Kami
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-navy-950/[0.05] sm:hidden"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M3 5.5H17M3 10H17M3 14.5H17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-navy-900/[0.06] bg-paper transition-[max-height] duration-300 ease-in-out sm:hidden ${
          open ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-slate transition-colors hover:bg-navy-950/[0.04] hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#kontak"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-navy-950 px-5 py-3 text-center text-sm text-paper"
          >
            Hubungi Kami
          </Link>
        </Container>
      </div>
    </header>
  );
}
