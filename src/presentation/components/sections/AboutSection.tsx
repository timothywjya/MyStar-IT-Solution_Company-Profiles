import Image from "next/image";
import { CompanyProfile } from "@domain/entities/CompanyProfile";
import { Container } from "@presentation/components/ui/Container";

/**
 * "About Me" perusahaan: logo, alamat, dan info lain.
 * Semua nilai berasal dari CompanyProfile — ganti isinya di
 * src/infrastructure/data/company-profile.data.ts
 */
export function AboutSection({ profile }: { profile: CompanyProfile }) {
  const details = [
    { label: "Berdiri sejak", value: String(profile.foundedYear) },
    { label: "Alamat", value: `${profile.address}, ${profile.city} ${profile.postalCode}` },
    { label: "Email", value: profile.email },
    { label: "Telepon / WhatsApp", value: `${profile.phone} / ${profile.whatsapp}` },
  ];

  return (
    <section className="py-24">
      <Container className="grid gap-14 lg:grid-cols-[220px_1fr]">
        <div className="flex justify-start lg:justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-navy-950/[0.04]">
            <Image
              src={profile.logoUrl}
              alt={`Logo ${profile.name}`}
              width={72}
              height={72}
              className="opacity-80"
            />
          </div>
        </div>

        <div>
          <p className="text-sm text-teal">Tentang Kami</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
            {profile.name}
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate">{profile.about}</p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {details.map((d) => (
              <div key={d.label} className="border-l-2 border-gold/40 pl-4">
                <dt className="text-xs text-slate-light">{d.label}</dt>
                <dd className="mt-1 text-sm text-ink">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
