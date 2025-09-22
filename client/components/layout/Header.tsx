import { useState } from "react";
import { Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="group inline-flex items-center gap-2">
          <div className="relative grid place-items-center">
            <span className="absolute inset-0 rounded-lg bg-emerald-400/20 blur-xl" />
            <img src="/A.jpg" alt="Logo" className="relative h-6 w-auto object-contain" />
          </div>
          <span className="text-lg font-semibold tracking-wide">
            <span className="text-foreground">Aaranya</span>
            <span className="text-emerald-600"> AI</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
          <a href="#story" className="text-muted-foreground hover:text-foreground transition">Story</a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition">Features</a>
          <a href="#how" className="text-muted-foreground hover:text-foreground transition">How it works</a>
          <a href="#impact" className="text-muted-foreground hover:text-foreground transition">Impact</a>
          <a href="#download" className="text-muted-foreground hover:text-foreground transition">Download</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:inline-flex bg-emerald-500 text-emerald-950 hover:bg-emerald-400 shadow-[0_0_30px_hsl(var(--neon-emerald)/0.35)]">
            <a href="https://drive.usercontent.google.com/download?id=17F-icdJPntzSF6152RjNE_wnc3LDNUiR&export=download&authuser=0"><Download /> Download APK</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-3">
            <a onClick={() => setOpen(false)} href="#story" className="rounded-md px-2 py-2 hover:bg-emerald-400/10">Story</a>
            <a onClick={() => setOpen(false)} href="#features" className="rounded-md px-2 py-2 hover:bg-emerald-400/10">Features</a>
            <a onClick={() => setOpen(false)} href="#how" className="rounded-md px-2 py-2 hover:bg-emerald-400/10">How it works</a>
            <a onClick={() => setOpen(false)} href="#impact" className="rounded-md px-2 py-2 hover:bg-emerald-400/10">Impact</a>
            <a onClick={() => setOpen(false)} href="#download" className="rounded-md px-2 py-2 hover:bg-emerald-400/10">Download</a>
            <Button asChild className="mt-1 bg-emerald-500 text-emerald-950 hover:bg-emerald-400"><a href="#download"><Download /> Download APK</a></Button>
          </div>
        </div>
      )}
    </header>
  );
}
