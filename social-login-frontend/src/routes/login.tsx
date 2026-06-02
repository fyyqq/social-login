import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell, SocialButtonGrid, OrDivider, Field, PrimaryButton } from "@/components/AuthShell";
import type { FormEvent } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Authly" }] }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: "/dashboard" });
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your Authly account to continue."
      footer={<>Don't have an account? <Link to="/signup" className="font-semibold text-primary hover:underline">Sign up</Link></>}
    >
      <SocialButtonGrid label="Continue" />
      <OrDivider />
      <form onSubmit={onSubmit} className="space-y-4">
        <Field label="Email" id="email" type="email" placeholder="you@company.com" autoComplete="email" />
        <Field label="Password" id="password" type="password" placeholder="••••••••" autoComplete="current-password" />
        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2 text-muted-foreground cursor-pointer">
            <input type="checkbox" className="h-4 w-4 rounded border-border accent-[color:var(--primary)]" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-primary font-medium hover:underline">Forgot password?</Link>
        </div>
        <PrimaryButton type="submit">Sign in</PrimaryButton>
      </form>
    </AuthShell>
  );
}
