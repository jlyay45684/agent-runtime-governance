import type { ReactNode } from "react";

type SectionPanelProps = {
  title: string;
  eyebrow?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function SectionPanel({
  title,
  eyebrow,
  action,
  children,
  className = "",
}: SectionPanelProps) {
  return (
    <section
      className={`panel-glass rounded-2xl transition duration-300 hover:-translate-y-0.5 hover:border-white/10 hover:shadow-[0_28px_80px_rgba(0,0,0,0.42)] ${className}`}
    >
      <div className="relative flex flex-col gap-3 border-b border-white/6 px-5 py-5 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          {eyebrow ? (
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-lg font-semibold text-slate-50">
            {title}
          </h2>
        </div>
        <div className="shrink-0 self-start">{action}</div>
      </div>
      {children}
    </section>
  );
}
