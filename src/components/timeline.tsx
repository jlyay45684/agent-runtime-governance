import { SectionPanel } from "@/components/section-panel";

export type TimelineEvent = {
  id: string;
  time: string;
  agent: string;
  title: string;
  description: string;
  status: "completed" | "running" | "blocked" | "review";
  durationMs: number;
};

const statusStyles: Record<TimelineEvent["status"], string> = {
  completed: "bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.3)]",
  running: "bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.38)] live-dot",
  blocked: "bg-rose-300 shadow-[0_0_16px_rgba(251,113,133,0.28)]",
  review: "bg-amber-300 shadow-[0_0_16px_rgba(252,211,77,0.28)]",
};

export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <SectionPanel
      eyebrow="Agent execution timeline"
      title="Runtime event stream"
      action={
        <span className="rounded-lg border border-cyan-400/20 bg-cyan-400/8 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
          {events.length} spans
        </span>
      }
    >
      <div className="divide-y divide-white/6">
        {events.map((event) => (
          <div
            className="grid gap-4 px-5 py-5 transition duration-200 hover:bg-white/[0.025] sm:px-6 md:grid-cols-[108px_minmax(0,1fr)_120px]"
            key={event.id}
          >
            <div className="pt-1 font-mono text-xs text-slate-500">{event.time}</div>
            <div className="relative min-w-0 pl-8">
              <span
                className={`absolute left-0 top-2 size-2.5 rounded-full ${statusStyles[event.status]}`}
              />
              <div className="absolute bottom-0 left-[4px] top-6 w-px bg-gradient-to-b from-white/12 via-white/8 to-transparent" />
              <div className="flex flex-wrap items-center gap-2.5">
                <p className="text-[15px] font-semibold tracking-[0.01em] text-slate-100">
                  {event.title}
                </p>
                <span className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-400">
                  {event.agent}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                {event.description}
              </p>
            </div>
            <div className="flex items-start justify-between border-t border-white/6 pt-3 md:block md:border-t-0 md:pt-0 md:text-right">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-600">
                Duration
              </p>
              <p className="mt-1 font-mono text-sm text-slate-300">
                {event.durationMs} ms
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionPanel>
  );
}
