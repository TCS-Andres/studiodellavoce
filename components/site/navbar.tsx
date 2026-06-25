"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const pathname = usePathname();
  // Interior pages open with a dark gradient hero, so the transparent navbar
  // needs light text until the user scrolls and it turns solid white.
  const light = !scrolled && pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(42,21,56,0.4)]"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo dark={light} />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-pill px-4 py-2 text-sm font-medium transition-colors",
                    light
                      ? "text-white/85 hover:text-white"
                      : "text-ink/80 hover:text-magenta"
                  )}
                >
                  {item.label}
                  <Chevron className="transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[15rem] rounded-2xl border border-line bg-white p-2 shadow-[0_24px_60px_-24px_rgba(42,21,56,0.45)]">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink/80 transition-colors hover:bg-mist hover:text-purple"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-pill px-4 py-2 text-sm font-medium transition-colors",
                  light
                    ? "text-white/85 hover:text-white"
                    : pathname === item.href
                      ? "text-magenta"
                      : "text-ink/80 hover:text-magenta"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="gradient" size="sm">
            Schedule Lesson
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className={cn(
            "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full shadow-sm backdrop-blur transition-colors",
            light ? "bg-white/15 text-white" : "bg-white/70 text-ink"
          )}
        >
          <span className="sr-only">Menu</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-[80vh]" : "max-h-0"
        )}
      >
        <div className="container-x pb-6 pt-2">
          <div className="rounded-3xl border border-line bg-white p-3 shadow-xl">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-line/70 last:border-0">
                  <button
                    onClick={() =>
                      setOpenSub((s) => (s === item.label ? null : item.label))
                    }
                    className="flex w-full items-center justify-between px-4 py-3.5 text-left text-[0.95rem] font-medium text-ink"
                  >
                    {item.label}
                    <Chevron
                      className={cn(
                        "transition-transform",
                        openSub === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-[max-height] duration-300",
                      openSub === item.label ? "max-h-60" : "max-h-0"
                    )}
                  >
                    <div className="pb-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-xl px-6 py-2.5 text-sm text-ink/75 hover:bg-mist hover:text-purple"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block border-b border-line/70 px-4 py-3.5 text-[0.95rem] font-medium text-ink last:border-0"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="p-3">
              <Button href="/contact" variant="gradient" className="w-full">
                Schedule Lesson
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
