export default function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -top-40 left-1/2 h-[80vh] w-[120vw] -translate-x-1/2 rounded-full opacity-60 blur-3xl animate-aurora"
        style={{
          background:
            "linear-gradient(120deg, hsl(var(--aurora-1)) 0%, hsl(var(--aurora-2)) 50%, hsl(var(--aurora-3)) 100%)",
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  );
}
