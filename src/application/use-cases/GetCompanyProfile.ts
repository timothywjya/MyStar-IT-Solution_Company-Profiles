import { CompanyProfile } from "@domain/entities/CompanyProfile";
import { ICompanyProfileRepository } from "@domain/repositories/ICompanyProfileRepository";

/**
 * Use-case: mengambil data profil perusahaan (About Me, Visi, Misi).
 * Bergantung pada abstraksi (interface), bukan implementasi konkret —
 * sehingga sumber data bisa diganti tanpa mengubah use-case ini.
 */
export class GetCompanyProfile {
  constructor(private readonly repository: ICompanyProfileRepository) {}

  async execute(): Promise<CompanyProfile> {
    return this.repository.getProfile();
  }
}
