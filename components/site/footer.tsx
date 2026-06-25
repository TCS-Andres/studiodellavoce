import Link from "next/link";
import { Logo } from "./logo";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Vocal Lessons", href: "/vocal-lessons/individual" },
  { label: "Online Resources", href: "/online-resources" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Voice restoration and vocal transformation with Dr. Marcella
              Amoruso — helping every voice become its most authentic, powerful
              self.
            </p>
          </div>

          <div>
            <h3 className="text-white text-base font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="underline-offset-4 hover:text-white hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="underline-offset-4 hover:text-white hover:underline"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base font-semibold">Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="underline-offset-4 hover:text-white hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base font-semibold">Get in Touch</h3>
            <div className="mt-4 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Studio della Voce. All rights reserved.
          </p>
          <p>Voice Restoration &amp; Vocal Transformation.</p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
