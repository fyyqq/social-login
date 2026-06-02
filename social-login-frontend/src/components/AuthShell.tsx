import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { providers } from "./ProviderIcons";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="flex flex-col px-6 sm:px-10 py-8">
        <Logo />
        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
            <div className="mt-8">{children}</div>
            {footer && <div className="mt-6 text-sm text-center text-muted-foreground">{footer}</div>}
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          By continuing you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
      <aside className="hidden lg:flex relative overflow-hidden bg-gradient-brand text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 70%, white 0, transparent 35%)" }} />
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <Link to="/" className="text-sm text-white/80 hover:text-white">← Back to home</Link>
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight max-w-md">
              One auth platform.<br />Every login your users expect.
            </h2>
            <p className="mt-4 text-white/80 max-w-md">
              Email, magic links, passkeys, and five social providers — all behind a single, beautiful API.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {providers.map(({ id, name, Icon }) => (
                <div key={id} className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-sm border border-white/15">
                  <span className="bg-white rounded-full p-1"><Icon /></span>
                  {name}
                </div>
              ))}
            </div>
          </div>
          <blockquote className="text-sm text-white/85 max-w-md">
            "Authly let us ship social login in an afternoon. Our conversion went up 28%."
            <footer className="mt-2 text-white/60">— Afiq R., Founder at Northwind</footer>
          </blockquote>
        </div>
      </aside>
    </div>
  );
}

export function SocialButtonGrid({ label = "Continue" }: { label?: string }) {
  return (
    <div className="space-y-2">
      {providers.map(({ id, name, Icon }) => (
        <button
          key={id}
          type="button"
          className="w-full inline-flex items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium hover:bg-muted hover:border-border transition shadow-soft"
        >
          <Icon />
          {label} with {name}
        </button>
      ))}
    </div>
  );
}

export function OrDivider({ text = "OR CONTINUE WITH EMAIL" }: { text?: string }) {
  return (
    <div className="my-6 flex items-center gap-3">
      <span className="h-px flex-1 bg-border" />
      <span className="text-[10px] font-semibold tracking-widest text-muted-foreground">{text}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function Field({
  label,
  id,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-ring transition"
      />
    </div>
  );
}

export function PrimaryButton({ children, type = "button" }: { children: ReactNode; type?: "button" | "submit" }) {
  return (
    <button
      type={type}
      className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-glow transition-all"
    >
      {children}
    </button>
  );
}
