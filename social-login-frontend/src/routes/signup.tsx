import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell, SocialButtonGrid, OrDivider, Field, PrimaryButton } from "@/components/AuthShell";
import type { FormEvent } from "react";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create your account — Authly" }] }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: "/dashboard" });
  };
  return (
    <AuthShell
      title="Create your account"
      subtitle="Start your free Authly account. No credit card required."
      footer={<>Already have an account? <Link to="/login" className="font-semibold text-primary hover:underline">Sign in</Link></>}
    >
      <SocialButtonGrid label="Sign up" />
      <OrDivider text="OR SIGN UP WITH EMAIL" />
      <form onSubmit={onSubmit} className="space-y-4">
        <Field label="Full name" id="name" placeholder="Afiq Rahman" autoComplete="name" />
        <Field label="Email" id="email" type="email" placeholder="you@company.com" autoComplete="email" />
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Password" id="password" type="password" placeholder="••••••••" autoComplete="new-password" />
          <Field label="Confirm" id="confirm" type="password" placeholder="••••••••" autoComplete="new-password" />
        </div>
        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-border accent-[color:var(--primary)]" />
          <span>I agree to the <a href="#" className="text-primary hover:underline">Terms</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.</span>
        </label>
        <PrimaryButton type="submit">Create account</PrimaryButton>
      </form>
    </AuthShell>
  );
}
