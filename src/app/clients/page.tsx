import { Container } from "@presentation/components/ui/Container";
import { SectionHeading } from "@presentation/components/ui/SectionHeading";
import { ClientCard } from "@presentation/components/sections/ClientCard";
import { getClientsUseCase } from "@presentation/di/container";

export const metadata = {
  title: "Klien — My Stars IT Solution",
};

export default async function ClientsPage() {
  const clients = await getClientsUseCase.execute();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Klien Kami"
          description="Koperasi, toko, dan lembaga yang sudah pernah bekerja sama dengan kami."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((c) => (
            <ClientCard key={c.id} client={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
