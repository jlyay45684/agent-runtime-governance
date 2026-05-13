import { GovernancePanel } from "@/components/governance-panel";
import type { Policy } from "@/components/governance-panel";
import { MetricsPanel } from "@/components/metrics-panel";
import type { RuntimeMetric } from "@/components/metrics-panel";
import { RuntimeStatusCards } from "@/components/runtime-status-cards";
import type { RuntimeStatus } from "@/components/runtime-status-cards";
import { Timeline } from "@/components/timeline";
import type { TimelineEvent } from "@/components/timeline";
import { ToolTracePanel } from "@/components/tool-trace-panel";
import type { ToolCall } from "@/components/tool-trace-panel";
import { TopNav } from "@/components/top-nav";
import runtimeData from "@/data/runtime-events.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b10] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_16%_12%,rgba(103,232,249,0.14),transparent_24%),radial-gradient(circle_at_84%_10%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_70%_38%,rgba(110,231,183,0.05),transparent_20%),linear-gradient(180deg,#06090e_0%,#0b1016_44%,#090d12_100%)]" />
      <TopNav
        environment={runtimeData.environment}
        updatedAt={runtimeData.updatedAt}
      />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:gap-7 lg:py-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(21rem,1fr)]">
          <div className="animate-rise space-y-6">
            <div className="panel-glass signal-sheen rounded-[1.75rem] px-5 py-6 sm:px-7 sm:py-7">
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_20%_40%,rgba(103,232,249,0.08),transparent_36%)]" />
              <div className="relative grid gap-6 lg:gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,21rem)] xl:items-end">
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-cyan-100">
                    <span className="live-dot size-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.42)]" />
                    AI Runtime Observability
                  </div>
                  <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl xl:text-5xl">
                    Agent Runtime Governance
                  </h1>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                    Live control plane for validating agent execution, tracing
                    tool calls, and enforcing runtime policy before workflows
                    reach production systems.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3 text-sm min-[520px]:grid-cols-3 xl:grid-cols-1">
                  {runtimeData.serviceObjectives.map((objective) => (
                    <div
                      className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 shadow-[0_14px_30px_rgba(0,0,0,0.18)] xl:min-h-[5.5rem]"
                      key={objective.label}
                    >
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        {objective.label}
                      </p>
                      <p className="mt-2 font-mono text-lg text-slate-100">
                        {objective.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <RuntimeStatusCards
              statuses={runtimeData.runtimeStatus as RuntimeStatus[]}
            />
            <Timeline events={runtimeData.timeline as TimelineEvent[]} />
          </div>

          <div className="animate-rise-delay space-y-6">
            <GovernancePanel
              policies={runtimeData.governance.policies as Policy[]}
              riskScore={runtimeData.governance.riskScore}
              summary={runtimeData.governance.summary}
            />
            <MetricsPanel metrics={runtimeData.metrics as RuntimeMetric[]} />
          </div>
        </div>

        <ToolTracePanel traces={runtimeData.toolCalls as ToolCall[]} />
      </section>
    </main>
  );
}
