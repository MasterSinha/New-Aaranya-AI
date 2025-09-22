import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export default function FeatureCard({ icon, title, subtitle }: Props) {
  return (
    <div className="group [perspective:1000px]">
      <div className="relative h-48 w-full rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 grid place-items-start gap-3 [backface-visibility:hidden]">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600">
            {icon}
          </div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className="absolute inset-0 grid place-items-center rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-5 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-sm text-emerald-700">
            Optimized by AI • Real-time • Privacy-first
          </p>
          <div className="mt-3 h-8 w-36 rounded-full bg-emerald-400/20 blur-xl" />
        </div>
      </div>
    </div>
  );
}
