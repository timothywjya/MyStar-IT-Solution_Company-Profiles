import Link from "next/link";
import { Portfolio } from "@domain/entities/Portfolio";
import { Container } from "@presentation/components/ui/Container";
import { SectionHeading } from "@presentation/components/ui/SectionHeading";
import { PortfolioCard } from "@presentation/components/sections/PortfolioCard";

export function PortfolioPreviewSection({ portfolios }: { portfolios: Portfolio[] }) {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title="Portofolio Terpilih"
            description="Sebagian proyek yang pernah kami kerjakan bersama klien dari berbagai sektor usaha."
          />
          <Link href="/portfolio" className="text-sm text-teal underline underline-offset-4">
            Lihat semua portofolio
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.slice(0, 3).map((p) => (
            <PortfolioCard key={p.id} portfolio={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
