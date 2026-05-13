import Image from "next/image";

type TopNavProps = {
  environment: string;
  updatedAt: string;
};

export function TopNav({ environment, updatedAt }: TopNavProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/6 bg-[#080b10]/72 backdrop-blur-2xl">
      <nav className="mx-auto flex min-h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="signal-sheen flex h-[3.85rem] w-[3.85rem] items-center justify-center rounded-[1.15rem] border border-white/6 bg-white/[0.025] shadow-[0_10px_24px_rgba(0,0,0,0.24),0_0_18px_rgba(103,232,249,0.08)]">
            <Image
              src="/yusen-logo.png"
              alt="YSOS logo"
              width={36}
              height={36}
              className="h-9 w-auto object-contain drop-shadow-[0_0_8px_rgba(103,232,249,0.14)]"
              priority
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-[0.02em] text-white">
              Agent Runtime Control Plane
            </p>
            <p className="truncate text-[10px] tracking-[0.12em] text-slate-500/72">
              Powered by YSOS Governance Layer
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-1 rounded-xl border border-white/8 bg-white/[0.03] p-1 lg:flex">
          {["Overview", "Executions", "Policies", "Signals"].map((item) => (
            <a
              className="rounded-lg px-3 py-2 text-sm text-slate-400 transition duration-200 hover:bg-white/[0.05] hover:text-slate-100"
              href="#"
              key={item}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
              Last ingest
            </p>
            <p className="mt-1 font-mono text-xs text-slate-300">{updatedAt}</p>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-emerald-400/18 bg-emerald-400/8 px-3.5 py-2 text-xs font-medium text-emerald-100 shadow-[0_10px_26px_rgba(0,0,0,0.18)]">
            <span className="live-dot size-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.52)]" />
            {environment}
          </div>
        </div>
      </nav>
    </header>
  );
}
