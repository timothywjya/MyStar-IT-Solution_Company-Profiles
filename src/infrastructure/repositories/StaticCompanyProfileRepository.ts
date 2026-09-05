import { CompanyProfile } from "@domain/entities/CompanyProfile";
import { ICompanyProfileRepository } from "@domain/repositories/ICompanyProfileRepository";
import { companyProfileData } from "@infrastructure/data/company-profile.data";

/**
 * Implementasi konkret ICompanyProfileRepository menggunakan data statis.
 * Jika suatu saat data ingin diambil dari CMS/API, cukup buat
 * implementasi baru (misal ApiCompanyProfileRepository) tanpa
 * mengubah use-case maupun komponen presentasi.
 */
export class StaticCompanyProfileRepository implements ICompanyProfileRepository {
  async getProfile(): Promise<CompanyProfile> {
    return companyProfileData;
  }
}
