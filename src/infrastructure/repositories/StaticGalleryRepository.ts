import { GalleryItem } from "@domain/entities/GalleryItem";
import { IGalleryRepository } from "@domain/repositories/IGalleryRepository";
import { galleryData } from "@infrastructure/data/gallery.data";

export class StaticGalleryRepository implements IGalleryRepository {
  async getAll(): Promise<GalleryItem[]> {
    return galleryData;
  }
}
