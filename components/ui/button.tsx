import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "gold" | "gradient" | "outline" | "white" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold font-display transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Gold is the primary brand CTA (nav, course, mini-about) per Figma.
  gold:
    "bg-gold text-white shadow-[0_12px_30px_-12px_rgba(216,171,75,0.75)] hover:brightness-105 hover:-translate-y-0.5",
  // Solid purple CTA (hero, general).
  primary:
    "bg-purple text-white shadow-[0_10px_30px_-12px_rgba(124,6,156,0.65)] hover:brightness-110 hover:-translate-y-0.5",
  gradient:
    "bg-brand text-white shadow-[0_12px_34px_-12px_rgba(148,52,138,0.65)] hover:-translate-y-0.5 hover:brightness-105",
  outline:
    "border border-purple/35 text-purple bg-white/70 hover:bg-purple hover:text-white hover:border-purple",
  white:
    "bg-white text-purple shadow-[0_10px_30px_-14px_rgba(0,0,0,0.4)] hover:-translate-y-0.5",
  ghost: "text-purple hover:text-purple-deep",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[0.95rem] px-6 py-3",
  lg: "text-base px-8 py-3.5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  target,
  ...rest
}: CommonProps & {
  href: string;
  target?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const external = href.startsWith("http");
  if (external) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel="noreferrer"
        className={cls}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} target={target} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonEl({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
