import Image from "next/image";
import { GalleryItem } from "@domain/entities/GalleryItem";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((item, i) => (
        <figure
          key={item.id}
          className={`group relative overflow-hidden rounded-2xl bg-navy-950/[0.04] ${
            i % 5 === 0 ? "col-span-2 aspect-[16/10] sm:col-span-1 sm:aspect-square" : "aspect-square"
          }`}
        >
          <Image
            src={item.imageUrl}
            alt={item.caption}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-4 text-xs text-paper/90">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
