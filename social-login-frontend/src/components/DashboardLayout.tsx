import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { LayoutDashboard, User, Shield, Link2, Settings, LogOut, Bell, Search } from "lucide-react";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/profile", label: "Profile", icon: User },
  { to: "/security", label: "Security", icon: Shield },
  { to: "/connected-accounts", label: "Connected Accounts", icon: Link2 },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function DashboardLayout({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  const path = useRouterState({ select: (r) => r.location.pathname });
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-sidebar">
        <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
          <Logo />
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {nav.map(({ to, label, icon: Icon }) => {
            const active = path === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-gradient-brand text-white shadow-soft"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <button
            onClick={() => navigate({ to: "/login" })}
            className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 h-16 bg-background/80 backdrop-blur border-b border-border flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <div className="relative w-full hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search..."
                className="w-full rounded-lg border border-input bg-card pl-9 pr-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative h-9 w-9 grid place-items-center rounded-lg hover:bg-muted transition">
              <Bell className="h-4 w-4" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive ring-2 ring-background" />
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-border">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-semibold leading-tight">Afiq Rahman</div>
                <div className="text-xs text-muted-foreground">afiq@authly.io</div>
              </div>
              <div className="h-9 w-9 rounded-full bg-gradient-brand grid place-items-center text-white text-sm font-semibold shadow-soft">
                AR
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-8">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h1>
            {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
