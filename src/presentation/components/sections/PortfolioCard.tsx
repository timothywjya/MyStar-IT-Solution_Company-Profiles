import Image from "next/image";
import { Portfolio } from "@domain/entities/Portfolio";
import { Tag } from "@presentation/components/ui/Tag";

export function PortfolioCard({ portfolio }: { portfolio: Portfolio }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-navy-900/[0.06] bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-950/[0.04]">
        <Image
          src={portfolio.imageUrl}
          alt={portfolio.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-teal">{portfolio.category}</p>
        <h3 className="mt-2 font-display text-lg font-medium text-ink">{portfolio.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">{portfolio.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {portfolio.techStack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <p className="mt-5 text-xs text-slate-light">
          Dikerjakan untuk {portfolio.client}, {portfolio.year}
        </p>
      </div>
    </article>
  );
}
