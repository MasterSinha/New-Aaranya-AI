export default function PhoneMockup() {
  return (
    <div className="relative mx-auto h-72 w-36 origin-center [perspective:1200px] sm:h-96 sm:w-48">
      <div className="absolute inset-0 animate-float [transform-style:preserve-3d]">
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400/15 to-cyan-400/10 p-1 shadow-[0_0_40px_hsl(var(--neon-emerald)/0.35)]">
          <div className="relative h-full w-full rounded-[1.6rem] bg-black">
            <div className="absolute inset-x-4 top-3 h-5 rounded-full bg-zinc-800" />
            <img
              src="/placeholder.svg"
              alt="App preview"
              className="absolute inset-0 h-full w-full rounded-[1.6rem] object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
