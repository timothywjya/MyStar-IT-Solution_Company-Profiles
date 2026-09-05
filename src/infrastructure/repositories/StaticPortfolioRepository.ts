import { Portfolio } from "@domain/entities/Portfolio";
import { IPortfolioRepository } from "@domain/repositories/IPortfolioRepository";
import { portfolioData } from "@infrastructure/data/portfolio.data";

export class StaticPortfolioRepository implements IPortfolioRepository {
  async getAll(): Promise<Portfolio[]> {
    return portfolioData;
  }

  async getById(id: string): Promise<Portfolio | undefined> {
    return portfolioData.find((p) => p.id === id);
  }
}
