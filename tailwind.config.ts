import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0px hsl(var(--neon-emerald)/0.0), 0 0 0px hsl(var(--neon-cyan)/0.0)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--neon-emerald)/0.5), 0 0 60px hsl(var(--neon-cyan)/0.35)" },
        },
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        caret: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        glitch: {
          "0%": { clipPath: "inset(0 0 0 0)" },
          "10%": { clipPath: "inset(10% 0 85% 0)" },
          "20%": { clipPath: "inset(80% 0 5% 0)" },
          "30%": { clipPath: "inset(30% 0 60% 0)" },
          "40%": { clipPath: "inset(60% 0 30% 0)" },
          "50%": { clipPath: "inset(20% 0 70% 0)" },
          "60%": { clipPath: "inset(65% 0 25% 0)" },
          "70%": { clipPath: "inset(40% 0 55% 0)" },
          "80%": { clipPath: "inset(75% 0 15% 0)" },
          "90%": { clipPath: "inset(5% 0 90% 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        orbit: "orbit 14s linear infinite",
        glow: "glow 3s ease-in-out infinite",
        aurora: "aurora 12s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        caret: "caret 1.25s step-end infinite",
        glitch: "glitch 2s infinite steps(2, end)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
