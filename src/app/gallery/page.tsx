import { Container } from "@presentation/components/ui/Container";
import { SectionHeading } from "@presentation/components/ui/SectionHeading";
import { GalleryGrid } from "@presentation/components/sections/GalleryGrid";
import { getGalleryItemsUseCase } from "@presentation/di/container";

export const metadata = {
  title: "Galeri — My Stars IT Solution",
};

export default async function GalleryPage() {
  const items = await getGalleryItemsUseCase.execute();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Galeri"
          description="Dokumentasi suasana kantor, kegiatan tim, dan momen bersama klien."
        />
        <div className="mt-12">
          <GalleryGrid items={items} />
        </div>
      </Container>
    </section>
  );
}
