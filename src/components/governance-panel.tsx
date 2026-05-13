import { SectionPanel } from "@/components/section-panel";

export type Policy = {
  name: string;
  result: "pass" | "warn" | "fail";
  evidence: string;
};

const resultStyles: Record<Policy["result"], string> = {
  pass: "bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.24)]",
  warn: "bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.24)]",
  fail: "bg-rose-300 shadow-[0_0_14px_rgba(251,113,133,0.24)]",
};

export function GovernancePanel({
  policies,
  riskScore,
  summary,
}: {
  policies: Policy[];
  riskScore: number;
  summary: string;
}) {
  return (
    <SectionPanel eyebrow="Governance validation panel" title="Policy posture">
      <div className="p-5 sm:p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-medium text-slate-500">Composite risk score</p>
            <p className="mt-2 font-mono text-[2.75rem] font-semibold leading-none text-white">
              {riskScore}
              <span className="ml-1 text-lg text-slate-500">/100</span>
            </p>
          </div>
          <div className="relative mx-auto size-28 rounded-full border border-white/8 bg-conic-[from_180deg,theme(colors.emerald.300)_0_72%,theme(colors.amber.300)_72%_86%,theme(colors.rose.300)_86%_100%] p-2 shadow-[0_16px_36px_rgba(0,0,0,0.32)] sm:mx-0">
            <div className="absolute inset-2 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_50%),#071017]" />
            <div className="relative flex size-full items-center justify-center rounded-full font-mono text-sm uppercase tracking-[0.18em] text-slate-300">
              gated
            </div>
          </div>
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-400">{summary}</p>
      </div>
      <div className="divide-y divide-white/6 border-t border-white/6">
        {policies.map((policy) => (
          <div
            className="flex gap-3 px-5 py-4 transition duration-200 hover:bg-white/[0.025] sm:px-6"
            key={policy.name}
          >
            <span
              className={`mt-1.5 size-2.5 rounded-full ${resultStyles[policy.result]}`}
            />
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <p className="text-sm font-medium text-slate-100">
                  {policy.name}
                </p>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  {policy.result}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-6 text-slate-500">
                {policy.evidence}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionPanel>
  );
}
