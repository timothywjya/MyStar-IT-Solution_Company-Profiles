import Image from "next/image";
import { Client } from "@domain/entities/Client";

export function ClientCard({ client }: { client: Client }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-navy-900/[0.06] bg-white px-6 py-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-950/[0.04]">
        <Image src={client.logoUrl} alt={client.name} width={32} height={32} className="opacity-70" />
      </div>
      <div>
        <p className="font-display text-base font-medium text-ink">{client.name}</p>
        <p className="mt-1 text-sm text-slate">{client.type}</p>
      </div>
      <p className="text-xs text-slate-light">Bekerja sama sejak {client.since}</p>
    </div>
  );
}
