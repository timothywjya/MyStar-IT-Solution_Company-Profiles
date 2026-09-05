export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-navy-700/15 bg-navy-900/[0.03] px-3 py-1 text-xs text-slate">
      {children}
    </span>
  );
}
