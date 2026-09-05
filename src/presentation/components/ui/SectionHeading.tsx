export function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-slate">{description}</p>}
    </div>
  );
}
