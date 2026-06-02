import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Field, PrimaryButton } from "@/components/AuthShell";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — Authly" }] }),
  component: Settings,
});

function Settings() {
  const toggles = [
    { name: "Product updates", desc: "Get notified about new features and improvements.", on: true },
    { name: "Security alerts", desc: "Receive emails about important security events.", on: true },
    { name: "Marketing emails", desc: "Occasional tips, offers, and announcements.", on: false },
  ];
  return (
    <DashboardLayout title="Settings" description="Manage your workspace preferences.">
      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
          <h3 className="font-semibold text-lg">Workspace</h3>
          <Field label="Workspace name" id="ws" placeholder="Authly" />
          <Field label="Subdomain" id="sub" placeholder="authly" />
          <PrimaryButton type="submit">Save</PrimaryButton>
        </form>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h3 className="font-semibold text-lg">Email preferences</h3>
          <div className="mt-4 space-y-3">
            {toggles.map((t) => (
              <div key={t.name} className="flex items-start justify-between rounded-xl border border-border p-4">
                <div className="pr-4">
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.desc}</div>
                </div>
                <button className={`relative h-6 w-11 shrink-0 rounded-full transition ${t.on ? "bg-gradient-brand" : "bg-muted"}`}>
                  <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${t.on ? "left-5" : "left-0.5"}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-destructive/30 bg-card p-6 shadow-soft lg:col-span-2">
          <h3 className="font-semibold text-lg text-destructive">Danger zone</h3>
          <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data.</p>
          <button className="mt-4 rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-2 text-sm font-semibold text-destructive hover:bg-destructive/10 transition">
            Delete account
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
