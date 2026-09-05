import { Portfolio, PortfolioCategory } from "@domain/entities/Portfolio";
import { IPortfolioRepository } from "@domain/repositories/IPortfolioRepository";

export class GetPortfolios {
  constructor(private readonly repository: IPortfolioRepository) {}

  async execute(category?: PortfolioCategory): Promise<Portfolio[]> {
    const portfolios = await this.repository.getAll();
    if (!category) return portfolios;
    return portfolios.filter((p) => p.category === category);
  }
}
