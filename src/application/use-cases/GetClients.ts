import { Client } from "@domain/entities/Client";
import { IClientRepository } from "@domain/repositories/IClientRepository";

export class GetClients {
  constructor(private readonly repository: IClientRepository) {}

  async execute(): Promise<Client[]> {
    return this.repository.getAll();
  }
}
