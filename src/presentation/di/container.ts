import { GetCompanyProfile } from "@application/use-cases/GetCompanyProfile";
import { GetPortfolios } from "@application/use-cases/GetPortfolios";
import { GetGalleryItems } from "@application/use-cases/GetGalleryItems";
import { GetClients } from "@application/use-cases/GetClients";

import { StaticCompanyProfileRepository } from "@infrastructure/repositories/StaticCompanyProfileRepository";
import { StaticPortfolioRepository } from "@infrastructure/repositories/StaticPortfolioRepository";
import { StaticGalleryRepository } from "@infrastructure/repositories/StaticGalleryRepository";
import { StaticClientRepository } from "@infrastructure/repositories/StaticClientRepository";

/**
 * Composition root sederhana.
 *
 * Ini adalah SATU-SATUNYA tempat implementasi konkret (infrastructure)
 * dirangkai dengan use-case (application). Komponen di layer presentation
 * cukup mengimpor use-case dari sini, tanpa pernah menyentuh
 * implementasi repository secara langsung.
 *
 * Jika nanti data dipindah ke database/API, cukup ganti repository
 * di file ini saja.
 */
const companyProfileRepository = new StaticCompanyProfileRepository();
const portfolioRepository = new StaticPortfolioRepository();
const galleryRepository = new StaticGalleryRepository();
const clientRepository = new StaticClientRepository();

export const getCompanyProfileUseCase = new GetCompanyProfile(companyProfileRepository);
export const getPortfoliosUseCase = new GetPortfolios(portfolioRepository);
export const getGalleryItemsUseCase = new GetGalleryItems(galleryRepository);
export const getClientsUseCase = new GetClients(clientRepository);
