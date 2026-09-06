import Image from "next/image";
import { Client } from "@domain/entities/Client";

export function ClientCard({ client }: { client: Client }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-navy-900/[0.06] bg-white p-5">
      <div className="relative h-14 w-full sm:h-16">
        <Image
          src={client.logoUrl}
          alt={client.name}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 45vw"
          className="object-contain"
        />
      </div>
      <p className="text-center text-xs text-slate-light">{client.type}</p>
    </div>
  );
}
