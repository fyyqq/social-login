import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { providers } from "@/components/ProviderIcons";
import { Check, X, ArrowUpRight, Users, KeyRound, Shield, Activity } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Authly" }] }),
  component: Dashboard,
});

const connected: Record<string, boolean> = { google: true, facebook: false, apple: false, github: false, microsoft: false };

const stats = [
  { label: "Total users", value: "12,438", delta: "+12.4%", icon: Users },
  { label: "Sign-ins (24h)", value: "1,287", delta: "+3.2%", icon: KeyRound },
  { label: "2FA enabled", value: "68%", delta: "+5.1%", icon: Shield },
  { label: "Active sessions", value: "342", delta: "−1.8%", icon: Activity },
];

function Dashboard() {
  return (
    <DashboardLayout title="Dashboard" description="Here's what's happening with your account today.">
      {/* Welcome card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-brand p-6 sm:p-8 text-white shadow-glow mb-8">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 0, transparent 40%)" }} />
        <div className="relative z-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-white/80 text-sm">Welcome back,</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Afiq 👋</h2>
            <p className="mt-2 text-white/85 max-w-md text-sm">You're all set. Connect more providers to make signing in even easier across your devices.</p>
          </div>
          <Link to="/connected-accounts" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-foreground hover:bg-white/90 transition">
            Manage providers <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map(({ label, value, delta, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{label}</span>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">{value}</span>
              <span className={`text-xs font-medium ${delta.startsWith("−") ? "text-destructive" : "text-success"}`}>{delta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Authentication overview */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-lg">Authentication Overview</h3>
            <Link to="/connected-accounts" className="text-sm text-primary font-medium hover:underline">View all</Link>
          </div>
          <p className="text-sm text-muted-foreground mb-5">Providers currently linked to your account.</p>
          <ul className="divide-y divide-border">
            {providers.map(({ id, name, Icon }) => {
              const isOn = connected[id];
              return (
                <li key={id} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg border border-border grid place-items-center bg-background">
                      <Icon />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{name}</div>
                      <div className="text-xs text-muted-foreground">{isOn ? "Last used 2h ago" : "Not connected"}</div>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${isOn ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                    {isOn ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                    {isOn ? "Connected" : "Not connected"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h3 className="font-semibold text-lg">Security score</h3>
          <p className="text-sm text-muted-foreground">Strengthen your account.</p>
          <div className="mt-6 grid place-items-center">
            <div className="relative h-32 w-32">
              <svg viewBox="0 0 36 36" className="h-32 w-32 -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--muted)" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="url(#g)" strokeWidth="3" strokeDasharray="72, 100" strokeLinecap="round" />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.6 0.2 250)" />
                    <stop offset="100%" stopColor="oklch(0.55 0.24 295)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="text-3xl font-bold">72</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Good</div>
                </div>
              </div>
            </div>
          </div>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Strong password</li>
            <li className="flex items-center gap-2"><X className="h-4 w-4 text-destructive" /> Enable 2FA</li>
            <li className="flex items-center gap-2"><X className="h-4 w-4 text-destructive" /> Add backup email</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
