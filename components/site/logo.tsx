import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Studio della Voce — home"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <Mark />
      <span className="font-display leading-none">
        <span
          className={cn(
            "text-[1.15rem] font-bold tracking-tight",
            dark ? "text-white" : "text-ink"
          )}
        >
          STUDIO
        </span>
        <span
          className={cn(
            "mx-1 text-[0.95rem] font-normal italic",
            dark ? "text-white/80" : "text-muted"
          )}
        >
          della
        </span>
        <span
          className={cn(
            "text-[1.15rem] font-bold tracking-tight",
            dark ? "text-white" : "text-ink"
          )}
        >
          VOCE
        </span>
      </span>
    </Link>
  );
}

function Mark() {
  return (
    <svg
      width="38"
      height="40"
      viewBox="0 0 38 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vmark" x1="4" y1="38" x2="30" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7ac143" />
          <stop offset="0.4" stopColor="#2fa6c9" />
          <stop offset="0.72" stopColor="#5e2e92" />
          <stop offset="1" stopColor="#b4348a" />
        </linearGradient>
      </defs>
      {/* V */}
      <path
        d="M4 11 L15 35 C15.6 36.3 17.4 36.3 18 35 L29 11"
        stroke="url(#vmark)"
        strokeWidth="5.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* music notes */}
      <g fill="url(#vmark)">
        <circle cx="27.5" cy="9.5" r="2.6" />
        <circle cx="34" cy="6.5" r="2.6" />
        <rect x="29.4" y="2.2" width="1.6" height="7.6" rx="0.8" />
        <rect x="35.9" y="0" width="1.6" height="6.8" rx="0.8" />
        <path d="M29.4 3.2 L37.5 1.1 L37.5 3.0 L29.4 5.1 Z" />
      </g>
    </svg>
  );
}
