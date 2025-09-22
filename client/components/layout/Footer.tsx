import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-24 w-[60%] rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold">
            <span className="text-emerald-600">Aaranya AI</span>
            <span className="block text-sm font-normal text-muted-foreground mt-2">
              Where Intelligence Meets Soil
            </span>
          </h3>
          <p className="mt-4 text-muted-foreground max-w-md">
            Join the AI farming revolution. We blend satellite data, soil science, and machine learning to empower every farmer.
          </p>
          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram /></a>
            <a href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook /></a>
            <a href="#download" aria-label="Email" className="hover:text-foreground"><Mail /></a>
          </div>
        </div>
        <div>
          <form className="grid gap-3">
            <label className="text-sm text-muted-foreground">Contact us</label>
            <input className="rounded-md bg-muted/40 border border-border/60 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/60" placeholder="Your email" type="email" required />
            <textarea className="rounded-md bg-muted/40 border border-border/60 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/60 min-h-[100px]" placeholder="Tell us about your farm..." />
            <Button type="submit" className="justify-self-start bg-emerald-500 text-emerald-950 hover:bg-emerald-400 shadow-[0_0_30px_hsl(var(--neon-emerald)/0.35)]">Send</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aaranya AI. All rights reserved.
      </div>
    </footer>
  );
}
