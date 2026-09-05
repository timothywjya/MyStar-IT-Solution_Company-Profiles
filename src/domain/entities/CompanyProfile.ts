/**
 * Domain Entity: CompanyProfile
 *
 * Merepresentasikan data inti "About Me" perusahaan.
 * Semua nilai di sini adalah placeholder — silakan ganti melalui
 * src/infrastructure/data/company-profile.data.ts
 */
export interface CompanyProfile {
  name: string;
  tagline: string;
  logoUrl: string;
  foundedYear: number;
  address: string;
  city: string;
  postalCode: string;
  email: string;
  whatsapp: string;
  instagram?: string;
  linkedin?: string;
  about: string;
  vision: string;
  missions: string[];
}
