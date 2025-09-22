export default function SatelliteOrbit() {
  return (
    <div className="absolute right-6 top-6 hidden md:block">
      <div className="relative h-56 w-56">
        <div className="absolute inset-0 rounded-full border border-emerald-500/30" />
        <div className="absolute inset-6 rounded-full border border-emerald-500/20" />
        <div className="absolute inset-12 rounded-full border border-emerald-500/10" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300" />
        <div className="absolute left-1/2 top-1/2 origin-center animate-orbit">
          <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_hsl(var(--neon-emerald)/0.9)]" />
        </div>
      </div>
    </div>
  );
}
