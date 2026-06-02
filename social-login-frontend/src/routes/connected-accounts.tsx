import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { providers } from "@/components/ProviderIcons";
import { useState } from "react";
import { Check } from "lucide-react";

export const Route = createFileRoute("/connected-accounts")({
  head: () => ({ meta: [{ title: "Connected Accounts — Authly" }] }),
  component: ConnectedAccounts,
});

function ConnectedAccounts() {
  const [state, setState] = useState<Record<string, boolean>>({
    google: true, facebook: false, apple: false, github: false, microsoft: false,
  });

  return (
    <DashboardLayout title="Connected Accounts" description="Link social providers to sign in faster and recover your account.">
      <div className="rounded-2xl border border-border bg-card shadow-soft divide-y divide-border">
        {providers.map(({ id, name, Icon }) => {
          const isOn = state[id];
          return (
            <div key={id} className="flex flex-wrap items-center gap-4 justify-between p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl border border-border bg-background grid place-items-center">
                  <Icon />
                </div>
                <div>
                  <div className="font-semibold flex items-center gap-2">
                    {name}
                    {isOn && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-success/10 text-success">
                        <Check className="h-3 w-3" /> Connected
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {isOn ? `Linked as afiq@${id}.com` : `Sign in with your ${name} account`}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {isOn ? (
                  <button
                    onClick={() => setState((s) => ({ ...s, [id]: false }))}
                    className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/5 transition"
                  >
                    Disconnect
                  </button>
                ) : (
                  <button
                    onClick={() => setState((s) => ({ ...s, [id]: true }))}
                    className="rounded-lg bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-soft hover:shadow-glow transition"
                  >
                    Connect
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
