import { GalleryItem } from "@domain/entities/GalleryItem";

/**
 * DATA PLACEHOLDER — ganti imageUrl dengan foto asli
 * (letakkan file di folder /public/images/gallery/).
 */
export const galleryData: GalleryItem[] = [
  {
    id: "gallery-1",
    imageUrl: "/images/gallery/gallery-1.svg",
    caption: "Suasana kantor My Stars IT Solution",
    category: "Kantor",
  },
  {
    id: "gallery-2",
    imageUrl: "/images/gallery/gallery-2.svg",
    caption: "Tim developer sedang code review",
    category: "Tim",
  },
  {
    id: "gallery-3",
    imageUrl: "/images/gallery/gallery-3.svg",
    caption: "Diskusi kebutuhan sistem bersama klien",
    category: "Kegiatan",
  },
  {
    id: "gallery-4",
    imageUrl: "/images/gallery/gallery-4.svg",
    caption: "Sesi pelatihan penggunaan sistem untuk klien",
    category: "Kegiatan",
  },
  {
    id: "gallery-5",
    imageUrl: "/images/gallery/gallery-5.svg",
    caption: "Tim di acara komunitas developer lokal",
    category: "Event",
  },
  {
    id: "gallery-6",
    imageUrl: "/images/gallery/gallery-6.svg",
    caption: "Perayaan ulang tahun perusahaan",
    category: "Event",
  },
];
