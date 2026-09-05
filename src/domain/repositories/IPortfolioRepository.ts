import { Portfolio } from "@domain/entities/Portfolio";

export interface IPortfolioRepository {
  getAll(): Promise<Portfolio[]>;
  getById(id: string): Promise<Portfolio | undefined>;
}
