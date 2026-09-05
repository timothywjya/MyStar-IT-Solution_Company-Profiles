import { Hero } from "@presentation/components/sections/Hero";
import { AboutSection } from "@presentation/components/sections/AboutSection";
import { VisiMisiSection } from "@presentation/components/sections/VisiMisiSection";
import { PortfolioPreviewSection } from "@presentation/components/sections/PortfolioPreviewSection";
import { GalleryPreviewSection } from "@presentation/components/sections/GalleryPreviewSection";
import { ClientPreviewSection } from "@presentation/components/sections/ClientPreviewSection";
import {
  getCompanyProfileUseCase,
  getPortfoliosUseCase,
  getGalleryItemsUseCase,
  getClientsUseCase,
} from "@presentation/di/container";

export default async function HomePage() {
  const [profile, portfolios, galleryItems, clients] = await Promise.all([
    getCompanyProfileUseCase.execute(),
    getPortfoliosUseCase.execute(),
    getGalleryItemsUseCase.execute(),
    getClientsUseCase.execute(),
  ]);

  return (
    <>
      <Hero profile={profile} />
      <AboutSection profile={profile} />
      <VisiMisiSection profile={profile} />
      <PortfolioPreviewSection portfolios={portfolios} />
      <GalleryPreviewSection items={galleryItems} />
      <ClientPreviewSection clients={clients} />
    </>
  );
}
