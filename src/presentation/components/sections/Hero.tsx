import Link from "next/link";
import { CompanyProfile } from "@domain/entities/CompanyProfile";
import { Container } from "@presentation/components/ui/Container";
import { ConstellationArt } from "@presentation/components/ui/ConstellationArt";

export function Hero({ profile }: { profile: CompanyProfile }) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <Container className="grid items-center gap-12 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <p className="text-sm text-gold">Software House</p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] text-paper sm:text-5xl lg:text-[3.25rem]">
            {profile.tagline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper/60">{profile.about}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/portfolio"
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy-950 transition-colors hover:bg-gold-dark"
            >
              Lihat Portofolio
            </Link>
            <Link
              href="#kontak"
              className="rounded-full border border-paper/20 px-6 py-3 text-sm text-paper transition-colors hover:bg-paper/5"
            >
              Diskusikan Proyek Anda
            </Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <ConstellationArt />
        </div>
      </Container>
    </section>
  );
}
