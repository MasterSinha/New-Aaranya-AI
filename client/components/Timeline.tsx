import { CheckCircle2, Leaf, Satellite, Smartphone, Sprout } from "lucide-react";

const steps = [
  {
    icon: <Leaf className="text-emerald-600" />,
    title: "Farmer inputs land",
    desc: "Add your farm location and soil basics in minutes.",
  },
  {
    icon: <Satellite className="text-emerald-600" />,
    title: "AI analyzes data",
    desc: "Soil + satellite + climate fused into intelligence.",
  },
  {
    icon: <Smartphone className="text-emerald-600" />,
    title: "Real-time insights",
    desc: "Get alerts, health scores and priority actions.",
  },
  {
    icon: <Sprout className="text-emerald-600" />,
    title: "Smarter decisions",
    desc: "Irrigate, fertilize and protect at the right time.",
  },
  {
    icon: <CheckCircle2 className="text-emerald-600" />,
    title: "Better yield",
    desc: "Grow sustainably with confidence and clarity.",
  },
];

export default function Timeline() {
  return (
    <ol className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li key={i} className="group relative rounded-xl border border-border/60 bg-card/60 p-4">
          <div className="mb-3 flex items-center gap-2">{s.icon}<span className="text-sm text-emerald-600">Step {i + 1}</span></div>
          <h5 className="font-semibold">{s.title}</h5>
          <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          {i < steps.length - 1 && (
            <span className="absolute right-[-14px] top-10 hidden h-[2px] w-7 bg-gradient-to-r from-emerald-500/40 to-transparent lg:block" />
          )}
        </li>
      ))}
    </ol>
  );
}
