import { CompanyProfile } from "@domain/entities/CompanyProfile";
import { Container } from "@presentation/components/ui/Container";

export function VisiMisiSection({ profile }: { profile: CompanyProfile }) {
  return (
    <section className="bg-navy-950/[0.03] py-24">
      <Container className="grid gap-14 lg:grid-cols-2">
        <div>
          <p className="text-sm text-teal">Visi</p>
          <p className="mt-3 max-w-md font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            {profile.vision}
          </p>
        </div>

        <div>
          <p className="text-sm text-teal">Misi</p>
          <ul className="mt-3 space-y-4">
            {profile.missions.map((mission, i) => (
              <li key={i} className="flex gap-3 text-slate">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">{mission}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
