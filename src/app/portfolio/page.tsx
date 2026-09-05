import { Container } from "@presentation/components/ui/Container";
import { SectionHeading } from "@presentation/components/ui/SectionHeading";
import { PortfolioCard } from "@presentation/components/sections/PortfolioCard";
import { getPortfoliosUseCase } from "@presentation/di/container";

export const metadata = {
  title: "Portofolio — My Stars IT Solution",
};

export default async function PortfolioPage() {
  const portfolios = await getPortfoliosUseCase.execute();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Portofolio"
          description="Daftar lengkap proyek yang pernah kami kerjakan bersama klien dari berbagai sektor usaha."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((p) => (
            <PortfolioCard key={p.id} portfolio={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
