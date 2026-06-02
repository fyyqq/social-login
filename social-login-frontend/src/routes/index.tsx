import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { providers } from "@/components/ProviderIcons";
import { ShieldCheck, KeyRound, Fingerprint, Zap, LineChart, Globe2, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Authly — Authentication for modern SaaS" },
      { name: "description", content: "Drop-in auth with email, passkeys, and social login across Google, Apple, GitHub, Facebook & Microsoft." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: ShieldCheck, title: "Enterprise-grade security", desc: "SOC 2, GDPR, encryption at rest. Battle-tested defaults out of the box." },
  { icon: KeyRound, title: "Email & password", desc: "Polished flows for sign-in, sign-up, password reset and email verification." },
  { icon: Fingerprint, title: "Passkeys & 2FA", desc: "WebAuthn, TOTP, and SMS backup factor with one toggle." },
  { icon: Zap, title: "Drop-in components", desc: "Beautiful React components that match your brand in minutes." },
  { icon: LineChart, title: "Insights & sessions", desc: "Real-time analytics, device sessions, and login history." },
  { icon: Globe2, title: "Built for global apps", desc: "Multi-region, i18n-ready, GDPR-friendly with full data controls." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-brand-soft opacity-60" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-gradient-brand opacity-20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> New — Passkeys are now generally available
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Authentication that
            <span className="block text-gradient-brand">just works.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Add secure email, password, and social login to your SaaS in minutes. Beautiful, production-ready, and ready for whatever you build next.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/signup" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-glow hover:scale-[1.02] transition-all">
              Get started free
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
            </Link>
            <Link to="/login" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-muted transition">
              Sign in
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {["No credit card required", "Free for up to 10k MAUs", "5-minute setup"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" />{t}</span>
            ))}
          </div>
        </div>

        {/* Providers row */}
        <div id="providers" className="mx-auto max-w-5xl px-4 pb-20">
          <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">Works with every provider you need</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {providers.map(({ id, name, Icon }) => (
              <div key={id} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 shadow-soft hover:shadow-glow transition">
                <Icon />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-gradient-brand">Why Authly</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">Everything you need to ship auth.</h2>
          <p className="mt-4 text-muted-foreground">Stop reinventing login screens. Focus on your product — we handle the security, sessions, and edge cases.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-brand-soft text-primary group-hover:bg-gradient-brand group-hover:text-white transition">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 sm:p-16 text-white shadow-glow">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0, transparent 35%), radial-gradient(circle at 85% 80%, white 0, transparent 35%)" }} />
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">Start building today.</h2>
            <p className="mt-4 text-white/85 text-lg">Get your auth flow live in five minutes. Free forever for small teams.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/signup" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/90 transition">
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/login" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
