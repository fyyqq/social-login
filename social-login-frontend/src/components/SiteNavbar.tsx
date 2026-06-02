import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#providers" className="hover:text-foreground transition">Providers</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#docs" className="hover:text-foreground transition">Docs</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center rounded-lg bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-soft hover:shadow-glow transition-all"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
