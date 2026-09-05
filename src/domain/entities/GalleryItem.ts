/**
 * Domain Entity: GalleryItem
 *
 * Merepresentasikan satu foto dalam galeri (kantor, tim, kegiatan, event).
 */
export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  category: "Kantor" | "Tim" | "Kegiatan" | "Event";
}
