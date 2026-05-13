import { SectionPanel } from "@/components/section-panel";

export type ToolCall = {
  id: string;
  tool: string;
  caller: string;
  status: "ok" | "retry" | "denied";
  latencyMs: number;
  input: string;
  output: string;
};

const statusStyles: Record<ToolCall["status"], string> = {
  ok: "text-emerald-100 bg-emerald-400/8 border-emerald-400/18",
  retry: "text-amber-100 bg-amber-400/8 border-amber-400/18",
  denied: "text-rose-100 bg-rose-400/8 border-rose-400/18",
};

export function ToolTracePanel({ traces }: { traces: ToolCall[] }) {
  return (
    <SectionPanel
      eyebrow="Tool call trace panel"
      title="External actions and policy outcomes"
      action={
        <p className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-slate-400">
          trace_id=rt_9f71a
        </p>
      }
      className="animate-rise-delay"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] table-fixed text-left text-sm">
          <colgroup>
            <col className="w-[18%]" />
            <col className="w-[14%]" />
            <col className="w-[26%]" />
            <col className="w-[26%]" />
            <col className="w-[8%]" />
            <col className="w-[8%]" />
          </colgroup>
          <thead className="border-b border-white/6 bg-white/[0.025] text-[11px] uppercase tracking-[0.18em] text-slate-500">
            <tr>
              <th className="px-5 py-3 font-medium">Tool</th>
              <th className="px-5 py-3 font-medium">Caller</th>
              <th className="px-5 py-3 font-medium">Input</th>
              <th className="px-5 py-3 font-medium">Output</th>
              <th className="px-5 py-3 text-right font-medium">Latency</th>
              <th className="px-5 py-3 text-right font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/6">
            {traces.map((trace) => (
              <tr className="transition duration-200 hover:bg-white/[0.025]" key={trace.id}>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-cyan-300/80 shadow-[0_0_12px_rgba(103,232,249,0.35)]" />
                    <span className="font-mono text-cyan-100">{trace.tool}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-slate-300">{trace.caller}</td>
                <td className="px-5 py-4 leading-6 text-slate-400">
                  {trace.input}
                </td>
                <td className="px-5 py-4 leading-6 text-slate-400">
                  {trace.output}
                </td>
                <td className="px-5 py-4 text-right font-mono text-slate-300">
                  {trace.latencyMs} ms
                </td>
                <td className="px-5 py-4 text-right">
                  <span
                    className={`rounded-lg border px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] ${statusStyles[trace.status]}`}
                  >
                    {trace.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionPanel>
  );
}
