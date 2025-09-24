import { Leaf, BarChart2, Bug, CloudSun, Sprout, CheckCircle2, Sparkles } from "lucide-react";
import Typewriter from "@/components/Typewriter";
import Aurora from "@/components/animated/Aurora";
import SatelliteOrbit from "@/components/animated/SatelliteOrbit";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import Timeline from "@/components/Timeline";
// Phone mockup replaced by static image from public

export default function Index() {
  return (
    <main className="relative">
      {/* HERO */}
      <section id="hero" className="relative overflow-hidden scroll-mt-24">
        <Aurora />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_hsl(var(--neon-emerald)/0.06),_transparent_65%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="flex flex-col items-center text-center gap-10 md:grid md:grid-cols-2 md:items-center md:text-left">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-700">
                <Sparkles className="text-emerald-600" /> Powered by AI + Satellites
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                <span className="block text-foreground"><Typewriter text="Revolutionizing Farming with Intelligence" speed={20} /></span>
              </h1>
              <p className="mt-5 max-w-xl text-muted-foreground md:mx-0 mx-auto">
                Aaranya AI combines nature's wisdom with artificial intelligence to help farmers grow smarter.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Button asChild size="lg" className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 shadow-[0_0_30px_hsl(var(--neon-emerald)/0.35)]">
                  <a href="#download">Download APK</a>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
              <SatelliteOrbit />
              <img
                src="/pic.jpg"
                alt="App preview"
                className="w-full h-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] rounded-xl border border-border/60 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="relative py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
              <h3 className="text-xl font-semibold">The Problem</h3>
              <ul className="mt-4 space-y-3">
                <li className="group rounded-md border border-border/60 bg-background/40 p-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-cyan-300">Unpredictable weather</span>
                  <div className="mt-1 text-sm text-muted-foreground">Hard-to-plan seasons and sudden extremes.</div>
                </li>
                <li className="group rounded-md border border-border/60 bg-background/40 p-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-cyan-300">Pests and disease</span>
                  <div className="mt-1 text-sm text-muted-foreground">Threats spread before anyone notices.</div>
                </li>
                <li className="group rounded-md border border-border/60 bg-background/40 p-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-cyan-300">Low yields</span>
                  <div className="mt-1 text-sm text-muted-foreground">Decisions are reactive, not proactive.</div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6">
              <h3 className="text-xl font-semibold">The Aaranya AI Way</h3>
              <ul className="mt-4 space-y-3">
                <li className="rounded-md border border-emerald-500/30 bg-background/40 p-4">
                  <div className="flex items-center gap-2 text-emerald-600"><CheckCircle2 /> Real-time insights</div>
                  <div className="mt-1 text-sm text-muted-foreground">Plan with precision and alerts that matter.</div>
                </li>
                <li className="rounded-md border border-emerald-500/30 bg-background/40 p-4">
                  <div className="flex items-center gap-2 text-emerald-600"><CheckCircle2 /> AI pest prediction</div>
                  <div className="mt-1 text-sm text-muted-foreground">Early warnings before threats spread.</div>
                </li>
                <li className="rounded-md border border-emerald-500/30 bg-background/40 p-4">
                  <div className="flex items-center gap-2 text-emerald-600"><CheckCircle2 /> Soil health intelligence</div>
                  <div className="mt-1 text-sm text-muted-foreground">Understand the foundation; grow sustainably.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-3xl font-bold">Features</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            A balance of farm wisdom and neural precision — designed for real fields and real results.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={<Leaf />} title="Soil Intelligence" subtitle="Your farm’s foundation, decoded by AI." />
            <FeatureCard icon={<Sprout />} title="Crop Vitality" subtitle="Monitor health as if nature could text you updates." />
            <FeatureCard icon={<Bug />} title="Pest Prediction" subtitle="Early alerts before threats spread." />
            <FeatureCard icon={<BarChart2 />} title="Actionable Analytics" subtitle="Numbers that talk like wisdom." />
            <FeatureCard icon={<CloudSun />} title="Smart Weather Insights" subtitle="Forecasts that matter for farmers." />
            <FeatureCard icon={<Sparkles />} title="AI Assistance" subtitle="Guidance that learns your land." />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-3xl font-bold">How Aaranya Works</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            From earth to insight to action — a step-by-step journey.
          </p>
          <div className="mt-10 flex flex-col items-center gap-10">
            <Timeline />
            {/* Live Demo section removed as requested */}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="relative py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-3xl font-bold">Impact Stories</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            Farmers worldwide are seeing measurable improvements within a season.
          </p>
          <div className="mt-10 overflow-hidden">
            <div className="flex animate-marquee gap-6 whitespace-nowrap">
              {[
                "My crop yield improved by 25% in one season!",
                "Irrigation timing is now spot-on.",
                "Pest alerts saved my vegetables.",
                "I trust my data more than ever.",
              ].map((q, i) => (
                <blockquote
                  key={i}
                  className="rounded-xl border border-border/60 bg-card/60 px-6 py-4 text-emerald-700 shadow-sm"
                >
                  “{q}”
                </blockquote>
              ))}
              {[
                "My crop yield improved by 25% in one season!",
                "Irrigation timing is now spot-on.",
                "Pest alerts saved my vegetables.",
                "I trust my data more than ever.",
              ].map((q, i) => (
                <blockquote
                  key={`dup-${i}`}
                  className="rounded-xl border border-border/60 bg-card/60 px-6 py-4 text-emerald-700 shadow-sm"
                >
                  “{q}”
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="relative py-24 scroll-mt-24">
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-40 w-[60%] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold">Be part of the AI Farming Revolution</h3>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Free early access – empower your farm today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 shadow-[0_0_40px_hsl(var(--neon-emerald)/0.45)]">
              <a href="https://drive.usercontent.google.com/download?id=1JBnBW-canTJmnKsyAla2ABdq_1Pnsix5&export=download&authuser=0">Download APK</a>
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">Android only for early access</p>
          </div>
        </div>
      </section>
    </main>
  );
}
