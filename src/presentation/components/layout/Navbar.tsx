import Link from "next/link";
import { Container } from "@presentation/components/ui/Container";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/portfolio", label: "Portofolio" },
  { href: "/gallery", label: "Galeri" },
  { href: "/clients", label: "Klien" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/[0.06] bg-paper/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-950">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          <span className="font-display text-base font-medium text-ink">
            My Stars <span className="text-slate">IT Solution</span>
          </span>
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
        <Link
          href="#kontak"
          className="rounded-full bg-navy-950 px-5 py-2.5 text-sm text-paper transition-colors hover:bg-navy-900"
        >
          Hubungi Kami
        </Link>
      </Container>
    </header>
  );
}
