export type RuntimeStatus = {
  label: string;
  value: string;
  state: "healthy" | "warning" | "blocked";
  detail: string;
  trend: string;
};

const stateStyles: Record<RuntimeStatus["state"], string> = {
  healthy: "border-emerald-400/18 bg-emerald-400/8 text-emerald-100",
  warning: "border-amber-400/18 bg-amber-400/8 text-amber-100",
  blocked: "border-rose-400/18 bg-rose-400/8 text-rose-100",
};

export function RuntimeStatusCards({
  statuses,
}: {
  statuses: RuntimeStatus[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {statuses.map((status, index) => (
        <article
          className="panel-glass group flex h-full min-h-[18rem] flex-col rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_28px_72px_rgba(0,0,0,0.42)] sm:min-h-[17rem]"
          key={status.label}
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-slate-400">{status.label}</p>
            <span
              className={`rounded-lg border px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] ${stateStyles[status.state]}`}
            >
              {status.state}
            </span>
          </div>
          <div className="mt-6 flex items-end justify-between gap-4">
            <p className="font-mono text-[2rem] font-semibold leading-none text-white">
              {status.value}
            </p>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cyan-200">
              <span className="live-dot size-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.45)]" />
              live
            </div>
          </div>
          <div className="mt-5 flex min-h-[4.75rem] items-start justify-between gap-4">
            <p className="max-w-[15rem] text-sm leading-6 text-slate-500">
              {status.detail}
            </p>
            <p className="shrink-0 rounded-md bg-white/[0.03] px-2 py-1 font-mono text-xs text-cyan-200">
              {status.trend}
            </p>
          </div>
          <div className="mt-auto pt-5">
            <div className="h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/22 to-cyan-300/0" />
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-slate-600">
            Updated from runtime telemetry bus
          </p>
        </article>
      ))}
    </div>
  );
}
