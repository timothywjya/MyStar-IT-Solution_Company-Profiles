import { GalleryItem } from "@domain/entities/GalleryItem";
import { IGalleryRepository } from "@domain/repositories/IGalleryRepository";

export class GetGalleryItems {
  constructor(private readonly repository: IGalleryRepository) {}

  async execute(): Promise<GalleryItem[]> {
    return this.repository.getAll();
  }
}
