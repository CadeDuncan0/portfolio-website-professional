import type { ListEntry } from "@/lib/data";

export function ListRow({ letter, gradient, title, sub, date }: ListEntry) {
  return (
    <div className="mb-4 flex items-center gap-3.5">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center font-display text-[18px] font-bold text-[#03121a] clip-logo"
        style={{ background: gradient }}
      >
        {letter}
      </div>
      <div className="flex-1">
        <div className="text-base font-bold tracking-[0.3px] text-[#e9f6ff]">{title}</div>
        <div className="text-sm font-medium text-muted">{sub}</div>
      </div>
      <div className="whitespace-nowrap font-mono text-[12.5px] uppercase text-cyber-cyan/85">
        {date}
      </div>
    </div>
  );
}
