import Link from "next/link";
import { GalleryItem } from "@domain/entities/GalleryItem";
import { Container } from "@presentation/components/ui/Container";
import { SectionHeading } from "@presentation/components/ui/SectionHeading";
import { GalleryGrid } from "@presentation/components/sections/GalleryGrid";

export function GalleryPreviewSection({ items }: { items: GalleryItem[] }) {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title="Galeri"
            description="Sekilas suasana kerja dan kegiatan tim My Stars IT Solution."
          />
          <Link href="/gallery" className="text-sm text-teal underline underline-offset-4">
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
