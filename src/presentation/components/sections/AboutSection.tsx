import { CompanyProfile } from '@domain/entities/CompanyProfile';
import { Container } from '@presentation/components/ui/Container';
import Image from 'next/image';

/**
 * "About Me" perusahaan: logo, alamat, dan info lain.
 * Semua nilai berasal dari CompanyProfile — ganti isinya di
 * src/infrastructure/data/company-profile.data.ts
 */
export function AboutSection({ profile }: { profile: CompanyProfile }) {
    const details = [
        { label: 'Berdiri sejak', value: String(profile.foundedYear) },
        {
            label: 'Alamat',
            value: `${profile.address}, ${profile.city} ${profile.postalCode}`
        },
        { label: 'Email', value: profile.email },
        { label: 'Telepon / WhatsApp', value: ` ${profile.whatsapp}` }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24">
            <Container className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-14">
                <div className="flex justify-center lg:justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-navy-950/[0.04] p-3 sm:h-28 sm:w-28 sm:p-4">
                        <Image
                            src={profile.logoIconUrl}
                            alt={`Logo ${profile.name}`}
                            width={844}
                            height={844}
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>

                <div className="text-center lg:text-left">
                    <p className="text-sm text-teal">Tentang Kami</p>
                    <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl lg:text-4xl">
                        {profile.name}
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate lg:mx-0">
                        {profile.about}
                    </p>

                    <dl className="mt-10 grid gap-6 text-left sm:grid-cols-2">
                        {details.map((d) => (
                            <div
                                key={d.label}
                                className="border-l-2 border-gold/40 pl-4"
                            >
                                <dt className="text-xs text-slate-light">
                                    {d.label}
                                </dt>
                                <dd className="mt-1 text-sm text-ink">
                                    {d.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    );
}
