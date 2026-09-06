import { CompanyProfile } from '@domain/entities/CompanyProfile';
import { Container } from '@presentation/components/ui/Container';
import Image from 'next/image';

export function Footer({ profile }: { profile: CompanyProfile }) {
    return (
        <footer
            id="kontak"
            className="border-t border-navy-900/[0.06] bg-navy-950 text-paper/80"
        >
            <Container className="grid gap-10 py-12 text-center sm:grid-cols-2 sm:py-16 sm:text-left lg:grid-cols-4">
                <div className="lg:col-span-2">
                    <div className="flex items-center justify-center gap-2.5 sm:justify-start">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper/10 p-1.5">
                            <Image
                                src={profile.logoIconUrl}
                                alt={profile.name}
                                width={844}
                                height={844}
                                className="h-full w-full object-contain"
                            />
                        </span>
                        <span className="font-display text-base font-medium text-paper">
                            {profile.name}
                        </span>
                    </div>
                    <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-paper/60 sm:mx-0">
                        {profile.tagline}
                    </p>
                </div>

                <div>
                    <h3 className="font-display text-sm font-medium text-paper">
                        Alamat
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-paper/60">
                        {profile.address}
                        <br />
                        {profile.city}, {profile.postalCode}
                    </p>
                </div>

                <div>
                    <h3 className="font-display text-sm font-medium text-paper">
                        Kontak
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-paper/60">
                        <li>{profile.email}</li>
                        <li>WhatsApp: {profile.whatsapp}</li>
                    </ul>
                </div>
            </Container>

            <Container className="flex flex-col gap-2 border-t border-paper/10 py-6 text-xs text-paper/40 sm:flex-row sm:justify-between">
                <span>
                    © {new Date().getFullYear()} {profile.name}. Sejak{' '}
                    {profile.foundedYear}.
                </span>
                <span>Seluruh hak cipta dilindungi.</span>
            </Container>
        </footer>
    );
}
