import { Client } from "@domain/entities/Client";

export interface IClientRepository {
  getAll(): Promise<Client[]>;
}
