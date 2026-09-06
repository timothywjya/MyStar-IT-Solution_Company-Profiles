/**
 * Domain Entity: Client
 *
 * Merepresentasikan klien/mitra yang sudah pernah bekerja sama.
 */
export interface Client {
  id: string;
  name: string;
  type: string;
  logoUrl: string;
  since?: number;
}
