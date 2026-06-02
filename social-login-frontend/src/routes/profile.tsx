import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Field, PrimaryButton } from "@/components/AuthShell";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — Authly" }] }),
  component: Profile,
});

function Profile() {
  return (
    <DashboardLayout title="Profile" description="Update your personal information.">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex flex-col items-center text-center">
            <div className="h-24 w-24 rounded-full bg-gradient-brand grid place-items-center text-white text-3xl font-bold shadow-glow">AR</div>
            <h3 className="mt-4 font-semibold text-lg">Afiq Rahman</h3>
            <p className="text-sm text-muted-foreground">afiq@authly.io</p>
            <button className="mt-4 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition">Change avatar</button>
          </div>
        </div>
        <form className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4" onSubmit={(e) => e.preventDefault()}>
          <h3 className="font-semibold text-lg">Personal information</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" id="name" placeholder="Afiq Rahman" />
            <Field label="Email" id="email" type="email" placeholder="afiq@authly.io" />
            <Field label="Phone" id="phone" placeholder="+60 12-345 6789" />
            <Field label="Company" id="company" placeholder="Authly" />
          </div>
          <Field label="Bio" id="bio" placeholder="A short bio about yourself" />
          <div className="pt-2">
            <PrimaryButton type="submit">Save changes</PrimaryButton>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
