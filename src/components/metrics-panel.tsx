import { SectionPanel } from "@/components/section-panel";

export type RuntimeMetric = {
  label: string;
  value: string;
  unit: string;
  series: number[];
};

export function MetricsPanel({ metrics }: { metrics: RuntimeMetric[] }) {
  return (
    <SectionPanel eyebrow="Token/runtime metrics" title="Throughput and cost">
      <div className="grid gap-0 divide-y divide-white/6">
        {metrics.map((metric) => (
          <div
            className="px-5 py-5 transition duration-200 hover:bg-white/[0.025] sm:px-6"
            key={metric.label}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-400">{metric.label}</p>
                <p className="mt-2 font-mono text-2xl text-slate-100">
                  {metric.value}
                  <span className="ml-2 inline-block align-middle text-xs uppercase tracking-[0.18em] text-slate-500">
                    {metric.unit}
                  </span>
                </p>
              </div>
              <div className="mt-1 shrink-0 rounded-lg border border-cyan-400/16 bg-cyan-400/7 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
                live
              </div>
            </div>
            <div className="mt-5 flex h-16 items-end gap-1.5">
              {metric.series.map((point, index) => (
                <span
                  className="telemetry-bar w-full rounded-t-md bg-gradient-to-t from-cyan-400/45 to-cyan-200/85 transition duration-300 hover:from-cyan-300/60 hover:to-cyan-100 shadow-[0_0_12px_rgba(103,232,249,0.12)]"
                  key={`${metric.label}-${index}`}
                  style={{ height: `${point}%` }}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-600">
              <span>12 windows</span>
              <span>stream aligned</span>
            </div>
          </div>
        ))}
      </div>
    </SectionPanel>
  );
}
