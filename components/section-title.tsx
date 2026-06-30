export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-[18px] flex items-center gap-2.5 font-display text-[20px] font-bold uppercase tracking-[2px] text-[#eafcff] neon-cyan">
      <span className="text-cyber-magenta neon-magenta">//</span>
      <span>{children}</span>
      <span className="ml-1 h-px flex-1 bg-gradient-to-r from-[rgba(0,234,255,0.22)] to-transparent" />
    </h2>
  );
}
