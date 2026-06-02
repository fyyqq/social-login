import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Field, PrimaryButton } from "@/components/AuthShell";
import { Smartphone, Monitor, MapPin, Check, X } from "lucide-react";

export const Route = createFileRoute("/security")({
  head: () => ({ meta: [{ title: "Security — Authly" }] }),
  component: Security,
});

const sessions = [
  { device: "MacBook Pro · Chrome", location: "Kuala Lumpur, MY", current: true, icon: Monitor },
  { device: "iPhone 15 · Safari", location: "Kuala Lumpur, MY", current: false, icon: Smartphone },
  { device: "Windows · Edge", location: "Singapore, SG", current: false, icon: Monitor },
];

const history = [
  { time: "2 minutes ago", device: "MacBook Pro · Chrome", ip: "175.143.0.12", ok: true },
  { time: "Yesterday, 9:42 AM", device: "iPhone 15 · Safari", ip: "175.143.0.18", ok: true },
  { time: "3 days ago", device: "Unknown · Firefox", ip: "84.22.110.4", ok: false },
  { time: "1 week ago", device: "Windows · Edge", ip: "203.116.55.2", ok: true },
];

function Security() {
  return (
    <DashboardLayout title="Security" description="Manage your password, two-factor authentication and active sessions.">
      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Change password</h3>
            <p className="text-sm text-muted-foreground">Use at least 8 characters, including a number and symbol.</p>
          </div>
          <Field label="Current password" id="current" type="password" />
          <Field label="New password" id="new" type="password" />
          <Field label="Confirm new password" id="confirm" type="password" />
          <PrimaryButton type="submit">Update password</PrimaryButton>
        </form>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h3 className="font-semibold text-lg">Two-factor authentication</h3>
          <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
          <div className="mt-6 space-y-3">
            {[
              { name: "Authenticator app", desc: "Use an app like 1Password or Authy", enabled: false },
              { name: "SMS backup", desc: "Receive codes via SMS", enabled: false },
              { name: "Recovery codes", desc: "10 one-time recovery codes", enabled: true },
            ].map((m) => (
              <div key={m.name} className="flex items-center justify-between rounded-xl border border-border p-4">
                <div>
                  <div className="text-sm font-medium">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.desc}</div>
                </div>
                <button className={`relative h-6 w-11 rounded-full transition ${m.enabled ? "bg-gradient-brand" : "bg-muted"}`}>
                  <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${m.enabled ? "left-5" : "left-0.5"}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft lg:col-span-2">
          <h3 className="font-semibold text-lg">Active sessions</h3>
          <p className="text-sm text-muted-foreground">Devices currently signed in to your account.</p>
          <ul className="mt-4 divide-y divide-border">
            {sessions.map((s) => (
              <li key={s.device} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-muted grid place-items-center"><s.icon className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm font-medium flex items-center gap-2">
                      {s.device}
                      {s.current && <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-success/10 text-success">This device</span>}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{s.location}</div>
                  </div>
                </div>
                <button className="text-sm font-medium text-destructive hover:underline">Revoke</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft lg:col-span-2">
          <h3 className="font-semibold text-lg">Login history</h3>
          <p className="text-sm text-muted-foreground">Recent sign-in activity.</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                  <th className="py-2 pr-4 font-medium">When</th>
                  <th className="py-2 pr-4 font-medium">Device</th>
                  <th className="py-2 pr-4 font-medium">IP</th>
                  <th className="py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {history.map((h, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-4 text-muted-foreground">{h.time}</td>
                    <td className="py-3 pr-4">{h.device}</td>
                    <td className="py-3 pr-4 font-mono text-xs">{h.ip}</td>
                    <td className="py-3">
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${h.ok ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                        {h.ok ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        {h.ok ? "Success" : "Blocked"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
