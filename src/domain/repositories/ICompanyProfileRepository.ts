import { CompanyProfile } from "@domain/entities/CompanyProfile";

/**
 * Kontrak (interface) untuk mengambil data profil perusahaan.
 * Layer domain TIDAK BOLEH tahu bagaimana implementasinya
 * (bisa dari data statis, CMS, atau REST API sekalipun) —
 * itu tanggung jawab layer infrastructure.
 */
export interface ICompanyProfileRepository {
  getProfile(): Promise<CompanyProfile>;
}
