import { Client } from "@domain/entities/Client";
import { IClientRepository } from "@domain/repositories/IClientRepository";
import { clientData } from "@infrastructure/data/client.data";

export class StaticClientRepository implements IClientRepository {
  async getAll(): Promise<Client[]> {
    return clientData;
  }
}
