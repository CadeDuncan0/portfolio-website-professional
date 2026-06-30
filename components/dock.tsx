import { Home, Github, Linkedin, Twitter, Youtube, Sun } from "@/components/icons";

const iconClass =
  "flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[rgba(0,234,255,0.1)] bg-[rgba(0,234,255,0.04)] text-cyber-cyan transition-colors hover:border-cyber-cyan/40 hover:bg-cyber-cyan/10";

const Divider = () => <span className="mx-1 h-6 w-px bg-[rgba(0,234,255,0.22)]" />;

export function Dock() {
  return (
    <div className="mt-12 flex justify-center">
      <div className="inline-flex items-center gap-1.5 rounded-[30px] border border-[rgba(0,234,255,0.22)] bg-[rgba(12,16,30,0.7)] px-3.5 py-[9px] shadow-[0_0_24px_rgba(0,234,255,0.22),inset_0_0_18px_rgba(0,234,255,0.06)] backdrop-blur-md">
        <a href="#" className={iconClass} aria-label="Home">
          <Home className="h-[18px] w-[18px]" />
        </a>
        <Divider />
        <a href="#" className={iconClass} aria-label="GitHub">
          <Github className="h-[18px] w-[18px]" />
        </a>
        <a href="#" className={iconClass} aria-label="LinkedIn">
          <Linkedin className="h-[18px] w-[18px]" />
        </a>
        <a href="#" className={iconClass} aria-label="Twitter">
          <Twitter className="h-[18px] w-[18px]" />
        </a>
        <a href="#" className={iconClass} aria-label="YouTube">
          <Youtube className="h-[18px] w-[18px]" />
        </a>
        <Divider />
        <button
          type="button"
          aria-label="Toggle theme"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[rgba(252,238,10,0.35)] bg-[rgba(0,234,255,0.04)] text-cyber-yellow shadow-[0_0_14px_rgba(252,238,10,0.3)]"
        >
          <Sun className="h-[18px] w-[18px]" />
        </button>
      </div>
    </div>
  );
}
