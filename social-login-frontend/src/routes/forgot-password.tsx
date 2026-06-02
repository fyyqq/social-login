import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, Field, PrimaryButton } from "@/components/AuthShell";
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset your password — Authly" }] }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  return (
    <AuthShell
      title="Forgot your password?"
      subtitle="Enter your email and we'll send you a secure reset link."
      footer={<>Remembered it? <Link to="/login" className="font-semibold text-primary hover:underline">Back to sign in</Link></>}
    >
      {sent ? (
        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
          <div className="mx-auto grid place-items-center h-12 w-12 rounded-full bg-success/10 text-success">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-semibold">Check your inbox</h3>
          <p className="mt-1 text-sm text-muted-foreground">We sent a reset link to your email. The link expires in 30 minutes.</p>
        </div>
      ) : (
        <form
          onSubmit={(e: FormEvent) => { e.preventDefault(); setSent(true); }}
          className="space-y-4"
        >
          <Field label="Email address" id="email" type="email" placeholder="you@company.com" autoComplete="email" />
          <PrimaryButton type="submit">Send reset link</PrimaryButton>
        </form>
      )}
    </AuthShell>
  );
}
