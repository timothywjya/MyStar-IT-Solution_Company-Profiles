import Link from "next/link";
import { Client } from "@domain/entities/Client";
import { Container } from "@presentation/components/ui/Container";
import { SectionHeading } from "@presentation/components/ui/SectionHeading";
import { ClientCard } from "@presentation/components/sections/ClientCard";

export function ClientPreviewSection({ clients }: { clients: Client[] }) {
  return (
    <section className="bg-navy-950/[0.03] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title="Dipercaya Oleh"
            description={`Sudah dipercaya ${clients.length}+ koperasi, toko, dan perusahaan di berbagai daerah.`}
          />
          <Link href="/clients" className="text-sm text-teal underline underline-offset-4">
            Lihat semua klien
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {clients.slice(0, 10).map((c) => (
            <ClientCard key={c.id} client={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
