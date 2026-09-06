import { GalleryItem } from '@domain/entities/GalleryItem';
import { GalleryGrid } from '@presentation/components/sections/GalleryGrid';
import { Container } from '@presentation/components/ui/Container';
import { SectionHeading } from '@presentation/components/ui/SectionHeading';
import Link from 'next/link';

export function GalleryPreviewSection({ items }: { items: GalleryItem[] }) {
    return (
        <section className="py-24">
            <Container>
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <SectionHeading
                        title="Galeri"
                        description="Sekilas suasana kerja dan kegiatan dengan Client kami."
                    />
                    <Link
                        href="/gallery"
                        className="text-sm text-teal underline underline-offset-4"
                    >
                        Lihat semua foto
                    </Link>
                </div>
                <div className="mt-12">
                    <GalleryGrid items={items.slice(0, 6)} />
                </div>
            </Container>
        </section>
    );
}
